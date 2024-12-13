// №1
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// let str = "abd335e";
// function examination(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (Number(str[i])) {
//       return i;
//     }
//   }
// }
// console.log(examination(str))

// let str = "abd335e";
// for (let i = 0; i < str.length; i++) {
//   if (Number(str[i])) {
//     console.log( i, "первая цифра");
//     return i;
//   }
// }

// №2
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// let uzerInfo = {
//   year: "2025",
//   month: "12",
//   day: "31",
// };

// let keys = Object.keys(uzerInfo)
// console.log(keys)
// let objectData = Object.values(uzerInfo)
// console.log(objectData)

// №3
// Дано число. Выведите в консоль количество четных цифр в этом числе.
// let num = 10;
// console.log(num % 2 === 0);
// let result = 0;
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     result++;
//   }
// }
// console.log(result)

// // №4
// // Дана некоторая строка:
// // 'abcde'
// // Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// // 'AbCdE'

// const str = "abcde";
// let result = ''
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     result += str[i].toUpperCase()
//   } else {
//     result += str[i]
//   }
// }
// console.log(result)
// console.log(str.toUpperCase());
// console.log(str);

// №5
// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
// испозовать сплит для создания трех слов.

// const str = "Aaa Bbb Ccc";
// let arr = str.split(" ");
// let result = " ";
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i].at(0).toUpperCase() + arr[i] + " ";
// }
// console.log(result);
