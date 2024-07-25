const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se ejecute el metodo POST

    console.log(e)
})

// Se pueden validar los formularios deteniendo el envio post y get

// Scroll con el mouse
window.addEventListener('scroll', () => {
    const scroll = window.scrollY; // Lo retorna en pixeles
    console.log(scroll) 

    const punto = document.querySelector('.punto');

    // Obtiene la ubicacion completa: top, bottom, left, right
    const ubicacion = punto.getBoundingClientRect();

    console.log(ubicacion)

    if(ubicacion.top < 100 && ubicacion.bottom <500){
        console.log('El elemento es visible!')
    }
})

