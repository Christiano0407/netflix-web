const slider = document.querySelectorAll(`.slide`);
const next = document.querySelector(`#next`);
const prev = document.querySelector(`#prev`);
const intervalTime = 5000;
let SlideInterval;

/* funciones */

const nextSlide = () =>  {
    const current = document.querySelector(`.current`);

    current.classList.remove(`current`);

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add(`current`)
    }else {
        slides[0].classList.add(`current`)
    }
    setTimeout(() => current.classList.remove(`current`));
};

const prevSlide = () => {
  const current = document.querySelector(`.current`)

  current.classList.remove(`current`);

  if(current.previousElementSibling){
      current.previousElementSibling.classList.add(`current`);

  }else {
      current.previousElementSibling.classList.add(`current`);
  }
  setTimeout(() => current.classList.remove(`current`));
}

/* 
EVENTS/CLICK */
next.addEventListener(`click`, e => {
    nextSlide();
    if(auto){
        clearInterval(SlideInterval);
        SlideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener(`click`, e => {
    prevSlide();
    if(auto) {
        clearInterval(SlideInterval);
        SlideInterval = SlideInterval(nextSlide, intervalTime);
    }

});

/* auto-slide */
if(auto){
    SlideInterval = setInterval(nextSlide, intervalTime);
}