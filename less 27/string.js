const a = ' сала"м"';
let b = "досвидания";
let c = `привет 
${a} 
${b}`;
console.log(a.length, "длина a");
console.log(b.length, "длина b");
console.log(a);
console.log(c);

const firstWord = "ты";
const secondWord = "сегодня?";
const thirdWord = "ел";

const firstSentence = firstWord + thirdWord + secondWord;
console.log(firstSentence);

const secondSentence = thirdWord + firstWord + secondWord;
console.log(secondSentence);

const thirdSentence = secondWord + thirdWord + firstWord;
console.log(thirdSentence);

const dragee = "Тиктак";
const training =
  dragee[0] +
  "р" +
  "е" +
  "н" +
  dragee[1] +
  "р" +
  "о" +
  "в" +
  dragee[5] +
  dragee[4];
console.log(training);

const funny = "ПрИкОлДеС";
//console.log(funny.slice(0,6).toUpperCase() + funny.slice(7,10).toLowerCase());
const resultOne =
  funny.slice(0, 6).toUpperCase() + funny.slice(6, 10).toLowerCase();
console.log(resultOne);

const resultTwo =
  funny.slice(0, 5).toLowerCase() + funny.slice(5, 10).toUpperCase();
console.log(resultTwo);

const resulThree =
  funny.slice(0, 3).toUpperCase() +
  "-" +
  funny.slice(3, 6).toLowerCase() +
  "-" +
  funny.slice(6, 10).toUpperCase();
console.log(resulThree);

const uzerName = "вася";
const result =
  uzerName.slice(0, 1).toUpperCase() +
  uzerName.slice(1, 3) +
  uzerName.slice(3, 4).toUpperCase();
console.log(result);

const greetings = "Привет";
console.log(greetings);

const wordOne = greetings.slice(0, 7);
console.log(wordOne);

const wordTwo =
  greetings[0].toLowerCase() + "a" + "к" + greetings[4] + greetings[5] + ",";
console.log(wordTwo);

const wordThree =
  greetings[0].toLowerCase() +
  greetings[2] +
  "с" +
  greetings[5] +
  "о" +
  "л" +
  greetings[4] +
  greetings[5] +
  ",";
console.log(wordThree);

const wordFour =
  greetings[0].toLowerCase() +
  greetings[4] +
  "ч" +
  greetings[4] +
  "н" +
  greetings[4] +
  "г";
console.log(wordFour);

const rezultGreetings =  `"${wordOne} ${wordTwo} ${wordThree} ${wordFour}"`;
console.log(rezultGreetings);