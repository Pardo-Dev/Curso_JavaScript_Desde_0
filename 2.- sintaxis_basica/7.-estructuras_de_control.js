
/* Estrcturas de control if, else if y else */

const edad = 65;

if(edad > 18){
    console.log(`Usted es mayor de edad: ${edad}`);
} else if(edad >= 65){
    console.log(`Usted es mayor de edad: ${edad}`)
} else {
    console.log(`Usted es menor de edad: ${edad}`);
}

// Switch: Se usa más para validar strings no números
const metodoPago = 'efectivo';

switch(metodoPago){ // Lo que se desea comprobar
    case('efectivo'):
        console.log(`Pagaste con: ${metodoPago}`)
        break;
    default:
        console.log(`Aun no ha seleccionado un metodo de pago`)
        break;
}

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar')
} else {
    console.log('No puedes comprar')
}