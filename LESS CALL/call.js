const elem = document.getElementById("penis");
elem.innerHTML = "ПЕНИС  23см";
const blockGT = document.getElementById("btnGT");
blockGT.innerHTML = "GT";
const blockAC = document.getElementById("btnAC");
blockAC.innerHTML = "AC";
const blockCE = document.getElementById("btnCE");
blockCE.innerHTML = "CE";
const blockON = document.getElementById("btnON");
blockON.innerHTML = "ON";
const blockseven = document.getElementById("btnseven");
blockseven.innerHTML = "7";
const blockeight = document.getElementById("btneight");
blockeight.innerHTML = "8";
const blocknine = document.getElementById("btnnine");
blocknine.innerHTML = "9";
const blockdivision = document.getElementById("btndivision");
blockdivision.innerHTML = "÷";
const blockfour = document.getElementById("btnfour");
blockfour.innerHTML = "4";
const blockfive = document.getElementById("btnfive");
blockfive.innerHTML = "5";
const blocksix = document.getElementById("btnsix");
blocksix.innerHTML = "6";
const blockmultiplication = document.getElementById("btnmultiplication");
blockmultiplication.innerHTML = "×";
const blocknone = document.getElementById("btnone");
blocknone.innerHTML = "1";
const blocktwo = document.getElementById("btntwo");
blocktwo.innerHTML = "2";
const blockthree = document.getElementById("btnthree");
blockthree.innerHTML = "3";
const blockminus = document.getElementById("btnminus");
blockminus.innerHTML = "-";
const blockzero = document.getElementById("btnzero");
blockzero.innerHTML = "0";
const blockdot = document.getElementById("btndot");
blockdot.innerHTML = ".";
const blocksmooth = document.getElementById("btnsmooth");
blocksmooth.innerHTML = "=";
const blockplus = document.getElementById("btnplus");
blockplus.innerHTML = "+";

let number = null;
let action = null;



blockdivision.addEventListener("click", function () {
  action = blockdivision.innerHTML;
  console.log(action, "click ÷");
});

blockmultiplication.addEventListener("click", function () {
  action = blockmultiplication.innerHTML;
  console.log(action, "click x");
});

blockminus.addEventListener("click", function () {
  action = blockminus.innerHTML;
  console.log(action, "click -");
});

blockplus.addEventListener("click", function () {
  action = blockplus.innerHTML;
  console.log(action, "click +");
});

blocksmooth.addEventListener("click", function () {
  action = blocksmooth.innerHTML;
  console.log(action, "click =");
});

blockseven.addEventListener("click", function () {
  number = blockseven.innerHTML;
  console.log(number, "click 7");
});

blockeight.addEventListener("click", function () {
  number = blockeight.innerHTML;
  console.log(number, "click 8");
});

blocknine.addEventListener("click", function () {
  number = blocknine.innerHTML;
  console.log(number, "click 9");
});

blockfour.addEventListener("click", function () {
  number = blockfour.innerHTML;
  console.log(number, "click 4");
});

blockfive.addEventListener("click", function () {
  number = blockfive.innerHTML;
  console.log(number, "click 5");
});

blocksix.addEventListener("click", function () {
  number = blocksix.innerHTML;
  console.log(number, "click 6");
});

blocknone.addEventListener("click", function () {
  number = blocknone.innerHTML;
  console.log(number, "click 1");
});

blocktwo.addEventListener("click", function () {
  number = blocktwo.innerHTML;
  console.log(number, "click 2");
});

blockthree.addEventListener("click", function () {
  number = blockthree.innerHTML;
  console.log(number, "click 3");
});

blockzero.addEventListener("click", function () {
  number = blockzero.innerHTML;
  console.log(number, "click 0");
});

function sumNumbers(a, b) {
  const sum = a + b;
  return sum;
}
console.log(sumNumbers(10, 10));

function subNumbers(a, b) {
  const sum = a - b;
  return sum;
}
console.log(subNumbers(10, 10));

function multipNumbers(c, b) {
  const sum = c * b;
  return sum;
}
console.log(multipNumbers(5, 7));

function divNumbers(d, s) {
  const sum = d / s;
  return sum;
}
console.log(divNumbers(20, 4));

function calculation() {
}


