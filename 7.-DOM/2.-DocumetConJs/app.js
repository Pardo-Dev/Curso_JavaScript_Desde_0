// Modificar textos
const encabezado = document.querySelector('body h1');

encabezado.innerHTML = 'Bienvenido a mi pagina';

encabezado.style.backgroundColor='red';
encabezado.style.color='white';


// Traer clases de un elemento
let classEncabezado = encabezado.classList
classEncabezado.forEach((clase) => {
    console.log(`Nombre clase: ${clase}`)

})

classEncabezado.add('holaXD'); // Añadir una clase a un elemento
// console.log(classEncabezado);

// Traer elementos hijos
const card = document.querySelector('.card');
let modify = card.children[1].textContent = 'Hola de transversion de DOM';
console.log(modify);

// Para conocer el elemento padre debemos de usar el comando parentElement
const padre = card.parentElement;
console.log(padre)

// Podemos movernos entre elementos dentro que contengan una clase
const lista = document.querySelector('li');
console.log(lista.nextElementSibling);

// tambien pordemos movernos hacia atras de un elemento
console.log(lista.previousElementSibling);

// Escoger el primer elemento
console.log(lista.firstElementChild)

// Escoger el ultimo elemento
console.log(lista.lastElementChild)


// Eliminar elementos del DOM
let titulo = document.querySelector('#title');
titulo.remove()

// Se puede remover tambien con removeChil(algo.children[posicion])
