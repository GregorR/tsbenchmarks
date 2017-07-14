import {Data as data} from "./data"

export module Label {
// all values are considered possible label elements
function isLabelElement( x : any) : boolean {
  return true
}

// use built in JS equality to test
function isLabelElementEqual( x: any, y: any) : boolean {
  return x == y
}

let sentinelFlag : boolean = false;

// for now, # will be our sentinel character
function makeSentinel( ) : string {
  sentinelFlag = !sentinelFlag;
  if ( sentinelFlag) {
    return "#"
  } else {
    return "$"
  }
}

// not sure what the point of this is
function isSentinel( datum : any) : boolean {
  return (datum == "#") || (datum == "$");
}

function catenateStrings( inVals: string[]) : string {
  let ret : string = ""
  for ( var i : number = 0; i < inVals.length; i++) {
    ret += inVals[ i]
  }
  return ret
}

export function vectorToLabel( inVal : string[]) : data.Label {
  let theDatum : string = catenateStrings( inVal);
  return new data.Label( theDatum, 0, theDatum.length)
}

// stick a sentinel on the end of the character
export function vectorToLabelWithSentinel( inVal : string[]) : data.Label {
  let theDatum : string = catenateStrings( inVal);
  return new data.Label( theDatum + makeSentinel(), 0, theDatum.length)
}

export function stringToLabel( inVal : string) : data.Label {
  return new data.Label( inVal, 0, inVal.length)
}

export function stringToLabelWithSentinel( inVal : string) : data.Label {
  return new data.Label( inVal + makeSentinel(), 0, inVal.length + 1)
}
}
