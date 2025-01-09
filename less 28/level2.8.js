// №1
// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
// let str = "sdSGsHc";
// let calcul = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i].toUpperCase() === str[i]) {
//     calcul++;
//   }
// }
//  if (calcul <= 2) {
//     console.log('не более двух')
//  } else {
//     console.log('более двух')
//  }

// №2
// Дана некоторая строка:
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

// let str = "1 22 333 4444 22 5555 1";
// let arr = str.split(" ");
// let result = '';
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length <= 3) {
//     result += arr[i] + " ";
//   }
// }
// console.log(result);

// №3
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ["a", "b", "c"];
// let arr3 = arr1.slice(0, 2).concat(arr2, arr1.slice(2));
// console.log(arr3)
