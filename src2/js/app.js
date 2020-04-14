const $cuadrado = document.getElementById(`cuadrado`);
$cuadrado.addEventListener("animationend", (event) => {
/*  console.log(event.animationName); */
 if(event.animationName === "rebote"){
     $cuadrado.style.animationName = "escalera";
     $cuadrado.style.animationName = `3s`;
}});