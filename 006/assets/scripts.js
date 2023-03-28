var container = document.querySelector('.box-container');
var button = document.querySelector('button');
var count = 10000;

for (var i = 0; i < count; i++) {
    var div = document.createElement('div');
    div.classList.add('box');

    div.innerHTML = '<div class="title-container">' +
        '<div class="title">Box ' + (i + 1) + '</div>' +
        '</div>';

    if (i === count - 1)
        div.classList.add('box--last');

    container.appendChild(div);
}

button.addEventListener('click', function() {

    var selectors = [
        "div.box:not(:empty):last-of-type .title",
        ".box--last > .title-container > .title",
        ".box:nth-last-child(-n+1) .title"
    ];

    selectors.forEach(function(s) {
        console.time(s);
        var d = document.querySelector(s);
        console.timeEnd(s);
        console.log(d);
    });

});