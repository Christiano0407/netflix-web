const $hideButton = document.getElementById(`hide-modal`);
const $errorButton = document.getElementById(`error-modal`);
const $modal = document.getElementById(`modal`);
const $overlay = document.getElementById(`overlay`);

/* eventos */
$hideButton.addEventListener (`click`, (event) => {
    $modal.style.animation = `modalOut .8s forwards`;
    $overlay.classList.remove(`active`)
});

$errorButton.addEventListener(`click`, (event) => {
    $modal.style.animation = `modalIn .8s forward`;
    $overlay.classList.add(`active`);
})