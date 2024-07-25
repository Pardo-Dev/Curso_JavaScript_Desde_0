
/* DOM */

let elemento;

// Referencia a la pagina con su ruta
elemento = document;
console.log(elemento)

// Todas las etiquetas de un documento html
elemento = document.all;
console.log(elemento)

// Referencia a una etiqueta de un documento
elemento = document.body;
console.log(elemento)

// Muestra el dominio de la pagina
elemento = document.domain;
console.log(elemento)

// Acceder a formularios
elemento = document.forms[0];
console.log(elemento)

/*
Acceder a las imagenes del documento
elemento = document.images;

Acceder a los scripts del documento
elemento = document.scripts;
console.log(elemento);
*/


// Obtener contenido de elementos
// Por clase
const nombre = document.getElementsByClassName('field_nombre');
console.log(nombre)

// Por id
const formulario = document.getElementById('formulario')
console.log(formulario)