/* MANIPULACIÓN DEL DOM
● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
● Cambiar el contenido de un elemento HTML mediante JavaScript.
● Ocultar y mostrar elementos HTML utilizando JavaScript.
●
● Crear un array de 10 nombres.
● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
● Crear un array de números.
● Crear una función que pinte en pantalla cuántos números tiene el array de números.
● Crea los nodos necesarios para imprimir un formulario.
● Crea los nodos necesarios para imprimir una tabla.
● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes
keys:
id, name, status, species, type, gender
El value de cada key lo asignas tú
● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente. */



// Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
const headerTextos = document.querySelector('header');

const botonMensajeBienvenida = document.createElement('button');
botonMensajeBienvenida.textContent = 'Saber más...';
botonMensajeBienvenida.classList.add('buttonTitles');

headerTextos.appendChild(botonMensajeBienvenida);

let miParrafodeMensajeBienvenida = document.createElement('p');
miParrafodeMensajeBienvenida.innerHTML = 'En los jardines del día, las mariposas despliegan su ballet alado, transformándose de orugas a poesía viviente. En un efímero vuelo, pintan el cielo con colores, sus alas narrando historias de metamorfosis mágica. Bailan con el viento, llevando consigo secretos de flores y susurros de libertad. En cada aleteo, las mariposas tejen un poema etéreo que celebra la belleza efímera y la renovación constante de la naturaleza.';
miParrafodeMensajeBienvenida.classList.add('invisible');

headerTextos.appendChild(miParrafodeMensajeBienvenida);

botonMensajeBienvenida.addEventListener('click', () => {
    miParrafodeMensajeBienvenida.classList.toggle('invisible');
    miParrafodeMensajeBienvenida.classList.add('pHeader2');
})

headerTextos.appendChild(miParrafodeMensajeBienvenida);


// ● Cambiar el contenido de un elemento HTML mediante JavaScript.

const cambiarTituloPagina = document.querySelector('.h1Header');
cambiarTituloPagina.textContent = 'Canciones Aladas: Poemas cortos para volar';


// ● Ocultar y mostrar elementos HTML utilizando JavaScript.

const buttonContainer = document.querySelector('.buttonContainer');

const botonTitulos = document.createElement('button');
botonTitulos.textContent = 'Ocultar títulos';
botonTitulos.classList.add('buttonTitles');

let botonActivo = true;

buttonContainer.appendChild(botonTitulos);

botonTitulos.addEventListener('click', () => {
    const h2Container = document.querySelectorAll('h2');

    if (botonActivo) {
        h2Container.forEach(h2 => {
            h2.style.display = 'none';
        });
        botonTitulos.textContent = ('Mostrar títulos');
    } else {
        h2Container.forEach(h2 => {
            h2.style.display = 'block';
        });
        botonTitulos.textContent = ('Ocultar títulos');
    }
    botonActivo = !botonActivo;
});



const botonTextos = document.createElement('button');
botonTextos.textContent = 'Ocultar textos';
botonTextos.classList.add('buttonTitles');
let botonActivado = true;

buttonContainer.appendChild(botonTextos);

botonTextos.addEventListener('click', () => {
    const pContainers = document.querySelectorAll('.pContainer');
    if (botonActivado) {
        pContainers.forEach(pContainer => {
            pContainer.style.display = 'none';
        });
        botonTextos.textContent = ('Mostrar Textos');
    } else {
        pContainers.forEach(pContainer => {
            pContainer.style.display = 'block';
        });
        botonTextos.textContent = ('Ocultar Textos');
    }
    botonActivado = !botonActivado;
});


// ● Crear un array de 10 nombres.


let nombresMariposas = [
    "Monarca (Danaus plexippus)",
    "Mariposa tigre (Danaus gilippus)",
    "Almirante rojo (Vanessa atalanta)",
    "Esfinge colibrí (Macroglossum stellatarum)",
    "Blanca de la col (Pieris rapae)",
    "Mariposa nocturna (Morpho menelaus)",
    "Mariposa Julia (Dryas iulia)",
    "Mariposa pavo real (Aglais io)",
    "Monarca común (Danaus erippus)",
    "Mariposa espejo (Heterosais corythus)"
];

console.log(nombresMariposas);

// Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

const imprimirEnPantallaNombres = () => {
    const ubicacionArray = document.querySelector('.arrayNombres');
    ubicacionArray.classList.add('listMain');
    ubicacionArray.innerHTML = 'Estos son los nombres de algunas mariposas hermosas: ' + '<ul>' + nombresMariposas.map(nombre => `<li>${nombre}</li>`).join('') + ' <ul>';
}

imprimirEnPantallaNombres();

// ● Crear un array de números.

let numerosMariposas = [
    4,
    24,
    7000,
    2,
    6,
    360,
];


console.log(numerosMariposas);

// ● Crear una función que pinte en pantalla cuántos números tiene el array de números.

const imprimirNumeros = () => {
    const ubicacionNumeros = document.querySelector('.arrayNumeros');
    ubicacionNumeros.classList.add('listNameMain');
    ubicacionNumeros.innerHTML = 'Este es el array de números: ' + `${numerosMariposas}` + '<br>' + 'Esta es la cantidad de números que tiene el array : ' + ' ' + `${numerosMariposas.length}`;
}

imprimirNumeros();

// ● Crea los nodos necesarios para imprimir un formulario.

const ingresarDatos = document.querySelector('.formMain');

const crearFormulario = () => {

    const formulario = document.createElement('form');
    const inputDatosMainNombre = document.createElement('input');
    inputDatosMainNombre.type = 'text';
    inputDatosMainNombre.placeholder = 'Ingresa tu nombre';
    formulario.appendChild(inputDatosMainNombre);

    const inputDatosMainEmail = document.createElement('input');
    inputDatosMainEmail.type = 'email';
    inputDatosMainEmail.placeholder = 'Ingresa tu e-mail';
    formulario.appendChild(inputDatosMainEmail);

    const botonFormulario = document.createElement('button');
    botonFormulario.textContent = 'Enviar';
    botonFormulario.classList.add('buttonTitles');
    formulario.appendChild(botonFormulario);

    ingresarDatos.appendChild(formulario)
}
crearFormulario();


// ● Crea los nodos necesarios para imprimir una tabla.

function generarTabla(datos) {

    const contenedorTabla = document.querySelector('.tableMain');

    const tabla = document.createElement('table');
    tabla.classList.add('tableStyle');
    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow();
    for (const propiedad in datosMariposas[0]) {
        const celda = filaEncabezado.insertCell();
        celda.textContent = propiedad.charAt(0).toUpperCase() + propiedad.slice(1);
    }
    
    const cuerpoTabla = tabla.createTBody();
    datosMariposas.forEach(mariposa => {
        const fila = cuerpoTabla.insertRow();
        for (const propiedad in mariposa) {
            const celda = fila.insertCell();
            celda.textContent = mariposa[propiedad];
        }
    });
    contenedorTabla.appendChild(tabla);
}



// ● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys: id, name, status, species, type, gender

const datosMariposas = [
    { id: 1, name: 'Monarca', status: 'Active', species: 'Danaus plexippus', type: 'Butterfly', gender: 'Male' },
    { id: 2, name: 'Mariposa tigre', status: 'Active', species: 'Danaus gilippus', type: 'Butterfly', gender: 'Female' },
    { id: 3, name: 'Almirante rojo', status: 'Inactive', species: 'Vanessa atalanta', type: 'Butterfly', gender: 'Male' },
    { id: 4, name: 'Esfinge colibrí', status: 'Active', species: 'Macroglossum stellatarum', type: 'Moth', gender: 'Female' },
    { id: 5, name: 'Blanca de la col', status: 'Active', species: 'Pieris rapae', type: 'Butterfly', gender: 'Male' },
    { id: 6, name: 'Mariposa Azul', status: 'Active', species: 'Example species', type: 'Butterfly', gender: 'Female' }
];


generarTabla(datosMariposas);