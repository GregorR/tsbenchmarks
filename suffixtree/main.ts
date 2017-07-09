import {longestCommonSubstring} from "./lcs"

let debug : string[] = ["hat", "ha"]

let smallTest : string = "King Francis was a hearty king, and loved a royal sport, #\
And one day as his lions fought, sat looking on the court; #\
The nobles filled the benches, and the ladies in their pride, #\
And 'mongst them sat the Count de Lorge, with one for whom he sighed: #\
And truly 'twas a gallant thing to see that crowning show, #\
Valour and love, and a king above, and the royal beasts below. #\
Ramped and roared the lions, with horrid laughing jaws; #\
They bit, they glared, gave blows like beams, a wind went with their paws; #\
With wallowing might and stifled roar they rolled on one another; #\
Till all the pit with sand and mane was in a thunderous smother; #\
The bloody foam above the bars came whisking through the air; #\
Said Francis then, \"Faith, gentlemen, we're better here than there.\" #\
De Lorge's love o'erheard the King, a beauteous lively dame #\
With smiling lips and sharp bright eyes, which always seemed the same; #\
She thought, the Count my lover is brave as brave can be; #\
He surely would do wondrous things to show his love of me; #\
King, ladies, lovers, all look on; the occasion is divine; #\
I'll drop my glove, to prove his love; great glory will be mine. #\
She dropped her glove, to prove his love, then looked at him and smiled; #\
He bowed, and in a moment leaped among the lions wild: #\
The leap was quick, return was quick, he has regained his place, #\
Then threw the glove, but not with love, right in the lady's face. #\
\"By God!\" said Francis, \"rightly done!\" and he rose from where he sat: #\
\"No love,\" quoth he, \"but vanity, sets love a task like that.\"";

let largeTest : string = "";
let kcfaTest : string = "";

function main( testExpr: string) : void {
  let strs : string[] = testExpr.split("#");
  // let strs : string[] = debug;
  for ( var i : number = 0; i < strs.length; i ++) {
    for ( var j : number = 0; j < strs.length; j ++) {
      // console.log()
      // console.log( strs[ i])
      // console.log( strs[ j])
      // console.log("the substring is: " + longestCommonSubstring( strs[ i], strs[ j]));
      longestCommonSubstring( strs[ i], strs[ j]);
    }
  }
}

main( smallTest);
// main( largeTest);
// main( kcfaTest);

// let str1 : string = "\"No love,\" quoth he, \"but vanity, sets love a task like that.\"";
// let str2 : string = "Valour and love, and a king above, and the royal beasts below.";
//
// // console.log("the substring is: " + longestCommonSubstring( str1, str2));
// console.log("the substring is: " + longestCommonSubstring( "hello", "ell"));
