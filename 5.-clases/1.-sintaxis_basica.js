
/** 
 * Programación orientada a objetos con JavaScript! 
 * Una clase es el molde de un objeto
 * que puede tener atributos
 * tambien puede tener funciones
 * Puede tener metodos que hagan calculos
 * Pueden tener datos privados y publicos
 * Las clases pueden heredar de otras
*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Creacion de un objetop
const p1 = new Persona('Alvaro', 31);

console.log(p1);
console.log(p1.saludar());

class Estudiante extends Persona{
    constructor(nombre, edad, grado) {
        super(nombre, edad)
        this.grado = grado
    }

    Estudiar(){
        console.log(`${this.nombre} está estudiando en el grado ${this.grado}.`);
    }
}

const e1 = new Estudiante('Ana', 22, 'Ingeniería');
e1.saludar();
e1.Estudiar();