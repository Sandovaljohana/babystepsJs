//let miH1 = document.getElementById("miH1");
//console.log(miH1);

//el textContent me enseña lo que tenga dentro ese nodo
let miDiv = document.createElement("div");
miDiv.innerHTML = "<h2> hola chavaleria</h2>";


let miH1 = document.getElementById("miH1").textContent;
console.log(miH1);

let miBody = document.querySelector("body")
console.log(miBody);

miBody.appendChild(miDiv);

let miBoton = document.createElement("button");
miBoton.textContent = "esto es un boton";

miBoton.addEventListener("click", () => {
    miDiv.classList.toggle("invisible");
    miDiv.style.color = "yellow";
})

miBody.appendChild(miBoton);