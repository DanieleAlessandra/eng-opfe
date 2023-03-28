const container = document.querySelector('.box-container');
const button = document.querySelector('button');

for (let i = 0; i < 3000; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.index = i;
    container.appendChild(div);
}

let on = false;
function styleSwapper() {
    const start = window.performance.now();
    on = !on;
    const boxes = container.querySelectorAll('.box');
    const boxesLength = boxes.length;
    for (let i = 0; i < boxesLength; i+=2) {
        boxes[i].classList.toggle('on', on);
    }
    // DO NOT REMOVE THIS LINE (or the test will automatically pass)
    // it forces the browser to wait until the recalc event ends before finishing the function
    window.getComputedStyle(document.querySelector('div')).backgroundColor;
    console.log(window.performance.now() - start);
}

button.addEventListener('click', styleSwapper);