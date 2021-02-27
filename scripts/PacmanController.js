class PacmanController {
    constructor(_model, _container) {
        this.model = _model;
        this.container =_container

        window.addEventListener("hashchange", this.updateState);

        this.updateState(); 

        this.menuKeys();
        
        requestAnimationFrame(this.bindGameKeys.bind(this));
    }

    bindGameKeys() {
        if (this.container.querySelector("#pacman")) {
            document.addEventListener("keydown", (event) => {
                switch (event.key) {
                    case "ArrowLeft":
                        this.model.setMouthRotate(false);
                        this.model.getSpaceToRun(false);
                        this.model.getDirection(-1);
                        break;
                    case "ArrowRight":
                        this.model.setMouthRotate(false);
                        this.model.getSpaceToRun(false);
                        this.model.getDirection(1);
                        break;
                    case "ArrowUp":
                        this.model.setMouthRotate(false);
                        this.model.getSpaceToRun(false);
                        this.model.getDirection(-2);
                        break;
                    case "ArrowDown":
                        this.model.setMouthRotate(false);
                        this.model.getSpaceToRun(false);
                        this.model.getDirection(2);
                    default:
                        break;
                    }
            });
    
            document.addEventListener("keyup", (event) => {
                switch (event.key) {
                    case "ArrowLeft":
                        this.model.getSpaceToRun(true);
                        this.model.setMouthRotate(true);
                        this.model.setMouthDirection();
                        break;
                    case "ArrowRight":
                        this.model.getSpaceToRun(true);
                        this.model.setMouthRotate(true);
                        this.model.setMouthDirection();
                        break;
                    case "ArrowUp":
                        this.model.getSpaceToRun(true);
                        this.model.setMouthRotate(true);
                        this.model.setMouthDirection();
                        break;
                    case "ArrowDown":
                        this.model.getSpaceToRun(true);
                        this.model.setMouthRotate(true);
                        this.model.setMouthDirection();
                    default:
                        break;
                    }
            });
        }

        requestAnimationFrame(this.bindGameKeys.bind(this));
    }

    updateState = () => {
        this.model.updateState();
    }

    menuKeys() {
        this.container.addEventListener("click", (event) => {
            let target = event.target;

            switch (target) {
                case this.container.querySelector("#start-game"):
                    event.preventDefault();
                    window.location.hash = "game";
                    
                    this.model.randomMap(0, 2);

                    setTimeout(() => this.model.setGame(), 0);
                    break;
                case this.container.querySelector("#set-record"):
                    event.preventDefault();
                    let name = this.container.querySelector("#name-input").value;

                    if (name) {
                        window.location.hash = "menu";
                        this.model.saveScore(name);
                    }
                    break;
                case this.container.querySelector("#about"):
                    event.preventDefault();

                    window.location.hash = "about";
                    break;
                case this.container.querySelector("#records"):
                    event.preventDefault();
                    
                    window.location.hash = "records";
                    break;
                case this.container.querySelector("#back"):
                    event.preventDefault();
                    window.location.hash = "menu";
                    break;
                default:
                    break;
                }
        });
    }
}