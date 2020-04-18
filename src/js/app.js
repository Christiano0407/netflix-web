const fila = document.querySelector(`.contenedor-carousel`);
const pelicula = document.querySelectorAll(`.pelicula`);

const flechaIzquierda = document.getElementById(`flecha-izq`);
const flechaDerecha = document.getElementById(`flecha-der`);

flechaDerecha.addEventListener(`click`, () => {
 fila.scrollLeft += fila.offsetWidth;
});
flechaIzquierda.addEventListener(`click`, () => {
    fila .scrollLeft -= fila.offsetWidth;
})

/* paginación */
const numeroPagina = Math.ceil(pelicula.length / 5);
for(let i = 0; i < numeroPagina; i++){
    const indicador = document.createElement(`button`);

     if (i === 0){
         indicador.classList.add(`activo`)
     }
    document.querySelector(`.indicadores`).appendChild(indicador);
    indicador.addEventListener(`click`, (e) => {
    fila.scrollLeft = i * fila.offsetWidth;
    /* multiplicamos el anocho * 2 */
    document.querySelector(`.indicadores .activo`).classList.remove(`activo`);
    e.target.classList.add(`activo`);
  /*   target=click que estamos dando */
    })
}