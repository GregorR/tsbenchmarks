// get the charTable from the relevant module
import { charTable } from './morse-code-table'

// lookup in charTable
function charToDitDahString( theLetter: string) : string {
  return charTable[ theLetter.toUpperCase()]
}

// convert an entire string to morse
// note: no spaces
// ex:   aa -> .-.- and not .- .-
function stringToMorse( theString : string) : string {
  let out : string = ""
  for (var i : number = 0; i < theString.length; i++) {
      out += charToDitDahString( theString[i])
  }
  return out
}

// make stringToMorse available outside of this module
export { stringToMorse }
