const box1 = document.querySelectorAll('.box1');

let speed = 2;

function moveSquare(box) {

        let left = box.style.left || '0';
        left = left.split('px').join('');
        left = parseInt(left);
        if (left < 0) {
            box.classList.remove('back');
        } else if (left > 600) {
            box.classList.add('back');
        }
        if (box.classList.contains('back')) {
            left -= speed;
        } else {
            left += speed;
        }
        box.style.left = left + "px";

}

box1.forEach(box => {
    setInterval(() => {moveSquare(box)}, 10);
});
