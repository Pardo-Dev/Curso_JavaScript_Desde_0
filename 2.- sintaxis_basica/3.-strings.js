
/* Strings */
let nombre = "Juan Perez";
let apellido = String("PardoDev");
let descripcion = new String("Alto y Delgado");

/* Métodos */

console.log(nombre.length); // Largo de un string
console.log(nombre.indexOf('Perez')); // Muestra el indice de la coincidencia
console.log(descripcion.includes('Delgado')); // Retorna true o false si encuentra la palabra
console.log(nombre.replace(' ', '-')); // Reemplaza un valor coincidente por otro
console.log(apellido.slice(0,5)); // Corta strings (inicio, fin, saltos)
console.log(apellido.repeat(3)); // Repite n cantidad de veces el string

// Minusculas y Mayusculas
console.log(descripcion.toLowerCase()); // Minucula
console.log(descripcion.toUpperCase()); // Mayuscula

// split: Separa un strings por un caracter y se convierte en un array
const hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(","));

// Cortar espacios
let texto = "    esto tiene muchos espacios    "
console.log(texto.trimStart()); // Corta espacios en el inicio
console.log(texto.trimEnd()); // Corta espacios en el final
console.log(texto.trim());  // Corta espacios en el inicio y fin

/* Template strings usando backticks */
console.log(`Mi nombre completo es: ${nombre} ${apellido}`);

