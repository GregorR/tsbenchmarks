"use strict";
/*  ~
    TS Benchmarks Project -- June 22
    Convert morse code data from Wikipedia into a more usable dictionary.
*/
exports.__esModule = true;
// the regex we need to match
var theRegexString = "^\\| \\{\\{[^|]*\\|[^|]*\\|(.)\\}\\} \\|\\| '''([^']*)'''";
var theOtherRegexS = "^\\| \\[\\[[^]*\\]\\] \\[([^]]*)\\] \\|\\| '''([^']*)'''";
// morse code data from wikipedia (from the typedRacket benchmark, from wikipedia)
var wikipedia_text = "| {{Audio-nohelp|A morse code.ogg|A}} || '''·&nbsp;–'''\n| {{Audio-nohelp|J morse code.ogg|J}} || '''·&nbsp;–&nbsp;–&nbsp;–'''\n| {{Audio-nohelp|S morse code.ogg|S}} || '''·&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|1 number morse code.ogg|1}} || '''·&nbsp;–&nbsp;–&nbsp;–&nbsp;–'''\n| [[Full stop|Period]] [.] || '''·&nbsp;–&nbsp;·&nbsp;–&nbsp;·&nbsp;–'''\n| [[Colon (punctuation)|Colon]] [:] || '''–&nbsp;–&nbsp;–&nbsp;·&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|B morse code.ogg|B}} || '''–&nbsp;·&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|K morse code.ogg|K}} || '''–&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|T morse code.ogg|T}} || '''–'''\n| {{Audio-nohelp|2 number morse code.ogg|2}} || '''·&nbsp;·&nbsp;–&nbsp;–&nbsp;–'''\n| [[Comma (punctuation)|Comma]] [,] || '''–&nbsp;–&nbsp;·&nbsp;·&nbsp;–&nbsp;–'''\n| [[Semicolon]] [;] || '''–&nbsp;·&nbsp;–&nbsp;·&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|C morse code.ogg|C}} || '''–&nbsp;·&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|L morse code.ogg|L}} || '''·&nbsp;–&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|U morse code.ogg|U}} || '''·&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|3 number morse code.ogg|3}} || '''·&nbsp;·&nbsp;·&nbsp;–&nbsp;–'''\n| [[Question mark]] [?] || '''·&nbsp;·&nbsp;–&nbsp;–&nbsp;·&nbsp;·'''\n| [[Equal sign|Double dash]] [=] || '''–&nbsp;·&nbsp;·&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|D morse code.ogg|D}} || '''–&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|M morse code.ogg|M}} || '''–&nbsp;–'''\n| {{Audio-nohelp|V morse code.ogg|V}} || '''·&nbsp;·&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|4 number morse code.ogg|4}} || '''·&nbsp;·&nbsp;·&nbsp;·&nbsp;–'''\n| [[Apostrophe (punctuation)|Apostrophe]] ['] || '''·&nbsp;–&nbsp;–&nbsp;–&nbsp;–&nbsp;·'''\n| [[Plus and minus signs|Plus]] [+] || '''·&nbsp;–&nbsp;·&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|E morse code.ogg|E}} || '''·'''\n| {{Audio-nohelp|N morse code.ogg|N}} || '''–&nbsp;·'''\n| {{Audio-nohelp|W morse code.ogg|W}} || '''·&nbsp;–&nbsp;–'''\n| {{Audio-nohelp|5 number morse code.ogg|5}} || '''·&nbsp;·&nbsp;·&nbsp;·&nbsp;·'''\n| [[Exclamation mark]] [!] || '''–&nbsp;·&nbsp;–&nbsp;·&nbsp;–&nbsp;–'''\n| [[Plus and minus signs|Minus]] [-] || '''–&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|F morse code.ogg|F}} || '''·&nbsp;·&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|O morse code.ogg|O}} || '''–&nbsp;–&nbsp;–'''\n| {{Audio-nohelp|X morse code.ogg|X}} || '''–&nbsp;·&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|6 number morse code.ogg|6}} || '''–&nbsp;·&nbsp;·&nbsp;·&nbsp;·'''\n| [[Slash (punctuation)|Slash]] [/] || '''–&nbsp;·&nbsp;·&nbsp;–&nbsp;·'''\n| [[Underscore]] [_] || '''·&nbsp;·&nbsp;–&nbsp;–&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|G morse code.ogg|G}} || '''–&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|P morse code.ogg|P}} || '''·&nbsp;–&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|Y morse code.ogg|Y}} || '''–&nbsp;·&nbsp;–&nbsp;–'''\n| {{Audio-nohelp|7 number morse code.ogg|7}} || '''–&nbsp;–&nbsp;·&nbsp;·&nbsp;·'''\n| [[Parenthesis open]] [(] || '''–&nbsp;·&nbsp;–&nbsp;–&nbsp;·'''\n| [[Quotation mark]] [\"] || '''·&nbsp;–&nbsp;·&nbsp;·&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|H morse code.ogg|H}} || '''·&nbsp;·&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|Q morse code.ogg|Q}} || '''–&nbsp;–&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|Z morse code.ogg|Z}} || '''–&nbsp;–&nbsp;·&nbsp;·'''\n| {{Audio-nohelp|8 number morse code.ogg|8}} || '''–&nbsp;–&nbsp;–&nbsp;·&nbsp;·'''\n| [[Parenthesis close]] [)] || '''–&nbsp;·&nbsp;–&nbsp;–&nbsp;·&nbsp;–'''\n| [[Dollar sign]] [$] || '''·&nbsp;·&nbsp;·&nbsp;–&nbsp;·&nbsp;·&nbsp;–'''\n| {{Audio-nohelp|I morse code.ogg|I}} || '''·&nbsp;·'''\n| {{Audio-nohelp|R morse code.ogg|R}} || '''·&nbsp;–&nbsp;·'''\n| {{Audio-nohelp|0 number morse code.ogg|0}} || '''–&nbsp;–&nbsp;–&nbsp;–&nbsp;–'''\n| {{Audio-nohelp|9 number morse code.ogg|9}} || '''–&nbsp;–&nbsp;–&nbsp;–&nbsp;·'''\n| [[Ampersand]] [&] || '''·&nbsp;–&nbsp;·&nbsp;·&nbsp;·'''\n| [[Commercial at|At sign]] [@] || '''·&nbsp;–&nbsp;–&nbsp;·&nbsp;–&nbsp;·''' ";
function cleanPattern(pat) {
    return pat.replace(/·/g, ".").replace(/–/g, "-").replace(/&nbsp;/g, "");
}
// turn wikitext into wikiList
var wikiList = wikipedia_text.split("\n");
// iterate over everything in wikiList and match regexps
var matched, charTable = {}, counter = 0;
exports.charTable = charTable;
for (var i = 0; i < wikiList.length; i++) {
    matched = wikiList[i].match(theRegexString);
    if (matched == null) {
        matched = wikiList[i].match(theOtherRegexS);
        if (matched != null) {
            charTable[matched[1]] = cleanPattern(matched[2]);
        }
    }
    else {
        charTable[matched[1]] = cleanPattern(matched[2]);
    }
}
