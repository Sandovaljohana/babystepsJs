//Aquí existe un comentario sobre mí alerta
//alert('Aprendiendo variables en js')

//alert("string es un texto")

console.log('Esta es la manera de ver mi consola 😁')


/*PRIMEROS PASOS EN JAVASCRIPT: VARIABLES
Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
la pantalla del navegador y la consola.
● De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
Deberás imprimir el resultado por la pantalla del navegador y la consola.
● De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola. */

// 3 TIPOS DE DECLARACIONES DE VARIABLES

//VARIABLE VAR: Declara una variable iniciándola opcionalmente a un valor, podrá cambiar su valor si el scope es local. Es antiguo usar "var"

var dias = 365;


//VARIABLE LET: Me permite declarar variables que son ciertas a nivel de bloque, se introducen en llaves

// variables tipo STRING: cadenas de texto, se representan con comillas dobles o simples.

let saludo = "!Hola! !hoy es un bonito día!";

console.log(saludo);

document.write("<br>", saludo);

//variables tipo NUMBER: representan números, se pone el número tal cual, sin comillas ni nada.

let cantidad = 47;

console.log(cantidad);


//variables tipo LISTAS: representan un conjunto de datos, se crean usando corchetes y dentro de los valores separados por comas. 

let frutas = ["manzana"," pera", " fresa", " sandía", " chontaduro", " cereza"];

console.log(frutas);

document.write("<br>Sus frutas favoritas son: ", frutas);


//variables tipo BOOLEANAS: solo puede tener dos valores o es "true" o es "false", sirven para chequear cosas, condiciones o cosas así.

let esUnPlaneta = true;

console.log(esUnPlaneta);

let esUnaEstrella = false;

console.log(esUnaEstrella);

"<br>";

document.write("<br> El sol es un planeta: ", esUnaEstrella)

// 1.  Variables cadena de texto o string
let nombre = "Johana";
let apellido = "Sandoval";
let edad = 34;

console.log(nombre, apellido, edad);

document.write("<br> Ese es su nombre:  ", nombre);
document.write("<br> Ese es su apellido: ",  apellido);
document.write("<br> Esa es su edad:  ",  edad);

let eseEsSuNombre = true;

console.log(eseEsSuNombre);



// 2.variables tipo integer: 

let longitud = 13;
let ancho = 45;
let alto = 38;

document.write("<br> Longitud: ", longitud);
document.write("<br> Ancho: ", ancho);
document.write("<br> Alto: ", alto);

let sumar = (longitud + ancho + alto);

console.log(sumar);

document.write("<br> Long+Anch+Alto: ", sumar);


let restar = (longitud - ancho);

console.log(restar);

document.write("<br> Long - Anch:", restar);


let multiplicar = (longitud * alto);

console.log(multiplicar);

document.write("<br> Long * Alt: ", multiplicar);


let dividir = (ancho / longitud);

console.log(dividir);

document.write("<br> Ancho/ Long: ", dividir);


//3. variables tipo texto concatenadas


let nombreCompleto = (nombre +  apellido);

console.log(nombreCompleto);

document.write("<br> Su nombre completo: ", nombreCompleto);


// typeof

let miFuncion = new Function("5+2");
let forma = "redonda";
let tamano = 1;
let hoy = new Date();


typeof forma;
console.log(typeof(forma));

typeof hoy;
console.log(typeof(hoy));

typeof tamano;
console.log(typeof(tamano));

typeof miFuncion;
console.log(typeof(miFuncion));





// PROBANDO OPERADORES DE INCREMENTO

let totalMedida = (++sumar);

console.log(totalMedida);

document.write('<br>', totalMedida);


