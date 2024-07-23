const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 500},
    { nombre: 'Television', precio: 100},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 400},
    { nombre: 'Teclado', precio: 700},
    { nombre: 'Celular', precio: 200}
]

// Itera sobre arrays
for(let pendiente of pendientes){
    console.log(pendiente)
}

for(let producto of carrito){
    console.log(`Nombre : ${producto.nombre} Precio: ${producto.precio} `)
}