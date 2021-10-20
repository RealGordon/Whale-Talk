/*
*a program to convert human statetements  to whale language
*_author: gordon
*fscp-javascript-syntax-part-ii*
*/
let input = "turpentine and turtles";

//characters of the whale languague
const vowels = 'aeiou';

function translateToWhaleTalk(input) {
  const resultArray = [];
  const vowelLength=vowels.length;
  Array.prototype.forEach.call(input, (letter) => {

    for (let j = 0; j < vowelLength; j++) {
      if (vowels[j] === letter) {
        resultArray.push(letter);
        break
      }
    }

    //double all `e` and `u` occurrences
    if (letter === "e" || letter === "u") resultArray.push(letter)
  }
  )
  return resultArray
}

//tests
const tests = ['turpentine and turtles', 'Hi, Human', 'a whale of a deal!'];
const officalAnswers = ["UUEEIEEAUUEE", "IUUA", "AAEEOAEEA"];
let resultArray;
let result;
for (let i = 0; i < tests.length; i++) {
  resultArray = translateToWhaleTalk(tests[i]);
  result = resultArray.join("").toUpperCase();
  console.log(`Test word: ${tests[i]}`)
  console.log(
    (result === officalAnswers[i]) ? "Passed" : "Failed"
  )
  console.log(result + ' => ' + officalAnswers[i] +
    '\n************\n')
}