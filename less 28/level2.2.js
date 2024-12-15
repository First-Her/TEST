// №1
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// let listNumber = [1, -2, -3, -4, 5, -6];
// let result = 0;
// for (let i = 0; i < listNumber.length; i++) {
//   if (listNumber[i] < 0) result++;
// }
// console.log(result);

// №2
// Дан массив с числами. Оставьте в нем только положительные числа.  не могу в этом же массиве оставить ?!!!!!
// let listNumber = [1, -2, -3, -4, 5, -6];
// let positive = [];
// for (let i = 0; i < listNumber.length; i++) {
//   if (listNumber[i] > 0) {
//     positive.push(listNumber[i]);
//   }
// }
// console.log(positive);

// №3
// Дана строка. Удалите предпоследний символ из этой строки.
// let str = 'abcde'
// let textRes = str.slice(0,-2) + str.slice(-1);
// console.log(textRes)

// №4
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов. есть вопросы по Slice , и по конструкции?!!!
// let listNumber = [1, 2, 3, 4, 5, 6];
// let sumOne = 0;
// let sumTwo = 0;
// for (let i = 0; i < listNumber.length / 2; i++) {
//     sumOne += listNumber[i]
// }
// console.log(sumOne)
// for (let i = listNumber.length - 1; i >= listNumber.length / 2; i--) {
//     sumTwo += listNumber[i]
// }
// console.log(sumTwo)
// let result = sumOne / sumTwo;
// console.log(result)