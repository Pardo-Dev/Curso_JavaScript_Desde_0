
/* Funciones */
// Las funciones se pueden anidar y llamar dentro de una funcion a otra

// Declaracion de funciones: Puede usarse la funcion lineas antes de declararla
function sumar(x,y){
    return console.log(x + y);
}
sumar(5,2)

// Expresion de funciones: Esta obligado a usarse despues de declararse
const multiplicacion = function(x,y){
    return console.log(x*y)
}
multiplicacion(7,3)

// Parametros por default
function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar()

// Arrow functions: La funcion se debe usar despues de crearse no antes
const despedir = () => {
    console.log("Adios, hasta la proxima!")
}

despedir()