const container = document.querySelector(`#container`);

document.querySelector(`#button-menu`).addEventListener(`click`, () => {
   container.classList.toggle(`active`);
});

const widths = () => {
    if(window.innerWidth <= 768){
        container.classList.remove(`active`);
     }else {
         container.classList.add(`active`);
     }
}

widths();

window.addEventListener(`resize`, () => {
   widths();
});