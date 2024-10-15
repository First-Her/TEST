// while(i < nameText.length) {
//     // console.log(i)
//     // console.log(nameText[i])
//     i++
// }

// const arr = [1, 2, 3, "text", 4, 5];
// const res = [];

// // while(i < arr.length) {
// //     console.log(typeof arr[i], arr[i])
// //     if (typeof arr[i] === 'number') {
// //         res.push(arr[i])
// //     }
// //     i++
// // }
// const nameText = "kolyashamavasha@yandex.ru";

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     res.push(arr[i]);
//   }
// }

// console.log(res);

// const list = ["1", 2, 32, "text"];
// const result = [];

// for (let i = 0; i < list.length; i++) {
//   if (list[i] === 32) {
//     result.push(0);
//   } else {
//     result.push(list[i]);
//   }
// }
// console.log(result);

// const list = [0, 2, 4, 5];
// let result = 0;

// for (let i = 0; i < list.length; i++) {
//     result = result + list[i];

// }
// console.log(result);

// const list = [0, 2, 4, 5, 55, 32, 2, 1, -100];
// let result = 0;

// for (let i = 0; i < list.length; i++) {
//     if (list[i] > result) {
//        console.log(result, list[i])
//         result = list[i];
//     }
// }
// console.log(result);





// const list = [0, 2, 4, 5, 55, 32, 2, 1, -100];
// // let result = [];

// // for (let i = 0; i < list.length; i++) {
// //   result.unshift(list[i]);
// //   if (list[i] === 55) {
// //     console.log(55);
// //   } else if (list[i] === 32) {
// //     console.log(32);
// //   } else if (list[i] === -100) {
// //     console.log(-100);
// //   } else {
// //     console.log(0);
// //   }
// // }
// // console.log(result);

// const srt = sort(list);
// console.log(srt)
// function sort(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.unshift(arr[i]);
//   }
//   return result;
// }
// const srtd = sort([1,2,4]);
// console.log(srtd)

const list = ["1", 2, 32, "text"];
const numberlist = []
const textlist = []

const sof = soft(list)
console.log(sof)
function soft(arr) {

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        numberlist.push(arr[i]);
   } else if (typeof arr[i] === 'string') {
    textlist.push(arr[i]);
   }
}
return [textlist, numberlist];

}
const sofo = soft([1, 4, 5])
console.log(sofo)


//console.log(numberlist);
//console.log(textlist);


