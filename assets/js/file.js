function randomNumber(min, max) {
    return (Math.random() * (max - min + 1) + min) + "%";
}

function numVaiNao() {
    var x = randomNumber(0, 90);
    var y = randomNumber(0, 90);
    var button = document.querySelector(".button.secondary");
    button.style.position = "absolute";
    button.style.left = x;
    button.style.top = y;
}

function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}