
/* Tipos de datos */

/* Primitivos */

// number
let edad = 45;
console.log(edad);

let precio = 7.99;
console.log(precio);

// string
let nombre = "Juan";
console.log(nombre);

let mensaje = "Hola, mundo";
console.log(mensaje);

// boolean
let esMayor = true;
console.log(esMayor);

let esMenor = false;
console.log(esMenor);

// null
let valor = null;
console.log(valor);

// undefined
let datoIndefinido;
console.log(datoIndefinido);

/* Compuestos */

// object
let persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante : true
};
console.log(persona);

// array
let colores = ['rojo','verde','azul']
console.log(colores);

// function
function sumar(a, b) {
    return a + b;
}
sumar(5,3);

// date
let fechaActual = new Date();
console.log(fechaActual);