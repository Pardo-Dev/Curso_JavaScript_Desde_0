
/* Generar html con JavaScript */

const enlace = document.createElement('a');

//agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// Agregando el href
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace) // Agrega el elemento al final

// Insertar antes de un elemento
navegacion.insertBefore(enlace, navegacion.children[0])

// Darle atributos a los elementos de html
enlace.setAttribute('data-enlace', 'informacion del enlace');

// añadir una clase a un elemento
enlace.classList.add('nueva-clase');
enlace.classList.add('añadir-otra-clase');
enlace.classList.add('Vieja-clase');
