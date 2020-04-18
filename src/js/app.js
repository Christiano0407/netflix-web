const fila = document.querySelector(`.contenedor-carousel`);
const pelicula = document.querySelector(`.pelicula`);

const flechaIzquierda = document.getElementById(`flecha-izq`);
const flechaDerecha = document.getElementById(`flecha-der`);

flechaDerecha.addEventListener(`click`, () => {
 fila.scrollLeft += fila.offsetWidth;
});
flechaIzquierda.addEventListener(`click`, () => {
    fila .scrollLeft -= fila.offsetWidth;
})