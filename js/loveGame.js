var height = 0;
var width = 0;
var lifes = 1;
var time = 15;
var createMosquito = 1500;
var level = window.location.search;
level = level.replace("?","");

if (level === "normal") {
} else if (level === "hard"){
    var createMosquito = 1000;
} else if (level === "chucknorris"){
    var createMosquito = 750;
}

console.log(level, createMosquito)


function adjustGameSize() {
    height = window.innerHeight;
    width = window.innerWidth;
}

adjustGameSize();

var timer = setInterval(function(){
    time -= 1;
    if (time < 0) {
        clearInterval(timer);
        clearInterval(createMosquito);
        window.location.href = "win.html"
    } else {
        document.getElementById("timer").innerHTML = time;
    }
}, 1000);

function randomPosition() {

    //remover o mosquito anterior caso exista
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove();

        if (lifes > 3) {
            window.location.href = "game_over.html"
        } else {
            document.getElementById("l" + lifes).src="../public/imgs/coracao_vazio.png";
            lifes++;
        }
    }

    var xPosition = Math.floor(Math.random() * width) - 90;
    var yPosition = Math.floor(Math.random() * height) - 90;

    xPosition = xPosition < 0 ? 0 : xPosition;
    yPosition = yPosition < 0 ? 0 : yPosition;

    //console.log(width, height);
    //console.log(xPosition, yPosition);

    //Criando elemento html de forma dinâmica
    var mosquito = document.createElement("img");
    if(time%7 === 0) {
        mosquito.src = "../public/imgs/mosca.png";
    } else {
        mosquito.src = "../public/imgs/coracao_cheio.png";
    }
    mosquito.className = randomSize() + " " + randomSide();
    mosquito.style.left = xPosition + "px";
    mosquito.style.top = yPosition + "px";
    mosquito.style.zIndex = 10;
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";
    mosquito.onclick = function() {
        this.remove();
    };

    document.body.appendChild(mosquito);

}

function randomSize() {
    var size = Math.floor(Math.random() * 3);

    switch (size) {
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}

function randomSide() {
    var size = Math.floor(Math.random() * 2);

    switch (size) {
        case 0:
            return "aSide";
        case 1:
            return "bSide";
    }
}