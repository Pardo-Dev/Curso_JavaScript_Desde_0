
// Objeto constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = false;
};

const producto1 = new Producto("Monitor de 20 pulgadas", 500);
console.log(producto1)

// Muestra solo las llaves o keys de un objeto
console.log(Object.keys(producto1))

// Muestra solo los valores de un objeto
console.log(Object.values(producto1))

// Muestra keys y values en una matriz que se puede iterar
console.log(Object.entries(producto1))