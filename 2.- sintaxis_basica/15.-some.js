const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Teclado', precio: 700},
    { nombre: 'Celular', precio: 200}
]

// Recorrer arreglos que contengan objetos
const existe = carrito.some( producto => {
    return producto.nombre ==='Television'
})

console.log(existe)

// Buscar por indice
const indice = carrito.find(producto => producto.nombre === 'Celular')
console.log(indice)

// Array method reduce(=> contador + suma, inicioContador)
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado)

// Filtrar arreglos
let r = carrito.filter((producto) => producto.precio >= 400);
console.log(r)

// every, devuelve un boolean si todos los elementos cumplen una funcion
let re = carrito.every((producto) => producto.precio < 1000);
console.log(re)