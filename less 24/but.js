const container = document.getElementById("container");

function createNewBlock(event) {
  const newDiv = document.createElement("div");
  newDiv.className = 'BlockFit'
  //newDiv.style.width = '100px' 
  //newDiv.style.height = '100px' 
  //newDiv.style.backgroundColor = 'red';
  newDiv.textContent = "Новый блок #";
  container.appendChild(newDiv);
}

document
  .getElementById("createDivButton")
  .addEventListener("click", createNewBlock);
