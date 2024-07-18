
/* Productos en objetos */

let producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true,
    mostrarInfo : function() {
        console.log(`El producto: ${ this.nombre } tiene un precio de: ${ this.precio }`)
    }
}

producto.mostrarInfo();