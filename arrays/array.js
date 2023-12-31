/* ARRAYS
● Crear un array de 10 números
● Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
● Crear una función que añada un número al array
● Crear una función que elimine los números pares de ese array.
● Crear una función que devuelva el número mayor de un array.
● Crear una función que devuelva el número menor de un array.
● Crear un función que convierta en minúsculas todas las letras de un texto.
● Crear una función que convierta en mayúsculas todas las letras de un texto.
● Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula. */



// ● Crear un array de 10 números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);
document.write('Este es mi arreglo de números: ' + numeros + '<br>');

// ● Crear una función que imprima en consola todos los números de un array(Investigar ciclo for) 
//Este es un bucle for clásico que se utiliza para recorrer un array o cualquier estructura iterable. 

for (let i = 0; i < numeros.length; i++) {
    console.log(i);
}


/* for...of se usa para iterar sobre los valores de un iterable.
Este tipo de ciclo se utiliza para recorrer los valores de un iterable (como un array) en orden.
En cada iteración, numero tomará el valor del elemento actual del array.
Es más limpio y legible cuando solo necesitas los valores y no estás interesado en los índices. */

for (let numero of numeros) {
    console.log(numero);
}

/*  for...in se usa para iterar sobre las propiedades enumerables de un objeto, y en el contexto de un array, puede dar los índices en lugar de los valores.
Este tipo de ciclo se utiliza para recorrer las propiedades enumerables de un objeto.
En el contexto de un array, numero tomará los índices en lugar de los valores. Es decir, numero será el índice del elemento actual en lugar del valor.
No es la forma más común de recorrer arrays, ya que puede tener comportamientos inesperados si se modifican las propiedades del objeto (por ejemplo, si se agregan propiedades no numéricas al array). */

for (let numero in numeros) {
    console.log(numero)
}


// ● Crear una función que añada un número al array

const unNumeroMas = numeros.push(11);
console.log(numeros)
document.write('<br>', 'Añadi el numero 11, por eso este arreglo se ve así: ', numeros, '<br>')

const unNumeroMas2 = (numero) => {
    numeros.push(numero);
    console.log(numeros);
    document.write(`<br> He añadido un número a este arreglo, ese número es: ${numero}. El nuevo arreglo es: ${numeros}`);
};

unNumeroMas2(12);


// ● Crear una función que elimine los números pares de ese array. 

document.write('<br> <br> Eliminando PARES: <br> <br>')

const eliminarPares = () => {
    numerosImpares = numeros.filter(numero => numero % 2 !== 0);
    console.log(numerosImpares)
    document.write(`El nuevo arreglo sin números pares es: ${numerosImpares}.`);
};

eliminarPares();

//Crear una función que elimine los números impares de ese array. 

document.write('<br> <br> Eliminando IMPARES: <br> <br>');

const eliminarImpares = () => {
    numerosPares = numeros.filter(numero => numero % 2 === 0);
    console.log(numerosPares)
    document.write(`El nuevo arreglo sin números impares es: ${numerosPares}.`);
};

eliminarImpares();


// ● Crear una función que devuelva el número mayor de un array.

document.write('<br> <br> ¿Cuál es el mayor? <br> <br>');


const elMayor = () => {
    const mayor = Math.max(...numeros);
    return mayor; 
};

const soyElMayor = elMayor(numeros);

console.log(`El número mayor de este arreglo es: ${soyElMayor}`);
document.write(numeros + '<br>' + '<br>');
document.write(`El número mayor de este arreglo es: ${soyElMayor}`);



// ● Crear una función que devuelva el número menor de un array.

document.write('<br> <br> ¿Cuál es el menor? <br> <br>');


const elMenor= () => {
    const menor = Math.min(...numeros);
    return menor; 
};

const soyElMenor = elMenor(numeros);

console.log(`El número menor de este arreglo es: ${soyElMenor}`);
document.write(numeros + '<br>' + '<br>');
document.write(`El número menor de este arreglo es: ${soyElMenor}`);

// ● Crear un función que convierta en minúsculas todas las letras de un texto.

document.write('<br> <br> Convirtiendo texto a minúsculas, el texto es: <br>');

const crearNuevoParrafo = () => {
    
   const nuevoParrafo =  document.createElement('p');

    nuevoParrafo.textContent = 'Las mariposas, con sus delicadas alas y colores vibrantes, son verdaderas obras maestras de la naturaleza. Su transformación desde simples orugas a criaturas aladas simboliza la belleza que surge de la perseverancia y el cambio. Su danza en el aire es como un poema silencioso que nos recuerda la efímera pero asombrosa naturaleza de la vida. Al observar una mariposa, no solo contemplamos su gracia, sino que también nos conectamos con la maravilla de la transformación y la posibilidad de renacer con una nueva y radiante esencia.';
    
    document.body.appendChild(nuevoParrafo);
    
    return nuevoParrafo;
}

const miParrafo = crearNuevoParrafo(); 

const conviertoMinusculas = miParrafo.textContent.toLowerCase();

console.log(conviertoMinusculas);

const nuevoTitulo = document.createElement('h2');
nuevoTitulo.textContent = `Ahora en minúsculas:`;
document.body.appendChild(nuevoTitulo);

const nuevoTexto = document.createElement('p');
nuevoTexto.textContent = `${conviertoMinusculas}`;
document.body.appendChild(nuevoTexto);

// la consola me da error en los siguientes ejemplos (abajo) por eso lo imprimo manipulando el DOM (arriba)
// document.write('<br> Ahora en minúsculas: <br>');
// document.write(`<p>${conviertoMinusculas}<p>`);


//● Crear una función que convierta en mayúsculas todas las letras de un texto.

document.write('<br>  Convirtiendo texto a mayúsculas, el texto es: <br>');

const crearNuevoParrafo2 = () => {
    
   const nuevoParrafo2 =  document.createElement('p');

    nuevoParrafo2.textContent = 'Las mariposas, con sus delicadas alas y colores vibrantes, son verdaderas obras maestras de la naturaleza. Su transformación desde simples orugas a criaturas aladas simboliza la belleza que surge de la perseverancia y el cambio. Su danza en el aire es como un poema silencioso que nos recuerda la efímera pero asombrosa naturaleza de la vida. Al observar una mariposa, no solo contemplamos su gracia, sino que también nos conectamos con la maravilla de la transformación y la posibilidad de renacer con una nueva y radiante esencia.';
    
    document.body.appendChild(nuevoParrafo2);
    
    return nuevoParrafo2;
}

const miParrafo2 = crearNuevoParrafo(); 

const conviertoMayusculas = miParrafo2.textContent.toUpperCase();

console.log(conviertoMayusculas);

const nuevoTitulo2 = document.createElement('h3');
nuevoTitulo2.textContent = `Ahora en mayúsculas:`;
document.body.appendChild(nuevoTitulo2);

const nuevoTexto2 = document.createElement('p');
nuevoTexto2.textContent = `${conviertoMayusculas}`;
document.body.appendChild(nuevoTexto2);

// ● Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.

const nombres = ['maria', 'alejandra', 'luisa', 'andrea', 'susana'];

console.log(nombres);

document.write('El arreglo de nombres es: ' , nombres);

function nombresMayusculas(nombres) {
    if (nombres.length > 0){
        const primeraLetraMayus = nombres.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1)).join(' - ');
        return primeraLetraMayus;
    }
   return nombres;
};

const nombresConMayus = nombresMayusculas(nombres);
console.log(nombresConMayus);

const nuevosNombres = document.createElement('p');
nuevosNombres.textContent = `El nuevo arreglo de nombres con mayúsculas es: ${nombresConMayus}`;
document.body.appendChild(nuevosNombres);
