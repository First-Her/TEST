// const a = ' сала"м"';
// let b = "досвидания";
// let c = `привет 
// ${a} 
// ${b}`;
//console.log(a.length, "длина a");
//console.log(b.length, "длина b");
//console.log(a);
//console.log(c);

// const firstWord = "ты";
// const secondWord = "сегодня";
// const thirdWord = "ел";

// const firstSentence = setProposal(firstWord, thirdWord, secondWord);
// //console.log(firstSentence);

// const secondSentence = setProposal(thirdWord, firstWord, secondWord);
// //console.log(secondSentence);

// const thirdSentence = setProposal(secondWord, thirdWord, firstWord);
// //console.log(thirdSentence);

// function setProposal(textFirst, textSecond, textThird) {
//   const text = textFirst + ' ' + textSecond + ' ' + textThird + '?';
//   return text;

// }
// setProposal(2,3,6);
// //console.log(setProposal(2,3,6))

// const dragee = "Тиктак";
// const training =
//   dragee[0] +
//   "р" +
//   "е" +
//   "н" +
//   dragee[1] +
//   "р" +
//   "о" +
//   "в" +
//   dragee[5] +
//   dragee[4];
// //console.log(training);

const funny = "ПрИкОлДеС";
//console.log(funny.slice(0,6).toUpperCase() + funny.slice(7,10).toLowerCase());
const resultOne =
  funny.slice(0, 6).toUpperCase() + funny.slice(6, 10).toLowerCase();
//console.log(resultOne);

const resultTwo =
  funny.slice(0, 5).toLowerCase() + funny.slice(5, 10).toUpperCase();
//console.log(resultTwo);

const resulThree =
  funny.slice(0, 3).toUpperCase() +
  "-" +
  funny.slice(3, 6).toLowerCase() +
  "-" +
  funny.slice(6, 10).toUpperCase();
//console.log(resulThree);

const uzerName = "вася";
const result =
  uzerName.slice(0, 1).toUpperCase() +
  uzerName.slice(1, 3) +
  uzerName.slice(3, 4).toUpperCase();
  //console.log(result); 

function setuzerName(textName){
  //console.log(textName)
  const text =  textName.slice(0, 1).toUpperCase() + textName.slice(1, 3) + textName.slice(3, 4).toUpperCase();
  console.log(text)
  return text
}
setuzerName(uzerName)
setuzerName('маша')
setuzerName('коля')
setuzerName('петя')





const greetings = "Привет";

const wordOne = greetings.slice(0, 7);

const wordP = greetings[0].toLowerCase();

const wordE = greetings[4];
const wordT = greetings[5];

const wordTwo = wordP + "a" + "к" + wordE + wordT;

const wordThree =
  wordP + greetings[2] + "с" + wordT + "о" + "л" + wordE + wordT;

const wordFour = wordP + wordE + "ч" + wordE + "н" + wordE + "г";

const rezultGreetings = `"${wordOne} ${wordTwo}, ${wordThree}, ${wordFour}"`;
//console.log(rezultGreetings);

//function doSomething(foo) {
//return true;
//}
//console.log(doSomething())
const textAll = setGreetings(wordOne, wordTwo, wordThree, wordFour)
//console.log(textAll)

function setGreetings(textWordOne, textWordTwo, textWordThree, textWordFour){
  const textAll = textWordOne + ' ' + textWordTwo + ' ' +  textWordThree + ' ' + textWordFour;
  return textAll
}
//setGreetings(wordOne, wordTwo, wordThree, wordFour)

