
/* Funciones en objetos */

const reproductor = {
    reproducir : (id) => {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar : () => {
        console.log(`Pausando...`)
    } ,
    borrar : (id) => {
        console.log(`Cancion con id ${id} eliminada`)
    }
}

reproductor.reproducir(1)
reproductor.pausar()
reproductor.borrar(1)