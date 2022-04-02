let numeroTeclas = document.querySelectorAll(".numeroTeclas");
let simboloOperadores = document.querySelectorAll(".simboloOperadores");
let simboloColchetes = document.querySelectorAll(".simboloColchetes");
let resultado = document.querySelector("#resultado");
let userInput = document.querySelector("#userInput");

numeroTeclas.forEach(items => {
  items.addEventListener("click", () => {
    if(items.innerText != "=" || items.innerText == ""){
      userInput.innerText = userInput.innerText + items.innerText;
    }
    if(items.innerText == "c"){
      userInput.innerText = "";
      resultado.innerText = "";
  }
  if(items.innerText == "=" && userInput.innerText != ""){
    resultado.innerText = eval(userInput.innerText);
    userInput.innerText = "";
    
}
  })
})
simboloOperadores.forEach(items => {
  items.addEventListener("click", () => {
    if(items.innerText != "=" || items.innerText == ""){
      userInput.innerText = userInput.innerText + items.innerText;
    }
    if(items.innerText == "c"){
      userInput.innerText = "";
      resultado.innerText = "";
  }
  if(items.innerText == "=" && userInput.innerText != ""){
    resultado.innerText = eval(userInput.innerText);
    userInput.innerText = "";
}
  })
})

simboloColchetes.forEach(items => {
  items.addEventListener("click", () => {
    if(items.innerText != "=" || items.innerText == ""){
      userInput.innerText = userInput.innerText + items.innerText;
    }
    if(items.innerText == "c"){
      userInput.innerText = "";
      resultado.innerText = "";
  }
  if(items.innerText == "=" && userInput.innerText != ""){
    resultado.innerText = eval(userInput.innerText);
    userInput.innerText = "";
}
  })
})

