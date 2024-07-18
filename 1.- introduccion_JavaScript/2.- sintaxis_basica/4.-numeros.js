
/* Números */

let edad = 21; // number
console.log(typeof edad)

let precio = 7.99; // number
console.log(typeof precio)

// Operaciones
let num = 4;
let num2= 3;

// Suma
let resultado = num + num2;

// Resta
resultado = num - num2;

// Mutiplicacion
resultado = num * num2;

// Division
resultado = num / num2;

// Exponenciacion 
resultado = num ** num2;

// Modulo
resultado = num % num2;

// Math
console.log(Math.round(2.5)) // Redondea
console.log(Math.ceil(2.1)) // Redondea hacia arriba
console.log(Math.floor(2.9)) // Redondea hacia abajo
console.log(Math.sqrt(144)) // Raiz cuadrada
console.log(Math.pow(2, 4)) // Potencia
console.log(Math.min(5, 4, 8, 7)) // Numero más bajo
console.log(Math.max(5, 4, 8, 7)) // Numero más alto
console.log(Math.random()) // Numero aleatorios

// Incrementos y Decrementos
let puntaje = 78;
puntaje++; // Aumenta uno despues
++puntaje; // Aumenta uno antes

puntaje--; // Resta uno despues
--puntaje; // resta uno antes

puntaje+= 1; // Aumenta cierta cantidad
puntaje-=1; // resta cierta cantidad

// Conversion de strings a numeros
const numero1 = "78.9";
console.log(Number.parseFloat(numero1))

const numero2 = "20";
console.log(Number.parseInt(numero2))

const numero3 = 20.5;
console.log(Number.parseInt(numero3))

// Revisar si un numero es entero o no
console.log(Number.isInteger(numero1)) // true
console.log(Number.isFinite(numero3)) // false