// get the charTable from the relevant module
import { charTable } from './morse-code-table'

// lookup in charTable
var charToDitDahString = function ( theLetter) {
  return charTable[ theLetter.toUpperCase()]
}

// convert an entire string to morse
// note: no spaces
// ex:   aa -> .-.- and not .- .-
var stringToMorse = function( theString) {
  var out = ""
  for (let index in theString) {
      out += charToDitDahString( theString[index])
  }
  return out
}

// make stringToMorse available outside of this module
export { stringToMorse }
