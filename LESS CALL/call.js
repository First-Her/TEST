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

function sumNumbers(a,b) {
    const sum=a+b;
    return sum;
}
console.log(sumNumbers(10,10));

function subNumbers(a,b) {
    const sum=a-b;
    return sum;
}
console.log(subNumbers(10,10));

function multipNumbers(c,b) {
    const sum=c*b;
    return sum;
}
console.log(multipNumbers(5,7));

function divNumbers(d,s) {
    const sum=d/s;
    return sum;
}
console.log(divNumbers(20,4));
