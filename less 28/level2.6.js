// №1
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// let str = "23m5df5dfg6";
// let position = [];
// for (let i = 0; i < str.length; i++) {
//   if (Number(str[i])) {
//     position.push(i);
//   }
// }
// console.log(position);

// №2
// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]
// let num = [123, 456, 789]

// let arrNum = [123, 456, 789];
// const res = [];

// for (let i = 0; i < arrNum.length; i++) {
//     const strNum = String(arrNum[i])
//     const arrRes1 = +strNum.split('').reverse().join('');
//     res.push(arrRes1)
// }
// console.log(res)

// №3
// Дана некоторая строка с числом:
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'

// let str = "1234567";
// let result = " ";
// let calcul = 0;

// for (let i = str.length - 1; i >= 0; i--) {
//   result = str[i] + result;
//   calcul++;

//   if (calcul % 3 === 0) {
//     result = " " + result;
//   }
// }

// console.log(result);

// №4
// Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'

// let str = "AbCdE";
// let arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i].toUpperCase()) {
//     arr[i] = arr[i].toLowerCase();
//   } else {
//     arr[i] = arr[i].toUpperCase();
//   }
// }
// let result = arr.join("");
// console.log(result);

// №6
// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'
// let str = "aaa bbb ccc eee fff";
// let arr = str.split(" ");
// for (let i = 1; i < arr.length; i += 2) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
// }   
// let result = arr.join(" ")
// console.log(result)
