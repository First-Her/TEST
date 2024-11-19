// #1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// function Number(num) {
//      num < 0
//        ? console.log(`Число ${num} является отрицательным.`)
//        : console.log(`Число ${num} не является отрицательным.`);
// }
// Number(-5);
// Number(0);
// Number(5);

// #2 Дана строка. Выведите в консоль длину этой строки.
// let textDota = 'дота';
// console.log(textDota.length, 'длина строки textDota')

// #3 Дана строка. Выведите в консоль последний символ строки.
// let textDota = 'дота';
// let result = textDota.at(-1);
// console.log(result)

// #4 Дано число. Проверьте, четное оно или нет.
// function isEven(num) {
//     return num % 2 === 0;
//   }
//   console.log(isEven(4));

// #5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// let textOne = 'яблоко'
// let  textTwo = "яблоня"

// function prov(textOne, textTwo) {
//     return textOne[0] === textTwo[0];
// }
// console.log(prov('яблоко', "яблоня"));

// #6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// function examination(text) {
//   let letter = text.at(-1);
//   return letter === "ь" ? text.at(-2) : letter;
// }
// console.log(examination("собакь"));
