
/* Funciones Arrow : Funciones de flecha */

// En las funciones de flecha no se pueden usar la palabra reservada this

const nombreCompleto = (nombreCompleto) => {
    let fullNameArray = nombreCompleto.split(' ');
    firstName = fullNameArray[0];
    lastName = fullNameArray[1];
    console.log(`Primer nombre: ${firstName} Apellido Paterno: ${lastName}`);
}

nombreCompleto('Carlos Pardo');