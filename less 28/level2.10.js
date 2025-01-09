// №1
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// let str = "sSGsHsc44445";
// let calcul = 0;
// mas = str.split("");

// for (let i = 0; i < mas.length; i++) {
//   if (mas[i].match(/[a-zA-Z]/)) {
//     calcul++;
//   }
// }

// if (calcul <= 3 && calcul > 0) {
//     console.log("не более трех букв");
// } else if(calcul === 0) {
//     console.log(`нет букв`);
// } else {
//     console.log(`более 3х букв`);
// }

// №2
// Дано число. Получите первую четную цифру с конца этого числа.
// let num = 1234565;
// let str = String(num);
// let result = 0;
// for (let i = str.length - 1; i >= 0; i--) {
//   if (str[i] % 2 === 0) {
//     result = str[i];
//     break;
//   }
// }
// console.log(result)

// №3
// Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'

// let str = "abcde abcde abcde";
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = "!" + arr[i].slice(1);
// }
// let result = arr.join(" ");
// console.log(result);

// let str = "abcde abcde abcde";
// let newStr = str.replace(/\b\w/g, "!");
// console.log(newStr);

// №4
// Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// let arr = [1, 2, 3, 3, 4, 5];
// let calcul = 0;
// for (let i = 0; i < arr.length; i++) {
//   let resultOne = arr[i];
//   let resultTwo = arr[i + 1];
//   if (resultOne === resultTwo) {
//     console.log("есть два одинаковых элемента в массиве");
//     break;
//   } else {
//     calcul++
//   }
//   if (calcul === arr.length) {
//     console.log("нет одинаковых элементов в этом массиве")
//   }
// }
