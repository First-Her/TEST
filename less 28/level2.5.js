// №1
// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
// let str = "023m0df0dfg0";
// let position = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "0") {
//     position.push(i);
//   }
// }
// console.log(position);

// №2
// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
// let str = "abcdefg";
// let result = " ";
// for (let i = 0; i < str.length; i++) {
//   if ((i + 1) % 3 !== 0) {
//     result += str[i];
//   }
// }
// console.log(result);

// №2
// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
// let str = "abcdefg";
// let result = "";
// let check = 1;
// for (let i = 0; i < str.length; i++) {
//   if (check !== 3) {
//     result += str[i];
//     check++;
//   } else {
//     check = 1;
//   }
// }
// console.log(result);

// №3
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях. вопрос почему нельзя использвать i
// let arr = [1, 2, 3, 4, 5, 6];
// let sumEven = 0;
// let sumUneven = 0;
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) sumEven = sumEven + arr[i];
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) sumUneven = sumUneven + arr[i];
// }
// result = sumEven / sumUneven;
// // result = sumEven % sumUneven;
// console.log(sumEven);
// console.log(sumUneven);
// console.log(result)

// let arr = [1, 2, 3, 4, 5, 6];
// let sumEven = 0;
// let sumUneven = 0;
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sumEven = sumEven + arr[i];
//   } else {
//     sumUneven += arr[i];
//   }
// }
// result = sumEven / sumUneven;
// console.log(sumEven);
// console.log(sumUneven);
// console.log(result);
