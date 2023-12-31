/* OBJETOS
● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
● Crear una función que devuelva la marca del carro.
● Crear una función que devuelva la cantidad de puertas que tiene el carro.
● Crear una función que devuelva un atributo del objeto anidado. */

// Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.

const carro = {
    marca: 'Seat Leon',
    modelo: '2019',
    numeroPuertas: 5,
    color: 'negro',
    sistemaEntretenimiento: {
        pantalla: 'tactil',
        reproductor: 'Dvd/Blu-ray',
        audio: 'Premium',
    },
    navegacion: {
        controlDeVoz: {
            gps: 'mapas en tiempo real',
            llamadas: 'conexion bluetooth',
        },
        aplicacionesIntegradas: {
            clima: 'temperatura del ambiente',
            puntosInteres: 'radars',
        },
    },
};




// Crear una función que devuelva la marca del carro. ? esto cuenta como función? 


console.log('carro', carro.marca);

const marcaCarro =  {carro};
console.log(`La marca del carro es ${carro.marca}`);
document.write(`la marca del carro es ${carro.marca}`);

const marcaCarro2 = carro.marca;
console.log(marcaCarro2);
document.write('<br>', 'La marca de este fabuloso carro es: ' + marcaCarro2 + '<br>');

const marcaCarro3 = (objeto) => {
    return objeto.marca
};
console.log('carro', marcaCarro3(carro));


//función para obtener la marca del carro por parámetros- MUY DIFICIL 

const obtenerMarcaCarro = (objeto, propiedad) => {
    if (objeto.hasOwnProperty(propiedad)){
        return objeto[propiedad];
    } else {
        return '¡Ups, la marca del carro es desconocida inténtelo de nuevo!';
    }
};

const marcaDelCarro = obtenerMarcaCarro(carro, 'marca');
console.log('Este carro es un: ', marcaDelCarro);
document.write('Este carro es un: ' +  marcaDelCarro + '<br>');



// Crear una función que devuelva la cantidad de puertas que tiene el carro.


const numPuertas = carro.numeroPuertas;
console.log(numPuertas);

const numPuertas2 = {carro};
console.log(`el numero de puertas es  ${carro.numeroPuertas}`);

document.write(numPuertas)

const obtenerNumeroPuertas = (objeto, propiedad) => {
    if (objeto.hasOwnProperty(propiedad)){
        return objeto[propiedad];
    } else {
        return '¡Ups, la propiedad ingresada no tiene puertas!';
    }
};

const numeroPuertasCarro = obtenerNumeroPuertas(carro, 'numeroPuertas');
console.log('Este carro tiene ', numeroPuertasCarro, 'puertas');
document.write('<br>' + 'Este carro tiene ' +  numeroPuertasCarro + ' puertas' + '<br>');



// Crear una función que devuelva un atributo del objeto anidado. 




const  { aplicacionesIntegradas, puntosInteres } = carro.navegacion.aplicacionesIntegradas
console.log(puntosInteres)

console.log('este carro tiene ',  carro.sistemaEntretenimiento.reproductor);
document.write('este carro tiene ' +  carro.sistemaEntretenimiento.reproductor + '<br>');


const obtenerNavegacion = (objeto, propiedad) => {
    if (objeto.hasOwnProperty(propiedad)){
        return objeto[propiedad];
    } else {
        return '¡Ups, la propiedad ingresada es incorrecta!';
    }
};

const navegacionCarro = obtenerNavegacion(carro, 'navegacion');
console.log('Este carro tiene la capacidad de mostrar la ', navegacionCarro.aplicacionesIntegradas.clima, );
document.write('<br>' + 'Este carro tiene la capacidad de mostrar la ' +  navegacionCarro.aplicacionesIntegradas.clima +  '<br>');


/*
PROBANDO CON OTROS OBJETOS

let dia = 5

const diasNombres = {
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miércoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sábado',
}


console.log(diasNombres[dia] || 'Día inexistente');
*/
