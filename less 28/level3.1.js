// №1
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// let num = 123456;
// let arr = Array.from(String(num), Number);
// let result = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <= arr[i - 1]) {
//     result = false;
//     break;
//   }
// }
// console.log(result);

// let num = 1283456;
// let arr = Array.from(String(num), Number);
// let result = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= arr.length + 1) {
//     result = false;
//     break;
//   }
// }
// console.log(result);

// №2
// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// let arr = [1, '', 2, 3, '', 5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "") {
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)

// №3
// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

// let arr = [
//   [2, 1, 4, 3, 5],
//   [3, 5, 2, 4, 1],
//   [4, 3, 1, 5, 2],
// ];

// for(let i = 0; i < arr.length; i++) {
//     arr[i].sort((a, b) => a - b)
// }
// console.log(arr)


// №4
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr1.length)

// for (let i = 0; i < arr2.length; i++) {
//    if (arr2.length > arr1.length) {
//     arr2 = arr2.slice(0, arr1.length)
//    }
// }
// console.log(arr2)
// console.log(arr1)