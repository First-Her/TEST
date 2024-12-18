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
