const colorSlider = document.getElementById("color-slider");
const image = document.getElementById("image");
//
// colorSlider.addEventListener('change', () => {
// });


/*
function changeColor() {
    image.style.filter = `hue-rotate(${colorSlider.value}deg)`;
    requestAnimationFrame(changeColor);
}

requestAnimationFrame(changeColor);
*/

setInterval(() => {
    image.style.filter = `hue-rotate(${colorSlider.value}deg)`;
}, 1)