// №1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова. Пришлось обернуть в функцию так как консоль не выводил)
// let strOne = "собак";
// let strTwo = "авто";
// if (strOne.at(-1) === strTwo.at(0)) {
//     console.log("буквы  совпадают")
// } else {
//   console.log("буквы не совпадают")
// }

// №2
// Дана некоторая строка. Найдите позицию третьего нуля в строке.
// хз не разобрался оч сложно

// let str = "sash0sdsd0dsds0";
// let calcul = 0;
// let result = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "0") {
//     calcul++;
//   }
//   if (calcul === 3) {
//     result = i
//   }
// }
// console.log(result);

// let str = "sash0sdsd0dsds0";
// let calcul = 0;
// let result = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "0") {
//     calcul++;
//   }
//   if (calcul === 2) {
//     result = i;
//     break;
//   }
// }
// console.log(result);

// №3
// Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.
// let str = "12,34,56";
// let strList = str.split(',')
// let result = 0;
// for (let i = 0; i < strList.length; i++) {
//     result += Number(strList[i])
// }
// console.log(result)

// №4
// Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

// let uzerInfo = {
//   year: "2025",
//   month: "12",
//   day: "31",
// };
// console.log(uzerInfo)
// console.log(uzerInfo.year)
