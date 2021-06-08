// let colour = getElementById(colour);

// document.getElementById(colour).onclick = function background() {
//     document.body.style.backgroundColor = colour;
// }

document.getElementById('red').onclick = function redBackground() {
        document.body.style.backgroundColor = 'red';
}

document.getElementById('green').onclick = function greenBackground() {
    document.body.style.backgroundColor = 'green';
}

document.getElementById('blue').onclick = function blueBackground() {
    document.body.style.backgroundColor = 'blue';
}



document.getElementById('random').onclick = function randomBackground() {
    document.body.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
};