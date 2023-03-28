let c = 0;

document.addEventListener('click', function () {

    if (c === 0) {
        document.body.style.width = '50%';
    } else if (c === 1) {
        document.querySelector('#d1').style.width = '50%';
    } else if (c === 2) {
        document.querySelector('#d2').style.width = '50%';
    }
    c++;
    c %= 3;

})