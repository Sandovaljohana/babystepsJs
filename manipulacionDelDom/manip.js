
/*
MANIPULACIÓN DEL DOM
● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
● Cambiar el contenido de un elemento HTML mediante JavaScript.
● Ocultar y mostrar elementos HTML utilizando JavaScript.
● Crear un array de 10 nombres.
● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
● Crear un array de números.
● Crear una función que pinte en pantalla cuántos números tiene el array de números.
● Crea los nodos necesarios para imprimir un formulario.
● Crea los nodos necesarios para imprimir una tabla.
● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes
keys:
id,
  name,
  status, 
  species, 
  type, 
  gender

El value de cada key lo asignas tú

● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.
*/


//let miH1 = document.getElementById("miH1");
//console.log(miH1);

//el textContent me enseña lo que tenga dentro ese nodo

let miDiv = document.createElement("div");
miDiv.innerHTML = "<h2> Hola, estoy probando como manipular el Dom </h2>";

let miH1 = document.getElementById("miH1").textContent;
console.log(miH1);

let miBody = document.querySelector("body")
console.log(miBody);

miBody.appendChild(miDiv);

let miBoton = document.createElement("button");
miBoton.textContent = "esto es un boton";

miBoton.addEventListener("click", () => {
    miDiv.classList.toggle("invisible");
    miDiv.style.color = "Blue";
})

miBody.appendChild(miBoton);



// ● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.


const botonNuevo = document.createElement('button');
botonNuevo.textContent = 'click';
botonNuevo.classList.add('buttonRosa');
let botonActivo = false;

document.body.appendChild(botonNuevo);


botonNuevo.addEventListener('click', () => {
  if (botonActivo) {
    botonNuevo.classList.remove('buttonRed');
    botonNuevo.textContent = ('click');
  } else {
    botonNuevo.classList.add('buttonRed');
    botonNuevo.textContent = ('ohh yeah!');
  }
  
  botonActivo = !botonActivo;
});


// ● Cambiar el contenido de un elemento HTML mediante JavaScript.

const probandoTextos = document.createElement('p');
probandoTextos.innerHTML = 'Mi texto de prueba ';

const contenedor = document.querySelector('.probando');

contenedor.appendChild(probandoTextos);

const nuevoProbandoTextos = document.querySelector('.probando');
nuevoProbandoTextos.textContent = 'nuevo texto que quiero ver';


// ● Ocultar y mostrar elementos HTML utilizando JavaScript.

