// №1
// Заполните массив случайными числами из промежутка от 1 до 100.
// let listNumber = [];
// for (let i = 1; i < 5; i++) listNumber.push(Math.ceil(Math.random() * 100));
// console.log(listNumber);

// №2
// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.
// let number = 12345;
// let listNumber = [];
// let str = "";
// let stringNumber = number.toString();
// for (let i = stringNumber.length - 1; i >= 0; i--) {
//   str += stringNumber[i];
// }
// console.log(str);

// №3 пройтись массивом!!!!!
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

// let listNumber = [1, 2, 3, 4, 5, 6];
// console.log(listNumber.slice(0, 2));
// console.log(listNumber.slice(2, 4));
// console.log(listNumber.slice(4));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result = [];
// let resultTwo = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i]);
//   if (result.length === 2) {
//     console.log(result);
//     result = [];
//   } else if (arr.length - 1 === i) {
//     console.log(result);
//   }
// }

// №4 сделать вторым способом FOR пройтись по второму массиву фором запушить
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr1, ...arr2]
// console.log(arr3)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// for (let i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1)