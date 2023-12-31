/*FUNCIONES
● Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
con un parámetro para el nombre.
● Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
imprimir el resultado por la pantalla del navegador y la consola.
● Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
del navegador y la consola. */

// Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"

/*
let nombre = " ";
let saludar = "Hola, ";

function saludo() {
  let nombre = "Franchesca";
  console.log(saludar, nombre);
  document.write(saludar, nombre);
}

saludo();
*/

//correccion

function saludo(valorNombre, valorSaludo) {
  console.log(valorSaludo, valorNombre);
  document.write(valorSaludo, valorNombre);
}

saludo("Johana", "Que tal te encuentras hoy ");
console.log("<br>");
document.write("<br>");

//correccion2
/*
function saludito(nombrePersona) {
  document.write(`hola, ${nombrePersona} <br> <br>`);
  document.write("hola " + nombrePersona + "como estás");
  console.log(`hola, ${nombrePersona}`)
}

saludito("Anita");*/

//parámetros que reciba un paraámetro como valor de nombrepasar parametros me garantiza que esperen un supuesti y sea dinámica, el orden de los factores en los parámetros si altera el resultado

// Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás imprimir el resultado por la pantalla del navegador y la consola.

/*
let num1 = "";
let num2 = "";

function sumar() {
  let num1 = 8;
  let num2 = 4;
  console.log(num1 + num2);
  document.write("<br>", num1 + num2);
}

sumar(); */

//corrección

function sumita(a, b) {
  return a + b;
}

console.log(sumita(2, 22));
document.write(sumita(2, 22));

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola.

function parOimpar(numero) {
  if (numero % 2 === 0) {
    console.log("El número es par");
    document.write(" <br> El número es par");
  } else {
    console.log("El número es impar");
    document.write(" <br> El número es impar");
  }
}

parOimpar(80);
parOimpar(3);
parOimpar(12);




//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola.  sin embargo quiero crearlo con un input para saber el número o que sea interactuando con el usuario

function parimpar() {
  let num1 = document.getElementById('numImput').value;
    if (num1 % 2 === 0) {
      console.log('El número es par');
      document.getElementById('result').innerHTML = `El número es Par`;
    } else {
      console.log('El número es impar');
      document.getElementById('result').innerHTML = `El número es Impar`;
    }
}



// probando funciones "PRO" funciónes flecha para abreviar código

const saludando = (saludo, nombre) => ({ saludo, nombre });

const saludoPro = saludando("Buen día ", "Johana Sandoval");

console.log(saludoPro);

document.write(`<br> ${saludoPro.saludo} ${saludoPro.nombre}`);
