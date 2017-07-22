// many functions defined in label.rkt were included
// here as members of the Label class.
export module Data {
export class Label {
  datum : string
  i : number
  j : number

  // label.rkt - make-label: label-element -> label handled here
  constructor( thing: string, iIn = 0, jIn = -1) {
    this.datum = thing;
    this.i = iIn;
    if (jIn == -1) {
      this.j = thing.length
    } else {
      this.j = jIn;
    }
  }

  simpleToString() {
    return this.datum.substring( this.i, this.j);
  }

  actualToString() {
    return '['
            + ' datum: ' + this.datum
            + ', i: ' + this.i
            + ', j: ' + this.j
            + ']'
  }

  length() {
    return this.j - this.i
  }

  labelRef( k: number) {
    return this.datum[ k + this.i];
  }

  // no check rn if its a valid sublabel
  sublabel( start: number, end: number = undefined): Label {
    if (end == undefined) {
      return this.sublabel( start, this.length())
    } else {
      if (!(start <= end)) {
        // do nothing, there's a problem.
      }
      return new Label( this.datum, start + this.i, end + this.i)
    }
  }

  sublabelBang( start: number, end: number = undefined) {
    if ( end == undefined) {
      this.sublabelBang(start, this.length());
    } else {
      this.j = end + this.i;
      this.i = start + this.i;
    }
  }

  isPrefix( otherLabel: Label) {
    let m : number = this.length();
    let n : number = otherLabel.length();
    if (m > n) {
      return false
    } else {
      for (var i : number = 0; i < m; i++) {
        if (! (this.labelRef( i) == otherLabel.labelRef( i))) {
          return false
        }
      }
      return true
    }
  }

  equal( otherLabel: Label) {
    return (this.length() == otherLabel.length()) &&
           (this.isPrefix( otherLabel))
  }

  isEmpty() {
    return this.i >= this.j
  }

  toString() {
    return this.datum.substr( this.i, this.j)
  }

  toStringRemovingSentinel() {
    return this.datum.substr( this.i, Math.min( this.j, this.datum.length - 1))
  }

  copy() {
    return new Label( this.datum, this.i, this.j)
  }

  labelRefAtEnd( offset : number) : boolean {
    return this.length() == offset
  }

  isSourceEqual( otherLabel: Label) {
    return this.datum == otherLabel.datum
  }

}

export class SuffixTree {
  root : STNode

  constructor() {
    // The root node has no label, no parent, an empty list of
    // children.  Its suffix link is invalid, but we set it to #f.
    this.root = new STNode( new Label("", 0, 0),
                            undefined,
                            [],
                            undefined);
  }
}

function deepCopyLabelSTNodeArray( a : STNode[]) : STNode[]{
  let ret : STNode[] = [];

  for ( var i : number = 0; i < a.length; i++) {
    let curNode : STNode = a[ i];
    ret.push( curNode); // copy curNode
  }

  return ret;
}

let nodeID : number = 0;

export class STNode {
  upLabel : Label
  parent : STNode
  children : STNode[]
  suffixLink : STNode
  spID : number

  constructor(  iUpLabel    : Label,
                iParent     : STNode,
                iChildren   : STNode[],
                iSuffixLink : STNode) {
    //
    this.upLabel = iUpLabel;
    this.parent = iParent;
    this.children = iChildren;
    this.suffixLink = iSuffixLink;
    this.spID = nodeID;
    nodeID++;
  }

  simpleStr() {
    return '{ upLabel: ' + this.upLabel.simpleToString() + ', spID: ' + this.spID + '}'
  }

  // the root node is the node w/o a parent
  nodeRoot() {
    return this.parent == undefined
  }

  // returns the leaf
  addLeafBang( iLabel : Label) {
    let leaf : STNode = new STNode( iLabel, this, [], undefined);
    this.addChildBang( leaf);
    return leaf;
  }

  addChildBang( iNode : STNode) {
    this.children.push( iNode);
  }

  removeChildBang( iChild : STNode) {
    let theIndex : number = this.children.indexOf( iChild);
    this.children.splice(theIndex, 1);
  }

  isLeaf() {
    return this.children.length == 0;
  }

  // produces undefined if nothing can be found
  findChild( toFind : Label | string) {
    if ( toFind instanceof Label) {
      for ( var i : number = 0; i < this.children.length; i++) {
        let tmpLabel : Label = this.children[ i].upLabel;
        if (tmpLabel.labelRef( 0) == toFind.labelRef( 0)) {
          return this.children[ i];
        }
      }
      return undefined;
    } else if ( typeof toFind == "string") {
      for ( var i : number = 0; i < this.children.length; i++) {
        let tmpLabel : Label = this.children[ i].upLabel;
        if (tmpLabel.labelRef( 0) == toFind) {
          return this.children[ i];
        }
      }
      return undefined;
    }
  }

  // returns the inserted node
  upSplit( offset: number) {
    let label : Label = this.upLabel;
    let preLabel : Label = label.sublabel( 0, offset);
    let postLabel : Label = label.sublabel( offset);
    let parent : STNode = this.parent;
    let newNode : STNode = new STNode(  preLabel, parent,
                                        [this],
                                        undefined);

    this.upLabel = postLabel;
    parent.removeChildBang( this);
    this.parent = newNode;
    parent.addChildBang( newNode);

    return newNode;
  }

  // return both nodes
  upSpliceLeaf( offset : number, leafLabel : Label) : [STNode, STNode] {
    let splitNode : STNode = this.upSplit( offset);
    let leaf : STNode = splitNode.addLeafBang( leafLabel);

    return [ splitNode, leaf]
  }

  nodeFollowK(  originalLabel : Label,
                matnK: (a:STNode)=>[STNode,number],
                mateK: (a:STNode,b:number)=>[STNode,number],
                misnK: (a:STNode,b:Label,c:number)=>[STNode,number],
                miseK: (a:STNode,b:number,c:Label,d:number)=>[STNode,number]) {

    let EDGEk = function( theNode: STNode, label : Label, labelOffset : number) : [STNode,number] {
      let upLabel = theNode.upLabel;


      for ( var k : number = 0; ; k++) {
        let kLabelOffset : number = k + labelOffset;
        if ( k == upLabel.length()) {
          return NODEk( theNode, label, kLabelOffset);
        } else if ( kLabelOffset == label.length()) {
          return mateK( theNode, k);
        } else if (upLabel.labelRef( k) == label.labelRef( kLabelOffset)) {
          // continue
        } else {
          return miseK( theNode, k, label, kLabelOffset);
        }
      }
    }

    let NODEk = function( theNode: STNode, label : Label, labelOffset : number) : [STNode, number] {
      if ( label.length() == labelOffset) {
        return matnK( theNode)
      } else {
        let child : STNode = theNode.findChild( label.labelRef( labelOffset))
        // if child != undefined
        if ( child) {
          return EDGEk( child, label, labelOffset);
        } else {
          return misnK( theNode, label, labelOffset);
        }
      }
    }

    return NODEk( this, originalLabel.copy(), 0) // copy originalLabel

  }

  positionAtEnd( offset : number) : boolean {
    return this.upLabel.labelRefAtEnd( offset);
  }


}
}
