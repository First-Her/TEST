let currentNumber = 0;

const elem = document.getElementById("penis");
elem.innerHTML = "ПЕНИС  23см";
const blockGT = document.getElementById("btnGT");
blockGT.innerHTML = "GT";
const blockAC = document.getElementById("btnAC");
blockAC.innerHTML = "AC";
const btnonoff = document.getElementById("btnonoff");
btnonoff.innerHTML = "On/Off";
const blockON = document.getElementById("btnON");
blockON.innerHTML = "ON";
const blockseven = document.getElementById("btnseven");
blockseven.innerHTML = "7";
const blockeight = document.getElementById("btneight");
blockeight.innerHTML = "8";
const blocknine = document.getElementById("btnnine");
blocknine.innerHTML = "9";
const blockdivision = document.getElementById("btndivision");
blockdivision.innerHTML = "/";
const blockfour = document.getElementById("btnfour");
blockfour.innerHTML = "4";
const blockfive = document.getElementById("btnfive");
blockfive.innerHTML = "5";
const blocksix = document.getElementById("btnsix");
blocksix.innerHTML = "6";
const blockmultiplication = document.getElementById("btnmultiplication");
blockmultiplication.innerHTML = "*";
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
const tpoloska = document.getElementById("tpoloska");
tpoloska.value = 0;

let action = null;
let numberfirst = null;
let result = null;
let textInput = null;



btnonoff.addEventListener("click", function () {
  if (tpoloska.value === "") {
    tpoloska.value = 0;
  } else {
    tpoloska.value = "";
  }
});

blockON.addEventListener('click', function(){
  tpoloska.value = 0;
})


blockdivision.addEventListener("click", function () {
  action = blockdivision.innerHTML;
  numberfirst = currentNumber;
  tpoloska.value = blockdivision.innerHTML;
});

blockmultiplication.addEventListener("click", function () {
  action = blockmultiplication.innerHTML;
  numberfirst = currentNumber;
  tpoloska.value = blockmultiplication.innerHTML;
});

blockminus.addEventListener("click", function () {
  action = blockminus.innerHTML;
  numberfirst = currentNumber;
  tpoloska.value = blockminus.innerHTML;
});

blockplus.addEventListener("click", function () {
  action = blockplus.innerHTML;
  numberfirst = currentNumber;
  tpoloska.value = blockplus.innerHTML;
});

blocksmooth.addEventListener("click", function () {
  calculation();
  tpoloska.value = result;
});

blockseven.addEventListener("click", function () {
  currentNumber = blockseven.innerHTML;
  tpoloska.value = blockseven.innerHTML;
});

blockeight.addEventListener("click", function () {
  currentNumber = blockeight.innerHTML;
  tpoloska.value = blockeight.innerHTML;
});

blocknine.addEventListener("click", function () {
  currentNumber = blocknine.innerHTML;
  tpoloska.value = blocknine.innerHTML;
});

blockfour.addEventListener("click", function () {
  currentNumber = blockfour.innerHTML;
  tpoloska.value = blockfour.innerHTML;
});

blockfive.addEventListener("click", function () {
  currentNumber = blockfive.innerHTML;
  tpoloska.value = blockfive.innerHTML;
});

blocksix.addEventListener("click", function () {
  currentNumber = blocksix.innerHTML;
  tpoloska.value = blocksix.innerHTML;
});

blocknone.addEventListener("click", function () {
  currentNumber = blocknone.innerHTML;
  tpoloska.value = blocknone.innerHTML;
});

blocktwo.addEventListener("click", function () {
  currentNumber = blocktwo.innerHTML;
  tpoloska.value = blocktwo.innerHTML;
});

blockthree.addEventListener("click", function () {
  currentNumber = blockthree.innerHTML;
  tpoloska.value = blockthree.innerHTML;
});

blockzero.addEventListener("click", function () {
  currentNumber = blockzero.innerHTML;
  tpoloska.value = blockzero.innerHTML;
});

function sumNumbers() {
  const sum = Number(numberfirst) + Number(currentNumber);
  return sum;
}

function subNumbers() {
  const sum = Number(numberfirst) - Number(currentNumber);
  return sum;
}

function multipNumbers() {
  const sum = Number(numberfirst) * Number(currentNumber);
  return sum;
}

function divNumbers() {
  const sum = Number(numberfirst) / Number(currentNumber);
  return sum;
}

function calculation() {
  console.log(action === "*", "функция калькулейшен");
  if (action === "+") {
    console.log("сложение");
    result = sumNumbers();
    console.log(result, "результат");
  } else if (action === "-") {
    console.log("вычитание");
    result = subNumbers();
    console.log(result, "результат");
  } else if (action === "*") {
    console.log("умножение");
    result = multipNumbers();
    console.log(result, "результат");
  } else if (action === "/") {
    console.log("деление");
    result = divNumbers();
    console.log(result, "результат");
  }
}
