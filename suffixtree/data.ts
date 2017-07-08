// many functions defined in label.rkt were included
// here as members of the Label class.
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

  length() {
    return this.j - this.i
  }

  labelRef( k: number) {
    return this.datum[ k + this.i];
  }

  // no check rn if its a valid sublabel
  sublabel( start: number, end = undefined) {
    if (end == undefined) {
      return new Label( this.datum, start + this.i, this.length())
    } else {
      return new Label( this.datum, start + this.i, end + this.i)
    }
  }

  sublabelBang( start: number, end = undefined) {
    if ( end == undefined) {
      this.i = start + this.i;
      this.j = this.length() + this.j;
    } else {
      this.i = start + this.i;
      this.j = end + this.i;
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

  printComplete() {
    console.log("~~~ Root     ~~~")
    this.root.printComplete();
    console.log("~~~ End Root ~~~")
  }

  // somewhat a simplification of what node-follow does.
  // instead of using continuations, just returns boolean values
  // where appropriate.
  contains( label: Label) {
    return this.root.nodeFollowK( label, true, true, false, false)
  }

}

function deepCopyLabelSTNodeArray( a : STNode[]) : STNode[]{
  let ret : STNode[] = [];

  for ( var i : number = 0; i < a.length; i++) {
    let curNode : STNode = a[ i];
    ret.push( curNode.copy());
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

  printComplete() {
    console.log('--- ' + this.spID + ': Node     ---')
    console.log('    upLabel:' + this.upLabel);
    console.log('    sufLink:' + this.suffixLink);
    for (var i = 0; i < this.children.length; i++) {
      this.children[ i].printComplete();
    }
    console.log('--- ' + this.spID + ': End Node ---')
  }

  copy() {
    let retNode : STNode;
    if (this.suffixLink != undefined) {
      retNode = new STNode(  this.upLabel.copy(),
                             this.parent,
                             deepCopyLabelSTNodeArray(this.children),
                             this.suffixLink.copy());
    } else {
      retNode = new STNode(  this.upLabel.copy(),
                             this.parent,
                             deepCopyLabelSTNodeArray(this.children),
                             this.suffixLink);
    }
    return retNode;
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
      console.log("...here????")
      for ( var i : number = 0; i < this.children.length; i++) {
        let tmpLabel : Label = this.children[ i].upLabel;
        if (tmpLabel.labelRef( 0) == toFind.labelRef( 0)) {
          return this.children[ i];
        }
      }
      return undefined;
    } else if ( typeof toFind == "string") {
      console.log("here i am dont tread on me")
      console.log( toFind);

      for ( var i : number = 0; i < this.children.length; i++) {
        console.log("i said here i am dont tread on me")
        let tmpLabel : Label = this.children[ i].upLabel;
        console.log(tmpLabel.labelRef( 0))
        if (tmpLabel.labelRef( 0) == toFind) {
          return this.children[ i];
        }
      }
      return undefined;
    }
    console.log("this hsould never happen........")
  }

  // returns the inserted node
  upSplit( offset) {
    let label : Label = this.upLabel;
    let preLabel : Label = label.sublabel( 0, offset);
    let postLabel : Label = label.sublabel( offset);
    let parent : STNode = this.parent;
    let newNode : STNode = new STNode(  preLabel, parent,
                                        deepCopyLabelSTNodeArray( this.children.slice( 0)),
                                        undefined);
    this.upLabel = postLabel;
    parent.removeChildBang( this);
    this.parent = newNode;
    parent.addChildBang( newNode);

    return newNode; // needed?
  }

  // return both nodes
  upSpliceLeaf( offset : number, leafLabel : Label) : [STNode, STNode] {
    let splitNode : STNode = this.upSplit( offset);
    let leaf : STNode = splitNode.addLeafBang( leafLabel);
    return [ splitNode, leaf]
  }

  nodeFollowK( originalLabel : Label, matnK, mateK, misnK, miseK) {

    let EDGEk = function( theNode: STNode, label : Label, labelOffset : number) {
      let upLabel = theNode.upLabel;

      // dunno about this loop
      // for ( var k : number = 0; k < originalLabel.length(); k++) {
      for ( var k : number = 0; ; k++) {
        let kLabelOffset : number = k + labelOffset;
        if ( k == upLabel.length()) {
          return NODEk( theNode, label, kLabelOffset);
        } else if ( kLabelOffset == label.length()) {
          console.log("coconut")
          return mateK( theNode, k);
          // return mateK;
        } else if (upLabel.labelRef( k) == label.labelRef( kLabelOffset)) {
          console.log("yooo: " + k + " and " + originalLabel.length());
          // continue
        } else {
          console.log("dragonfruit")
          return miseK( theNode, k, label, kLabelOffset);
          // return miseK;
        }
      }
    }

    let NODEk = function( theNode: STNode, label : Label, labelOffset : number) {
      if ( label.length() == labelOffset) {
        console.log("apple")
        return matnK( theNode)
        // return matnK;
      } else {
        let child : STNode = theNode.findChild( label.labelRef( labelOffset))
        // if child != undefined
        if ( child) {
          return EDGEk( child, label, labelOffset);
        } else {
          console.log("banana")
          return misnK( theNode, label, labelOffset);
          // return misnK;
        }
      }
    }

    return NODEk( this, originalLabel.copy(), 0)

  }

  positionAtEnd( offset) : boolean {
    return this.upLabel.labelRefAtEnd( offset);
  }


}