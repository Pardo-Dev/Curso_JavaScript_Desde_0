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