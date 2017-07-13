// get the charTable from the relevant module
import { MorseCodeTable } from './morse-code-table'

export module MorseCodeStrings {
const charTable = MorseCodeTable.charTable;
// lookup in charTable
function charToDitDahString( theLetter: string) : string {
  return charTable[ theLetter.toUpperCase()]
}

// convert an entire string to morse
// note: no spaces
// ex:   aa -> .-.- and not .- .-
export function stringToMorse( theString : string) : string {
  let out : string = ""
  for (var i : number = 0; i < theString.length; i++) {
      out += charToDitDahString( theString[i])
  }
  return out
}
}
