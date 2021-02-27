
function gameInit(container) {
    let pacmanView = new PacmanView(container);
    let pacmanModel = new PacmanModel(pacmanView);
    let pacmanController = new PacmanController(pacmanModel, container);
}

document.addEventListener("DOMContentLoaded", gameInit(document.querySelector("#app")));