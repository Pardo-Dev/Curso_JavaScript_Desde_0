
/* Funciones con validaciones */

const puntaje = 350;

const revisarPuntaje = () => {
    if(puntaje > 400){
        console.log('Excelente!')
        return;
    }

    if (puntaje > 300){
        console.log('Buen puntaje!')
        return;
    }
}

revisarPuntaje()