let value = ''

document.getElementById('tpoloska').addEventListener('input',(event)=>{
    //console.log(event.target.value);
    value = event.target.value;
    console.log(value);
})

const container = document.getElementById("container");

function createNewBlock() {
  const newDiv = document.createElement("div");
  newDiv.className = 'BlockFit'
  //newDiv.style.width = '100px' 
  //newDiv.style.height = '100px' 
  //newDiv.style.backgroundColor = 'red';
  newDiv.textContent = value;
  container.appendChild(newDiv);
}

document
  .getElementById("createDivButton")
  .addEventListener("click", createNewBlock);






