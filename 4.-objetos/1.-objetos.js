
/* Objetos */

// Esto es un objeto literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};
console.log(producto);

// Acceder a valores
console.log(producto.nombre);
console.log(producto['nombre']);

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades de un objeto
delete producto.imagen;
console.log(producto);

// Desestructuración
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Objetos dentro de objetos
const producto2 = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    info : {
        medidas : {
            peso : '1kg',
            medida : '1m'
        },
        fabricacion : {
            pais : 'china'
        }
    }
};

console.log(producto2)

// Acceder a una propiedad del objeto
console.log(producto2.info.medidas.peso)
console.log(producto2['info']['fabricacion']['pais'])

// Desctruturacion de objetos anidados
const {name, info: {fabricacion : { pais } }} = producto2;
console.log(pais)

