// №1
// Заполните массив целыми числами от 1 до 10.
// let listNumber = [];
// for (let i = 1; i <=10; i++) {
//     listNumber.push(i)
// }
// console.log(listNumber)

// №2
// Заполните массив четными числами из промежутка от 1 до 100.
// let listNumber = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) listNumber.push(i);
// }
// console.log(listNumber)

// №3
// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// !!! образец 1
// let listNumber = [1.456, 2.125, 3.32, 4.1, 5.34];
// let listResult = [];
// function rounding() {
//   for (let i = 0; i < listNumber.length; i++) {
//     let result = Number(listNumber[i].toFixed(1));
//     listResult.push(result);
//   }
// }
// rounding();
// console.log(listResult);

// !!! образец 2
// let listNumber = [1.456, 2.125, 3.32, 4.1, 5.34];
// function rounding() {
//   const newArr = listNumber.map((item) => Number(item.toFixed(1)));
//   console.log(newArr);
// }
// rounding();
