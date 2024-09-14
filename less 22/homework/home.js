// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// if ("0") {
//   console.log("Привет");
// }

// let message = "ECMAScript";
// if (message === "ECMAScript") {
//   console.log("верно");
// } else {
//   console.log("«Не знаете? ECMAScript!»");
// }

// let age = 0;
// if (age === 0) {
//   console.log("возраст больще ноля");
// } else {
//   console.log("возраст равен нолю");
// }
// let a = 3;
// let b = 2;
// let result = a + b < 4 ? "мало" : "много";
// console.log(result);

let login = "Директор";
let result1 =
  "сотрудник" === login
    ? "привет"
    : "Директор" === login
    ? "здраствуйте"
    : "" === login
    ? "Нет логина"
    : "";
console.log(result1);
