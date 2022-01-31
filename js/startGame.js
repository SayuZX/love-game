function startGame() {
    var level = document.getElementById("level").value;
    if (level === "") {
        alert("Select a level to start the game");
        return false;
    }

    window.location.href = "game.html?" + level;
}