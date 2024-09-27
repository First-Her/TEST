let currentNumber = 0;

const buttonsplus = document.getElementById("buttonsplus");
buttonsplus.innerHTML = "+";
const buttonsmminus = document.getElementById("buttonsmminus");
buttonsmminus.innerHTML = "-";
const displey = document.getElementById("displey");
displey.innerHTML = currentNumber;

buttonsplus.addEventListener("click", function () {
    currentNumber = currentNumber + 1;
    displey.innerHTML = currentNumber;
  });

  buttonsmminus.addEventListener("click", function () {
    currentNumber = currentNumber - 1;
    displey.innerHTML = currentNumber;
  });