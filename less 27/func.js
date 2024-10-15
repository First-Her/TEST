const car = "машина";
const sword = "меч";
const apple = "яблоко";

function slicer(text, textOne, textTwo) {
  const result = `${text.slice(0, 3)}  
${textOne.slice(0, 3)} 
${textTwo.slice(0, 3)}`;
  console.log(result);
  return result;
}
slicer(car, sword, apple);

//const nabor = slicer(car);
//console.log(nabor);
