
/* Arrays */

let lista = [1,2,3,4,5];
console.log(lista)

let meses = new Array('Marzo', 'Abril', 'Mayo', 'Junio', 'Julio');
console.log(meses)

// Acceder a los arreglos
console.log(meses[0]); // Entrega el primer elemento
console.log(meses[2]); // Entrega elemento segun indice
console.log(meses[20]); // NO existe, retorna undefined
console.log(meses[4][0]); // [posicion][caracteres]

// Recorrer arrays
for(let i = 0; i < meses.length; i++){
    console.log(meses[i])
};

// Métodos
meses.push('Agosto'); // Agrega al final de un arreglo
console.log(meses)

meses.unshift('Febrero'); // Agrega al inicio de un arreglo
console.log(meses)

// Spread operator: Copiar contenido de variables y añadir más valores
meses = [...meses, 'Septiembre']
console.log('Enero', ...meses)

// Borrar elementos de un array
meses.pop() // Elimina el ultimo elemento
console.log(meses)

meses.shift() // Elimina el primer elemento
console.log(meses)

// Eliminar elementos con splice
meses.splice(0,4) // (indice, cantidad elementos)
console.log(meses)

// Desestructuracion de arrays con spread operator
let { ...resto } = meses;
console.log(resto)

// Recorrer una matriz
for(let key in resto){
    console.log(resto[key])
}

// forEach: Recorre todo y puedes anidar una funcion
meses.forEach( () => {
    console.log(meses)
})

// Métodod map: Puedes guardar el arreglo en una variable a diferencia de forEach
let arrayMeses = meses.map((m) => {
    return "Meses: " + m
})
console.log(arrayMeses)