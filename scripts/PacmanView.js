class PacmanView {
    GameMenu = {
        title: "Pacman-menu",
        render: () => {
            return `
            <div class="menu">
                <button class="menu__button" id="start-game">Играть<span class="menu__button_mask menu__button_rotates rotates-clockwise graident"></span></button>
                <button class="menu__button" id="about">Об игре<span class="menu__button_mask menu__button_rotates rotates-clockwise graident"></span></button>
                <button class="menu__button" id="records">Рекорды<span class="menu__button_mask menu__button_rotates rotates-clockwise graident"></span></button>
            </div>
            `;
        }
    };

    Game = {
        title: "Pacman-game",
        render: () => {
            return `<canvas id="pacman" width="690px" height="852px"></canvas>`;
        }
    };

    AboutPage = {
        title: "About",
        render: () => {
            return `
            <div class="about">
                <div class="three">
                    <h1>Правила игры</h1>
                </div>

                <div class="rules">
                    <p>
                        Экран игры занимает собой лабиринт, коридоры которого заполнены точками. Задача игрока — управляя Пакманом, 
                        съесть все точки в лабиринте, избегая встречи с привидениями, которые гоняются за героем. В начале каждого уровня 
                        призраки находятся в недоступной Пакману прямоугольной комнате в середине уровня, из которой они со временем освобождаются. 
                        Если привидение дотронется до Пакмана, то его жизнь теряется, призраки и Пакман возвращаются на исходную позицию, но при 
                        этом прогресс собранных точек сохраняется. Если при столкновении с призраком у Пакмана не осталось дополнительных жизней, 
                        то игра заканчивается. После съедения всех точек начинается новый уровень в том же лабиринте. По бокам лабиринта находятся 
                        входы в туннели, при вхождении в которые Пакман и призраки выходят с другой стороны лабиринта.
                    </p>

                    <p>
                        Управление происходит с помощью стрелок клавиатуры, чтобы Пакман начал движение достаточно нажать один раз на нужную стрелку.
                    </p>
                    
                    <p>
                        P.S. Глупый кодер сделал механику для поворотов такой: нужно перед тем как повернуть зажать стрелку куда нужно повернуть и после поворота отжать.
                    </p>
                </div>

                <button class="menu__button" id="back">Назад<span class="menu__button_mask menu__button_rotates rotates-clockwise graident"></span></button>
            </div>
            `;
        }
    }

    RecordsPage = {
        title: "Records",
        render: () => {
            return `
            <div class="records-page" id="records-page">
                <div class="three">
                    <h1>ТОП 10</h1>
                </div>
                <div id="table">
                    <div class="sk-wave" id="loader">
                        <div class="sk-rect sk-rect-1"></div>
                        <div class="sk-rect sk-rect-2"></div>
                        <div class="sk-rect sk-rect-3"></div>
                        <div class="sk-rect sk-rect-4"></div>
                        <div class="sk-rect sk-rect-5"></div>
                    </div>
                </div>
                <button class="menu__button" id="back">Назад<span class="menu__button_mask menu__button_rotates rotates-clockwise graident"></span></button>
            </div>`
        }
    }

    EndGame = {
        title: "end-game",
        render: () => {
            return `
            <div class="record-name">
                <div class="three">
                    <h1>GAME OVER</h1>
                </div>
                    <h2 style="color: #f69a73;">Ваш счёт: ${this.scorePoint}</h2>
                <form class="decor">
                    <div class="form-left-decoration"></div>
                    <div class="circle"></div>
                    <div class="form-inner">
                        <h3>Ваше имя</h3>
                        <input type="text" placeholder="Username" id="name-input" required>
                        <button type="submit" id="set-record">Отправить</button>
                    </div>
                </form>
            </div>`;
        } 
    }

    router = {
        menu: this.GameMenu,
        game: this.Game,
        about: this.AboutPage,
        end: this.EndGame,
        records: this.RecordsPage
    };

    constructor(field) {
        this.container = field;

        this.settings = null;
        this.pacmanSettings = null;
        this.ghostSettings = null;

        this.walls = null;

        this.pills = null;
        this.bonusPills = null;

        this.scorePoint = null;

        this.lvl = null;

        this.lives = null;

        this.time = null;

        this.map = null;

        this.startAngle = null;
        this.endAngle = null;

        this.recordsArr = [];

        this.table = `<table>`;
    }

    getRecords(records) {
        this.recordsArr = records;

        this.createTable();

        this.recordsArr = [];
    }

    createTable() {
        let th = `<tr><th>Рейтинг</th><th>Имя</th><th>Очки</th></tr>`;
        this.table += th;

        for (let i = 0; i < this.recordsArr.length; i++) {
            if (i === 10) break;

            this.table += `<tr><td>${i + 1}</td><td>${this.recordsArr[i].name}</td><td>${this.recordsArr[i].score}</td></tr>`;
        }

        this.table += `</table>`;

        document.querySelector("#table").innerHTML = this.table;

        this.table = `<table>`;
        // setTimeout(() => this.table = `<table>`, 0);
    }

    renderContent(hashPageName) {
        let routeName = "menu";

        if (hashPageName.length > 0) {
            routeName = hashPageName in this.router ? hashPageName : "error";
        }

        window.document.title = this.router[routeName].title;
        this.container.innerHTML = this.router[routeName].render();
    }

    getMap(map) {
        this.map = map;
    }

    getSettings(pacman, _settings, ghost) {
        this.settings = _settings;
        this.pacmanSettings = pacman;
        this.ghostSettings = ghost;

        if (document.querySelector("#pacman")) {
            if (this.map === 1 || this.map === 2) {
                document.querySelector("#pacman").setAttribute("width", "710px");
            } else {
                document.querySelector("#pacman").setAttribute("width", "690px");
            }
            
            this.settings.canvas = document.querySelector("#pacman");
            this.settings.ctx = this.settings.canvas.getContext('2d');

            this.settings.bufferCanvas = document.createElement("canvas");
            this.settings.bufferCtx = this.settings.bufferCanvas.getContext("2d");
            this.settings.bufferCtx.canvas.width = this.settings.ctx.canvas.width;
            this.settings.bufferCtx.canvas.height = this.settings.ctx.canvas.height;
        }
    }

    createGame() {
        requestAnimationFrame(this.anim.bind(this));
    }

    createField() {
        this.settings.bufferCtx.fillStyle = "black";
        this.settings.bufferCtx.fillRect(0, 0, this.settings.bufferCanvas.width, this.settings.bufferCanvas.height);
        this.settings.bufferCtx.strokeRect(0, 0, this.settings.bufferCanvas.width, this.settings.bufferCanvas.height);  
    }

    getWalls(walls, redWall) {
        this.walls = walls;
        this.redWall = redWall;
    }

    getPills(pills, bonusPills) {
        this.pills = pills;
        this.bonusPills = bonusPills;
    }

    getScore(score) {
        this.scorePoint = score;
    }
    
    getLvl(level) {
        this.lvl = level;
    }

    getLives(lives) {
        this.lives = lives;
    }

    getTime(time) {
        this.time = time;
    }

    getMouthAngle(start, end) {
        this.startAngle = start;
        this.endAngle = end;
    }

    createGhost() {
        for (let i = 0; i < this.ghostSettings.length; i++) {
        this.settings.bufferCtx.beginPath();
        this.settings.bufferCtx.strokeStyle="black";
        this.settings.bufferCtx.lineWidth="1";
        this.settings.bufferCtx.fillStyle= this.ghostSettings[i].color;
        this.settings.bufferCtx.beginPath();
        this.settings.bufferCtx.moveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.quadraticCurveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 19, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2 - 90, this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 40, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.moveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);// now the bottom part
        this.settings.bufferCtx.quadraticCurveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 3, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2 + 4, this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 10, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.moveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 10, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.quadraticCurveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 12, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2 - 2, this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 20, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.moveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 20, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.quadraticCurveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 22, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2 + 4, this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 30, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.moveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 30, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.quadraticCurveTo(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 35, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2 - 2, this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 40, this.ghostSettings[i].y + this.ghostSettings[i].height/1.2);
        this.settings.bufferCtx.strokeStyle = 'black';
        this.settings.bufferCtx.stroke();
        this.settings.bufferCtx.fill();
        this.settings.bufferCtx.closePath();
        this.settings.bufferCtx.fillStyle = "black"; 
        this.settings.bufferCtx.beginPath();
        this.settings.bufferCtx.arc(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 14, this.ghostSettings[i].y + this.ghostSettings[i].height/2 - 10, 2, 0, Math.PI * 8, true);
        this.settings.bufferCtx.strokeStyle = 'black';
        this.settings.bufferCtx.stroke();
        this.settings.bufferCtx.fill();
        this.settings.bufferCtx.beginPath();
        this.settings.bufferCtx.arc(this.ghostSettings[i].x + this.ghostSettings[i].width/5 + 25, this.ghostSettings[i].y + this.ghostSettings[i].height/2 - 10, 2, 0, Math.PI * 8, true);
        this.settings.bufferCtx.strokeStyle = 'black';
        this.settings.bufferCtx.stroke();
        this.settings.bufferCtx.fill();
        }
    }

    createPacman() {
        this.settings.bufferCtx.fillStyle = "yellow";

        this.settings.bufferCtx.beginPath();
        this.settings.bufferCtx.arc(this.pacmanSettings.x + this.pacmanSettings.width/2, this.pacmanSettings.y + this.pacmanSettings.height/2, this.pacmanSettings.width/2 - 5, 0, 2*Math.PI);
        this.settings.bufferCtx.fill();

        this.settings.bufferCtx.fillStyle = "black";

        this.settings.bufferCtx.beginPath();
        this.settings.bufferCtx.moveTo(this.pacmanSettings.x + this.pacmanSettings.width/2, this.pacmanSettings.y + this.pacmanSettings.height/2);
        this.settings.bufferCtx.arc(this.pacmanSettings.x + this.pacmanSettings.width/2, this.pacmanSettings.y + this.pacmanSettings.height/2, this.pacmanSettings.width/2 - 5, this.startAngle*Math.PI, this.endAngle*Math.PI);
        this.settings.bufferCtx.lineTo(this.pacmanSettings.x + this.pacmanSettings.width/2, this.pacmanSettings.y + this.pacmanSettings.height/2);
        this.settings.bufferCtx.fill();
        this.settings.bufferCtx.stroke();  
    }

    createWalls() {
        if (this.map === 1) {
            this.settings.bufferCtx.fillStyle = "orange"; 
        } else if (this.map === 2) {
            this.settings.bufferCtx.fillStyle = "green"; 
        } else {
            this.settings.bufferCtx.fillStyle = "blue";
        }

        for (let i = 0; i < this.walls.length; i++) {
            this.settings.bufferCtx.fillRect(this.walls[i].x, this.walls[i].y, this.walls[i].width, this.walls[i].height); 
        }

        this.settings.bufferCtx.fillStyle = "red";
        this.settings.bufferCtx.fillRect(this.redWall.x, this.redWall.y, this.redWall.width, this.redWall.height); 
    }

    createPills() {
        for (let i = 0; i < this.pills.length; i++) {
            this.settings.bufferCtx.fillStyle = this.pills[i].color;
            this.settings.bufferCtx.beginPath();
            this.settings.bufferCtx.arc(this.pills[i].x + this.pills[i].width/2, this.pills[i].y + this.pills[i].height/2, this.pills[i].width/2 , 0, 2*Math.PI); 
            this.settings.bufferCtx.fill();
        }
    }

    createBonusPills() {
        for (let i = 0; i < this.bonusPills.length; i++) {
            this.settings.bufferCtx.fillStyle = this.bonusPills[i].color;
            this.settings.bufferCtx.beginPath();
            this.settings.bufferCtx.arc(this.bonusPills[i].x + this.bonusPills[i].width/2, this.bonusPills[i].y + this.bonusPills[i].height/2, this.bonusPills[i].r, 0, 2*Math.PI); 
            this.settings.bufferCtx.fill();
        }
    }

    score() {
        let theString = `SCORE: ${this.scorePoint}`;

        this.settings.bufferCtx.font = '30px Arial';
        this.settings.bufferCtx.fillStyle = 'yellow';
        this.settings.bufferCtx.fillText(theString, 20, 820);
    }

    level() {
        let theString = `Level: ${this.lvl}`;

        this.settings.bufferCtx.font = '30px Arial';
        this.settings.bufferCtx.fillStyle = 'yellow';
        this.settings.bufferCtx.fillText(theString, 520, 820);
    }

    livesDraw() {
        let x = 350;
        for (let i = 0; i < this.lives; i++) {
            this.settings.bufferCtx.fillStyle = "yellow";

            this.settings.bufferCtx.beginPath();
            this.settings.bufferCtx.arc(x, 810, 10, 0, 2*Math.PI);
            this.settings.bufferCtx.fill();

            this.settings.bufferCtx.fillStyle = "black";

            this.settings.bufferCtx.beginPath();
            this.settings.bufferCtx.moveTo(x, 810);
            this.settings.bufferCtx.arc(x, 810, 10, -0.2*Math.PI, 0.2*Math.PI);
            this.settings.bufferCtx.lineTo(x, 810);
            this.settings.bufferCtx.fill();
            this.settings.bufferCtx.stroke();  

            x += 40;
        }
    }
    
    timer() {
        let theString = `Starting in ${this.time}`;

        this.settings.bufferCtx.font = '50px Arial';
        this.settings.bufferCtx.fillStyle = 'yellow';
        this.settings.bufferCtx.fillText(theString, 220, 820);
    }

    anim () {
        if (this.time) {
            this.createField();
            this.createWalls(this.walls);
            this.createPills(); 
            this.createBonusPills();
            this.timer();
        } else {
            this.createField();

            this.createWalls(this.walls);

            this.createPills();
            this.createBonusPills();
            this.createPacman();

            this.createGhost();
            this.score();
            this.level();
            this.livesDraw();
        }

        this.settings.ctx.drawImage(this.settings.bufferCanvas, 0, 0, this.settings.canvas.width, this.settings.canvas.height);
        
        requestAnimationFrame(this.anim.bind(this));
    }
}