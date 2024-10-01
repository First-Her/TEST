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
