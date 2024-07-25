/* Añadiendo eventos */

// Seleccionar elemento al que se le quiere asignar un evento
const button = document.querySelector('#btn-primary');

// Se añade un evento click! ('evento', function)
button.addEventListener('click', mensaje )

// Funcion para quitar una clase o asignar segun una condicion
/** 
 * Se usa this para hacer referencia al elemento del cual
 * se le esta añadiendo el evento, de esta manera no es necesario
 * poner el nombre de la variable que contiene el elemento. */
function mensaje() {
    if(this.classList.contains('btn')){
        this.classList.remove('btn')
    } else {
        this.classList.add('btn');
    }

    console.log('Haz dado click en la otra funcion!')
    
}

// Hay una gran variedad de eventos(hay que investigar, en el curso no se veran).

// Añadir un evento cuando se carguen todos los elementos del documento.
document.addEventListener('DOMContentLoaded', () => {
    console.log('Esto se ejecuta cuando se carga la pagina completa!')
})

// Eventos con el mouse
const nav = document.querySelector('.navegacion');

// Cuando entra el cursor al elemento
nav.addEventListener('mouseenter', () => {
    console.log('Entrando en la navegacion!')
})

// Cuando sale el cursor del elemento.
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion!')
})

nav.addEventListener('dblclick', () => {
    console.log('Evento de doble click!')
})

// Eventos sobre los inputs

// keydown: Cuando se esta escribiendo en un input
let busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...')
})
// Keyup
busqueda.addEventListener('keyup', () => {
    console.log('Ha dejado de escribir')
})

//blur: cuando clickeo en el input y me salgo
busqueda.addEventListener('blur', () => {
    console.log('Esto es un efecto blur')
})

// copy
busqueda.addEventListener('copy', () => {
    console.log('Ha copiado algo')
})

// paste
busqueda.addEventListener('paste', () => {
    console.log('Ha pegado algo')
})

// cut
busqueda.addEventListener('cut', () => {
    console.log('Ha cortado algo')
})

// input para todo lo anterior menos el blur

// Ver lo que el usuario escribe
// paste
busqueda.addEventListener('input', (event) => {
    console.log(event.target.value)
})