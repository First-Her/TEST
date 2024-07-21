let name = "Ilya";
console.log( `hello ${1}` );
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );

let value = true;
console.log(typeof value);
value = String(value); 
console.log(typeof value);

let s = "моя" + "строка";
console.log(s); 

let a = 1, b = 1;        a=2 b =2 c=2 d = 1
let c = ++a; 2
let d = b++; 1

let a = 2;               ответ а = 4 нижняя строчка =5
let x = 1 + (a *= 2);


"" + 1 + 0       10
"" - 1 + 0       -1
true + false      1
6 / "3"            2
"2" * "3"          6
4 + 5 + "px"       9px
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b);   

let result = 5 > 4; 
console.log( result );

5 > 4 true
"ананас" > "яблоко" false
"2" > "12" false
undefined == null true
undefined === null false
null == "\n0\n" не знаю не понимать
null === +"\n0\n" не знаю не понимать
