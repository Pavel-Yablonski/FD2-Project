class PacmanModel {
    constructor(_view) {
        this.view = _view;

        window.location.hash = "menu";

        this.walls = null;          // map settings
        this.redWall = null;

        this.pills = null;
        this.bonusPills = null;

        this.countPills = null;

        this.scorePoint = 0;

        this.lvl = 1;

        this.lives = 3;

        this.time = 4;

        this.map = null;

        // first-map ------------------------
        this.wallsFirst = [
            {x: 10, y: 10, width: 670, height: 10}, // top top

            {x: 670, y: 10, width: 10, height: 270}, // top right
            {x: 550, y: 270, width: 130, height: 10},
            {x: 550, y: 270, width: 10, height: 80},
            {x: 550, y: 340, width: 170, height: 10},

            {x: 10, y: 10, width: 10, height: 270}, // top left
            {x: 10, y: 270, width: 130, height: 10},
            {x: 130, y: 270, width: 10, height: 80},
            {x: -50, y: 340, width: 180, height: 10},

            {x: 80, y: 80, width: 60, height: 60}, // top left small rect
            
            {x: 80, y: 200, width: 60, height: 10},

            {x: 200, y: 80, width: 80, height: 60}, // top left big rect
            
            {x: 340, y: 10, width: 10, height: 130},

            {x: 550, y: 80, width: 60, height: 60}, // top right small rect

            {x: 550, y: 200, width: 60, height: 10},
            
            {x: 410, y: 80, width: 80, height: 60}, // top right big rect

            {x: 200, y: 200, width: 10, height: 150},
            {x: 200, y: 270, width: 70, height: 10},

            {x: 480, y: 200, width: 10, height: 150},
            {x: 400, y: 270, width: 80, height: 10},

            {x: 270, y: 200, width: 150, height: 10},

            {x: 330, y: 200, width: 10, height: 80},

            {x: -50, y: 410, width: 180, height: 10}, // bot left
            {x: 130, y: 410, width: 10, height: 80},
            {x: 10, y: 480, width: 120, height: 10},
            {x: 10, y: 480, width: 10, height: 290},

            {x: 10, y: 760, width: 670, height: 10}, // bot bot

            {x: 670, y: 480, width: 10, height: 290}, // bot right
            {x: 550, y: 480, width: 130, height: 10},
            {x: 550, y: 410, width: 10, height: 80},
            {x: 550, y: 410, width: 170, height: 10},

            {x: 270, y: 340, width: 10, height: 80}, // mid
            {x: 270, y: 410, width: 150, height: 10},
            {x: 410, y: 340, width: 10, height: 80},

            {x: 200, y: 410, width: 10, height: 80},

            {x: 480, y: 410, width: 10, height: 80},

            {x: 270, y: 480, width: 150, height: 10}, //spawn
            {x: 340, y: 490, width: 10, height: 70},

            {x: 200, y: 550, width: 80, height: 10},
            {x: 410, y: 550, width: 80, height: 10},

            {x: 270, y: 620, width: 150, height: 10}, 
            {x: 340, y: 630, width: 10, height: 70},

            {x: 130, y: 550, width: 10, height: 80},
            {x: 80, y: 550, width: 50, height: 10},

            {x: 10, y: 620, width: 60, height: 10},

            {x: 80, y: 690, width: 200, height: 10},
            {x: 200, y: 620, width: 10, height: 70},

            {x: 550, y: 550, width: 10, height: 80},
            {x: 560, y: 550, width: 50, height: 10},

            {x: 620, y: 620, width: 60, height: 10},

            {x: 410, y: 690, width: 200, height: 10},
            {x: 480, y: 620, width: 10, height: 70},
        ];

        this.redWallFirst = {x: 280, y: 340, width: 130, height: 10};

        this.pillsFirst = [
            {x: 275, y: 445, width: 10, height: 10, color: "white"},
            {x: 235, y: 445, width: 10, height: 10, color: "white"},
            {x: 235, y: 480, width: 10, height: 10, color: "white"},
            {x: 235, y: 515, width: 10, height: 10, color: "white"},
            {x: 270, y: 515, width: 10, height: 10, color: "white"},
            {x: 305, y: 515, width: 10, height: 10, color: "white"},
            {x: 200, y: 515, width: 10, height: 10, color: "white"},
            {x: 165, y: 515, width: 10, height: 10, color: "white"},
            {x: 125, y: 515, width: 10, height: 10, color: "white"},
            {x: 85, y: 515, width: 10, height: 10, color: "white"},
            {x: 45, y: 515, width: 10, height: 10, color: "white"},
            {x: 45, y: 550, width: 10, height: 10, color: "white"},
            {x: 95, y: 585, width: 10, height: 10, color: "white"},
            {x: 95, y: 620, width: 10, height: 10, color: "white"},
            {x: 95, y: 655, width: 10, height: 10, color: "white"},
            {x: 45, y: 655, width: 10, height: 10, color: "white"},
            {x: 45, y: 690, width: 10, height: 10, color: "white"},
            {x: 45, y: 725, width: 10, height: 10, color: "white"},
            {x: 95, y: 725, width: 10, height: 10, color: "white"},
            {x: 145, y: 725, width: 10, height: 10, color: "white"},
            {x: 195, y: 725, width: 10, height: 10, color: "white"},
            {x: 245, y: 725, width: 10, height: 10, color: "white"},
            {x: 305, y: 725, width: 10, height: 10, color: "white"},
            {x: 340, y: 725, width: 10, height: 10, color: "white"},
            {x: 375, y: 725, width: 10, height: 10, color: "white"},
            {x: 415, y: 725, width: 10, height: 10, color: "white"},
            {x: 455, y: 725, width: 10, height: 10, color: "white"},
            {x: 495, y: 725, width: 10, height: 10, color: "white"},
            {x: 545, y: 725, width: 10, height: 10, color: "white"},
            {x: 595, y: 725, width: 10, height: 10, color: "white"},
            {x: 635, y: 725, width: 10, height: 10, color: "white"},
            {x: 635, y: 690, width: 10, height: 10, color: "white"},
            {x: 635, y: 655, width: 10, height: 10, color: "white"},
            {x: 585, y: 655, width: 10, height: 10, color: "white"},
            {x: 550, y: 655, width: 10, height: 10, color: "white"},
            {x: 515, y: 655, width: 10, height: 10, color: "white"},
            {x: 585, y: 620, width: 10, height: 10, color: "white"},
            {x: 585, y: 585, width: 10, height: 10, color: "white"},
            {x: 635, y: 550, width: 10, height: 10, color: "white"},
            {x: 635, y: 515, width: 10, height: 10, color: "white"},
            {x: 585, y: 515, width: 10, height: 10, color: "white"},
            {x: 550, y: 515, width: 10, height: 10, color: "white"},
            {x: 515, y: 515, width: 10, height: 10, color: "white"},
            {x: 480, y: 515, width: 10, height: 10, color: "white"},
            {x: 445, y: 515, width: 10, height: 10, color: "white"},
            {x: 410, y: 515, width: 10, height: 10, color: "white"},
            {x: 375, y: 515, width: 10, height: 10, color: "white"},
            {x: 375, y: 550, width: 10, height: 10, color: "white"},
            {x: 375, y: 585, width: 10, height: 10, color: "white"},
            {x: 340, y: 585, width: 10, height: 10, color: "white"},
            {x: 305, y: 585, width: 10, height: 10, color: "white"},
            {x: 305, y: 550, width: 10, height: 10, color: "white"},
            {x: 270, y: 585, width: 10, height: 10, color: "white"},
            {x: 235, y: 585, width: 10, height: 10, color: "white"},
            {x: 200, y: 585, width: 10, height: 10, color: "white"},
            {x: 165, y: 585, width: 10, height: 10, color: "white"},
            {x: 165, y: 550, width: 10, height: 10, color: "white"},
            {x: 165, y: 620, width: 10, height: 10, color: "white"},
            {x: 165, y: 655, width: 10, height: 10, color: "white"},
            {x: 130, y: 655, width: 10, height: 10, color: "white"},
            {x: 235, y: 655, width: 10, height: 10, color: "white"},
            {x: 235, y: 620, width: 10, height: 10, color: "white"},
            {x: 270, y: 655, width: 10, height: 10, color: "white"},
            {x: 305, y: 655, width: 10, height: 10, color: "white"},
            {x: 305, y: 690, width: 10, height: 10, color: "white"},
            {x: 375, y: 690, width: 10, height: 10, color: "white"},
            {x: 375, y: 655, width: 10, height: 10, color: "white"},
            {x: 410, y: 655, width: 10, height: 10, color: "white"},
            {x: 445, y: 655, width: 10, height: 10, color: "white"},
            {x: 445, y: 620, width: 10, height: 10, color: "white"},
            {x: 445, y: 585, width: 10, height: 10, color: "white"},
            {x: 410, y: 585, width: 10, height: 10, color: "white"},
            {x: 480, y: 585, width: 10, height: 10, color: "white"},
            {x: 515, y: 585, width: 10, height: 10, color: "white"},
            {x: 515, y: 620, width: 10, height: 10, color: "white"},
            {x: 515, y: 550, width: 10, height: 10, color: "white"},
            {x: 445, y: 445, width: 10, height: 10, color: "white"},
            {x: 445, y: 480, width: 10, height: 10, color: "white"},
            {x: 405, y: 445, width: 10, height: 10, color: "white"},
            {x: 445, y: 410, width: 10, height: 10, color: "white"},
            {x: 445, y: 375, width: 10, height: 10, color: "white"},
            {x: 445, y: 340, width: 10, height: 10, color: "white"},
            {x: 445, y: 305, width: 10, height: 10, color: "white"},
            {x: 400, y: 305, width: 10, height: 10, color: "white"},
            {x: 365, y: 305, width: 10, height: 10, color: "white"},
            {x: 330, y: 305, width: 10, height: 10, color: "white"},
            {x: 295, y: 305, width: 10, height: 10, color: "white"},
            {x: 270, y: 305, width: 10, height: 10, color: "white"},
            {x: 235, y: 305, width: 10, height: 10, color: "white"},
            {x: 235, y: 340, width: 10, height: 10, color: "white"},
            {x: 235, y: 375, width: 10, height: 10, color: "white"},
            {x: 235, y: 410, width: 10, height: 10, color: "white"},
            {x: 200, y: 375, width: 10, height: 10, color: "white"},
            {x: 165, y: 375, width: 10, height: 10, color: "white"},
            {x: 165, y: 410, width: 10, height: 10, color: "white"},
            {x: 165, y: 445, width: 10, height: 10, color: "white"},
            {x: 165, y: 480, width: 10, height: 10, color: "white"},
            {x: 165, y: 340, width: 10, height: 10, color: "white"},
            {x: 165, y: 305, width: 10, height: 10, color: "white"},
            {x: 165, y: 270, width: 10, height: 10, color: "white"},
            {x: 165, y: 235, width: 10, height: 10, color: "white"},
            {x: 165, y: 200, width: 10, height: 10, color: "white"},
            {x: 130, y: 235, width: 10, height: 10, color: "white"},
            {x: 105, y: 235, width: 10, height: 10, color: "white"},
            {x: 80, y: 235, width: 10, height: 10, color: "white"},
            {x: 45, y: 235, width: 10, height: 10, color: "white"},
            {x: 45, y: 200, width: 10, height: 10, color: "white"},
            {x: 45, y: 165, width: 10, height: 10, color: "white"},
            {x: 45, y: 125, width: 10, height: 10, color: "white"},
            {x: 45, y: 45, width: 10, height: 10, color: "white"},
            {x: 80, y: 45, width: 10, height: 10, color: "white"},
            {x: 130, y: 45, width: 10, height: 10, color: "white"},
            {x: 165, y: 45, width: 10, height: 10, color: "white"},
            {x: 165, y: 80, width: 10, height: 10, color: "white"},
            {x: 165, y: 125, width: 10, height: 10, color: "white"},
            {x: 165, y: 165, width: 10, height: 10, color: "white"},
            {x: 130, y: 165, width: 10, height: 10, color: "white"},
            {x: 80, y: 165, width: 10, height: 10, color: "white"},
            {x: 200, y: 165, width: 10, height: 10, color: "white"},
            {x: 235, y: 165, width: 10, height: 10, color: "white"},
            {x: 270, y: 165, width: 10, height: 10, color: "white"},
            {x: 235, y: 200, width: 10, height: 10, color: "white"},
            {x: 235, y: 235, width: 10, height: 10, color: "white"},
            {x: 270, y: 235, width: 10, height: 10, color: "white"},
            {x: 295, y: 235, width: 10, height: 10, color: "white"},
            {x: 295, y: 270, width: 10, height: 10, color: "white"},
            {x: 200, y: 45, width: 10, height: 10, color: "white"},
            {x: 235, y: 45, width: 10, height: 10, color: "white"},
            {x: 270, y: 45, width: 10, height: 10, color: "white"},
            {x: 305, y: 45, width: 10, height: 10, color: "white"},
            {x: 305, y: 80, width: 10, height: 10, color: "white"},
            {x: 305, y: 125, width: 10, height: 10, color: "white"},
            {x: 305, y: 165, width: 10, height: 10, color: "white"},
            {x: 340, y: 165, width: 10, height: 10, color: "white"},
            {x: 375, y: 165, width: 10, height: 10, color: "white"},
            {x: 375, y: 125, width: 10, height: 10, color: "white"},
            {x: 375, y: 80, width: 10, height: 10, color: "white"},
            {x: 375, y: 45, width: 10, height: 10, color: "white"},
            {x: 410, y: 45, width: 10, height: 10, color: "white"},
            {x: 445, y: 45, width: 10, height: 10, color: "white"},
            {x: 480, y: 45, width: 10, height: 10, color: "white"},
            {x: 515, y: 45, width: 10, height: 10, color: "white"},
            {x: 515, y: 80, width: 10, height: 10, color: "white"},
            {x: 515, y: 125, width: 10, height: 10, color: "white"},
            {x: 515, y: 165, width: 10, height: 10, color: "white"},
            {x: 480, y: 165, width: 10, height: 10, color: "white"},
            {x: 445, y: 165, width: 10, height: 10, color: "white"},
            {x: 410, y: 165, width: 10, height: 10, color: "white"},
            {x: 445, y: 200, width: 10, height: 10, color: "white"},
            {x: 445, y: 235, width: 10, height: 10, color: "white"},
            {x: 400, y: 235, width: 10, height: 10, color: "white"},
            {x: 365, y: 235, width: 10, height: 10, color: "white"},
            {x: 365, y: 270, width: 10, height: 10, color: "white"},
            {x: 550, y: 45, width: 10, height: 10, color: "white"},
            {x: 600, y: 45, width: 10, height: 10, color: "white"},
            {x: 635, y: 45, width: 10, height: 10, color: "white"},
            {x: 635, y: 125, width: 10, height: 10, color: "white"},
            {x: 635, y: 165, width: 10, height: 10, color: "white"},
            {x: 600, y: 165, width: 10, height: 10, color: "white"},
            {x: 575, y: 165, width: 10, height: 10, color: "white"},
            {x: 575, y: 45, width: 10, height: 10, color: "white"},
            {x: 105, y: 165, width: 10, height: 10, color: "white"},
            {x: 105, y: 45, width: 10, height: 10, color: "white"},
            {x: 550, y: 165, width: 10, height: 10, color: "white"},
            {x: 635, y: 200, width: 10, height: 10, color: "white"},
            {x: 635, y: 235, width: 10, height: 10, color: "white"},
            {x: 600, y: 235, width: 10, height: 10, color: "white"},
            {x: 575, y: 235, width: 10, height: 10, color: "white"},
            {x: 550, y: 235, width: 10, height: 10, color: "white"},
            {x: 515, y: 235, width: 10, height: 10, color: "white"},
            {x: 515, y: 200, width: 10, height: 10, color: "white"},
            {x: 515, y: 270, width: 10, height: 10, color: "white"},
            {x: 515, y: 305, width: 10, height: 10, color: "white"},
            {x: 515, y: 340, width: 10, height: 10, color: "white"},
            {x: 515, y: 375, width: 10, height: 10, color: "white"},
            {x: 480, y: 375, width: 10, height: 10, color: "white"},
            {x: 515, y: 410, width: 10, height: 10, color: "white"},
            {x: 515, y: 445, width: 10, height: 10, color: "white"},
            {x: 515, y: 480, width: 10, height: 10, color: "white"},
        ];

        this.bonusPillsFirst = [
            {x: 45, y: 80, width: 10, height: 10, r: 5, color: "white"},
            {x: 635, y: 80, width: 10, height: 10, r: 5, color: "white"},
            {x: 45, y: 585, width: 10, height: 10, r: 5, color: "white"},
            {x: 635, y: 585, width: 10, height: 10, r: 5, color: "white"},
        ];

        this.countPillsFirst = 183;
        // -------------------------------------

        // second-map -----------------------------

        this.wallsSecond = [
            {x: 10, y: 10, width: 690, height: 10},
            {x: 10, y: 20, width: 10, height: 200},
            {x: 80, y: 80, width: 140, height: 10},
            {x: 80, y: 90, width: 10, height: 60},
            {x: 280, y: 20, width: 10, height: 70},
            {x: 350, y: 80, width: 10, height: 130},
            {x: 420, y: 20, width: 10, height: 70},
            {x: 490, y: 80, width: 140, height: 10},
            {x: 620, y: 80, width: 10, height: 70},
            {x: 690, y: 20, width: 10, height: 200},
            {x: 420, y: 150, width: 70, height: 60},
            {x: 220, y: 150, width: 70, height: 60},
            {x: 550, y: 150, width: 10, height: 120},
            {x: 490, y: 270, width: 70, height: 10},
            {x: 150, y: 150, width: 10, height: 120},
            {x: 150, y: 270, width: 70, height: 10},
            {x: 280, y: 270, width: 150, height: 10},
            {x: 20, y: 210, width: 70, height: 10},
            {x: 620, y: 210, width: 70, height: 10},
            {x: 690, y: 280, width: 10, height: 480},
            {x: 10, y: 280, width: 10, height: 480},
            {x: 10, y: 760, width: 690, height: 10},  
            {x: 80, y: 280, width: 10, height: 70}, 
            {x: 80, y: 340, width: 70, height: 10}, 
            {x: 210, y: 340, width: 10, height: 70}, 
            {x: 150, y: 410, width: 70, height: 10}, 
            {x: 80, y: 410, width: 10, height: 70}, 
            {x: 80, y: 480, width: 70, height: 10},
            {x: 10, y: 550, width: 70, height: 10},
            {x: 140, y: 550, width: 10, height: 70},
            {x: 80, y: 620, width: 70, height: 10},
            {x: 80, y: 690, width: 70, height: 10},
            {x: 210, y: 620, width: 10, height: 140}, 
            {x: -60, y: 210, width: 70, height: 10},
            {x: -60, y: 280, width: 70, height: 10},
            {x: 690, y: 210, width: 70, height: 10},
            {x: 690, y: 280, width: 70, height: 10},    
            {x: 210, y: 620, width: 80, height: 10},
            {x: 280, y: 350, width: 10, height: 70},
            {x: 280, y: 410, width: 150, height: 10},
            {x: 420, y: 350, width: 10, height: 70},
            {x: 490, y: 340, width: 10, height: 70},
            {x: 490, y: 410, width: 70, height: 10},
            {x: 560, y: 340, width: 70, height: 10},
            {x: 620, y: 280, width: 10, height: 70},
            {x: 560, y: 480, width: 70, height: 10},
            {x: 620, y: 410, width: 10, height: 70},
            {x: 630, y: 550, width: 70, height: 10},
            {x: 560, y: 550, width: 10, height: 70},
            {x: 560, y: 620, width: 70, height: 10},
            {x: 560, y: 690, width: 70, height: 10},
            {x: 490, y: 620, width: 10, height: 140},
            {x: 420, y: 620, width: 70, height: 10},
            {x: 350, y: 620, width: 10, height: 70},
            {x: 280, y: 690, width: 150, height: 10},
            {x: 350, y: 480, width: 10, height: 70},
            {x: 280, y: 550, width: 150, height: 10},
            {x: 490, y: 480, width: 10, height: 80},
            {x: 420, y: 480, width: 70, height: 10},
            {x: 210, y: 480, width: 10, height: 80},
            {x: 220, y: 480, width: 70, height: 10},                                                        
        ];

        this.redWallSecond = {x: 280, y: 340, width: 150, height: 10};

        this.pillsSecond = [
            {x: 45, y: 45, width: 10, height: 10, color: "red"},
            {x: 80, y: 45, width: 10, height: 10, color: "red"},
            {x: 115, y: 45, width: 10, height: 10, color: "red"},
            {x: 150, y: 45, width: 10, height: 10, color: "red"}, 
            {x: 185, y: 45, width: 10, height: 10, color: "red"},
            {x: 215, y: 45, width: 10, height: 10, color: "red"},
            {x: 245, y: 45, width: 10, height: 10, color: "red"},
            {x: 315, y: 45, width: 10, height: 10, color: "red"},
            {x: 350, y: 45, width: 10, height: 10, color: "red"},
            {x: 385, y: 45, width: 10, height: 10, color: "red"},
            {x: 455, y: 45, width: 10, height: 10, color: "red"},
            {x: 490, y: 45, width: 10, height: 10, color: "red"},
            {x: 525, y: 45, width: 10, height: 10, color: "red"},
            {x: 560, y: 45, width: 10, height: 10, color: "red"},
            {x: 595, y: 45, width: 10, height: 10, color: "red"},
            {x: 625, y: 45, width: 10, height: 10, color: "red"},
            {x: 655, y: 45, width: 10, height: 10, color: "red"},
            
            {x: 45, y: 80, width: 10, height: 10, color: "red"},
            {x: 245, y: 80, width: 10, height: 10, color: "red"},
            {x: 315, y: 80, width: 10, height: 10, color: "red"},
            {x: 385, y: 80, width: 10, height: 10, color: "red"},
            {x: 455, y: 80, width: 10, height: 10, color: "red"},
            {x: 655, y: 80, width: 10, height: 10, color: "red"},

            {x: 115, y: 115, width: 10, height: 10, color: "red"},
            {x: 150, y: 115, width: 10, height: 10, color: "red"}, 
            {x: 185, y: 115, width: 10, height: 10, color: "red"},
            {x: 215, y: 115, width: 10, height: 10, color: "red"},
            {x: 245, y: 115, width: 10, height: 10, color: "red"},
            {x: 280, y: 115, width: 10, height: 10, color: "red"},
            {x: 315, y: 115, width: 10, height: 10, color: "red"},
            {x: 385, y: 115, width: 10, height: 10, color: "red"},
            {x: 420, y: 115, width: 10, height: 10, color: "red"},
            {x: 455, y: 115, width: 10, height: 10, color: "red"},
            {x: 485, y: 115, width: 10, height: 10, color: "red"},
            {x: 515, y: 115, width: 10, height: 10, color: "red"},
            {x: 550, y: 115, width: 10, height: 10, color: "red"},
            {x: 585, y: 115, width: 10, height: 10, color: "red"},

            {x: 45, y: 145, width: 10, height: 10, color: "red"},
            {x: 115, y: 145, width: 10, height: 10, color: "red"},
            {x: 185, y: 145, width: 10, height: 10, color: "red"},
            {x: 315, y: 145, width: 10, height: 10, color: "red"},
            {x: 385, y: 145, width: 10, height: 10, color: "red"},
            {x: 515, y: 145, width: 10, height: 10, color: "red"},
            {x: 585, y: 145, width: 10, height: 10, color: "red"},
            {x: 655, y: 145, width: 10, height: 10, color: "red"},

            {x: 45, y: 175, width: 10, height: 10, color: "red"},
            {x: 80, y: 175, width: 10, height: 10, color: "red"},
            {x: 115, y: 175, width: 10, height: 10, color: "red"},
            {x: 185, y: 175, width: 10, height: 10, color: "red"},
            {x: 315, y: 175, width: 10, height: 10, color: "red"},
            {x: 385, y: 175, width: 10, height: 10, color: "red"},
            {x: 515, y: 175, width: 10, height: 10, color: "red"},
            {x: 585, y: 175, width: 10, height: 10, color: "red"},
            {x: 620, y: 175, width: 10, height: 10, color: "red"},
            {x: 655, y: 175, width: 10, height: 10, color: "red"},

            {x: 115, y: 205, width: 10, height: 10, color: "red"},
            {x: 185, y: 205, width: 10, height: 10, color: "red"},
            {x: 315, y: 205, width: 10, height: 10, color: "red"},
            {x: 385, y: 205, width: 10, height: 10, color: "red"},
            {x: 515, y: 205, width: 10, height: 10, color: "red"},
            {x: 585, y: 205, width: 10, height: 10, color: "red"},

            {x: 45, y: 245, width: 10, height: 10, color: "red"},
            {x: 80, y: 245, width: 10, height: 10, color: "red"},
            {x: 115, y: 245, width: 10, height: 10, color: "red"},
            {x: 185, y: 235, width: 10, height: 10, color: "red"},
            {x: 215, y: 235, width: 10, height: 10, color: "red"},
            {x: 245, y: 235, width: 10, height: 10, color: "red"},
            {x: 280, y: 235, width: 10, height: 10, color: "red"},
            {x: 315, y: 235, width: 10, height: 10, color: "red"},
            {x: 350, y: 235, width: 10, height: 10, color: "red"},
            {x: 385, y: 235, width: 10, height: 10, color: "red"},
            {x: 420, y: 235, width: 10, height: 10, color: "red"},
            {x: 455, y: 235, width: 10, height: 10, color: "red"},
            {x: 485, y: 235, width: 10, height: 10, color: "red"},
            {x: 515, y: 235, width: 10, height: 10, color: "red"},
            {x: 585, y: 245, width: 10, height: 10, color: "red"},
            {x: 620, y: 245, width: 10, height: 10, color: "red"},
            {x: 655, y: 245, width: 10, height: 10, color: "red"},

            {x: 45, y: 280, width: 10, height: 10, color: "red"},
            {x: 115, y: 280, width: 10, height: 10, color: "red"},
            {x: 245, y: 270, width: 10, height: 10, color: "red"},
            {x: 455, y: 270, width: 10, height: 10, color: "red"},
            {x: 585, y: 280, width: 10, height: 10, color: "red"},
            {x: 655, y: 280, width: 10, height: 10, color: "red"},

            {x: 45, y: 305, width: 10, height: 10, color: "red"},
            {x: 115, y: 305, width: 10, height: 10, color: "red"},
            {x: 145, y: 305, width: 10, height: 10, color: "red"},
            {x: 175, y: 305, width: 10, height: 10, color: "red"},
            {x: 210, y: 305, width: 10, height: 10, color: "red"},
            {x: 245, y: 305, width: 10, height: 10, color: "red"},
            {x: 280, y: 305, width: 10, height: 10, color: "red"},
            {x: 315, y: 305, width: 10, height: 10, color: "red"},
            {x: 350, y: 305, width: 10, height: 10, color: "red"},
            {x: 385, y: 305, width: 10, height: 10, color: "red"},
            {x: 420, y: 305, width: 10, height: 10, color: "red"},
            {x: 455, y: 305, width: 10, height: 10, color: "red"},
            {x: 490, y: 305, width: 10, height: 10, color: "red"},
            {x: 525, y: 305, width: 10, height: 10, color: "red"},
            {x: 555, y: 305, width: 10, height: 10, color: "red"},
            {x: 585, y: 305, width: 10, height: 10, color: "red"},
            {x: 655, y: 305, width: 10, height: 10, color: "red"},

            {x: 45, y: 340, width: 10, height: 10, color: "red"},
            {x: 175, y: 340, width: 10, height: 10, color: "red"},
            {x: 245, y: 340, width: 10, height: 10, color: "red"},
            {x: 455, y: 340, width: 10, height: 10, color: "red"},
            {x: 525, y: 340, width: 10, height: 10, color: "red"},
            {x: 655, y: 340, width: 10, height: 10, color: "red"},

            {x: 45, y: 375, width: 10, height: 10, color: "red"},
            {x: 80, y: 375, width: 10, height: 10, color: "red"},
            {x: 115, y: 375, width: 10, height: 10, color: "red"},
            {x: 145, y: 375, width: 10, height: 10, color: "red"},
            {x: 175, y: 375, width: 10, height: 10, color: "red"},
            {x: 245, y: 375, width: 10, height: 10, color: "red"},
            {x: 455, y: 375, width: 10, height: 10, color: "red"},
            {x: 525, y: 375, width: 10, height: 10, color: "red"},
            {x: 555, y: 375, width: 10, height: 10, color: "red"},
            {x: 585, y: 375, width: 10, height: 10, color: "red"},
            {x: 620, y: 375, width: 10, height: 10, color: "red"},
            {x: 655, y: 375, width: 10, height: 10, color: "red"},

            {x: 45, y: 410, width: 10, height: 10, color: "red"},
            {x: 115, y: 410, width: 10, height: 10, color: "red"},
            {x: 245, y: 410, width: 10, height: 10, color: "red"},
            {x: 455, y: 410, width: 10, height: 10, color: "red"},
            {x: 585, y: 410, width: 10, height: 10, color: "red"},
            {x: 655, y: 410, width: 10, height: 10, color: "red"},

            {x: 45, y: 445, width: 10, height: 10, color: "red"},
            {x: 115, y: 445, width: 10, height: 10, color: "red"},
            {x: 145, y: 445, width: 10, height: 10, color: "red"},
            {x: 175, y: 445, width: 10, height: 10, color: "red"},
            {x: 210, y: 445, width: 10, height: 10, color: "red"},
            {x: 245, y: 445, width: 10, height: 10, color: "red"},
            {x: 280, y: 445, width: 10, height: 10, color: "red"},
            {x: 420, y: 445, width: 10, height: 10, color: "red"},
            {x: 455, y: 445, width: 10, height: 10, color: "red"},
            {x: 490, y: 445, width: 10, height: 10, color: "red"},
            {x: 525, y: 445, width: 10, height: 10, color: "red"},
            {x: 555, y: 445, width: 10, height: 10, color: "red"},
            {x: 585, y: 445, width: 10, height: 10, color: "red"},
            {x: 655, y: 445, width: 10, height: 10, color: "red"},

            {x: 45, y: 480, width: 10, height: 10, color: "red"},
            {x: 175, y: 480, width: 10, height: 10, color: "red"},
            {x: 315, y: 480, width: 10, height: 10, color: "red"},
            {x: 385, y: 480, width: 10, height: 10, color: "red"},
            {x: 525, y: 480, width: 10, height: 10, color: "red"},
            {x: 655, y: 480, width: 10, height: 10, color: "red"},

            {x: 45, y: 515, width: 10, height: 10, color: "red"},
            {x: 80, y: 515, width: 10, height: 10, color: "red"},
            {x: 115, y: 515, width: 10, height: 10, color: "red"},
            {x: 145, y: 515, width: 10, height: 10, color: "red"},
            {x: 175, y: 515, width: 10, height: 10, color: "red"},
            {x: 245, y: 515, width: 10, height: 10, color: "red"},
            {x: 280, y: 515, width: 10, height: 10, color: "red"},
            {x: 315, y: 515, width: 10, height: 10, color: "red"},
            {x: 385, y: 515, width: 10, height: 10, color: "red"},
            {x: 420, y: 515, width: 10, height: 10, color: "red"},
            {x: 455, y: 515, width: 10, height: 10, color: "red"},
            {x: 525, y: 515, width: 10, height: 10, color: "red"},
            {x: 560, y: 515, width: 10, height: 10, color: "red"},
            {x: 595, y: 515, width: 10, height: 10, color: "red"},
            {x: 625, y: 515, width: 10, height: 10, color: "red"},
            {x: 655, y: 515, width: 10, height: 10, color: "red"},

            {x: 105, y: 550, width: 10, height: 10, color: "red"},
            {x: 175, y: 550, width: 10, height: 10, color: "red"},
            {x: 245, y: 550, width: 10, height: 10, color: "red"},
            {x: 455, y: 550, width: 10, height: 10, color: "red"},
            {x: 525, y: 550, width: 10, height: 10, color: "red"},
            {x: 595, y: 550, width: 10, height: 10, color: "red"},

            {x: 45, y: 585, width: 10, height: 10, color: "red"},
            {x: 75, y: 585, width: 10, height: 10, color: "red"},
            {x: 105, y: 585, width: 10, height: 10, color: "red"},
            {x: 175, y: 585, width: 10, height: 10, color: "red"},
            {x: 210, y: 585, width: 10, height: 10, color: "red"},
            {x: 245, y: 585, width: 10, height: 10, color: "red"},
            {x: 280, y: 585, width: 10, height: 10, color: "red"},
            {x: 315, y: 585, width: 10, height: 10, color: "red"},
            {x: 350, y: 585, width: 10, height: 10, color: "red"},
            {x: 385, y: 585, width: 10, height: 10, color: "red"},
            {x: 420, y: 585, width: 10, height: 10, color: "red"},
            {x: 455, y: 585, width: 10, height: 10, color: "red"},
            {x: 490, y: 585, width: 10, height: 10, color: "red"},
            {x: 525, y: 585, width: 10, height: 10, color: "red"},
            {x: 595, y: 585, width: 10, height: 10, color: "red"},
            {x: 625, y: 585, width: 10, height: 10, color: "red"},
            {x: 655, y: 585, width: 10, height: 10, color: "red"},

            {x: 45, y: 620, width: 10, height: 10, color: "red"},
            {x: 175, y: 620, width: 10, height: 10, color: "red"},
            {x: 315, y: 620, width: 10, height: 10, color: "red"},
            {x: 385, y: 620, width: 10, height: 10, color: "red"},
            {x: 525, y: 620, width: 10, height: 10, color: "red"},
            {x: 655, y: 620, width: 10, height: 10, color: "red"},

            {x: 45, y: 655, width: 10, height: 10, color: "red"},
            {x: 80, y: 655, width: 10, height: 10, color: "red"},
            {x: 110, y: 655, width: 10, height: 10, color: "red"},
            {x: 140, y: 655, width: 10, height: 10, color: "red"},
            {x: 175, y: 655, width: 10, height: 10, color: "red"},
            {x: 245, y: 655, width: 10, height: 10, color: "red"},
            {x: 280, y: 655, width: 10, height: 10, color: "red"},
            {x: 315, y: 655, width: 10, height: 10, color: "red"},
            {x: 385, y: 655, width: 10, height: 10, color: "red"},
            {x: 420, y: 655, width: 10, height: 10, color: "red"},
            {x: 455, y: 655, width: 10, height: 10, color: "red"},
            {x: 525, y: 655, width: 10, height: 10, color: "red"},
            {x: 560, y: 655, width: 10, height: 10, color: "red"},
            {x: 590, y: 655, width: 10, height: 10, color: "red"},
            {x: 620, y: 655, width: 10, height: 10, color: "red"},
            {x: 655, y: 655, width: 10, height: 10, color: "red"},

            {x: 45, y: 690, width: 10, height: 10, color: "red"},
            {x: 175, y: 690, width: 10, height: 10, color: "red"},
            {x: 245, y: 690, width: 10, height: 10, color: "red"},
            {x: 455, y: 690, width: 10, height: 10, color: "red"},
            {x: 525, y: 690, width: 10, height: 10, color: "red"},
            {x: 655, y: 690, width: 10, height: 10, color: "red"},

            {x: 80, y: 725, width: 10, height: 10, color: "red"},
            {x: 110, y: 725, width: 10, height: 10, color: "red"},
            {x: 140, y: 725, width: 10, height: 10, color: "red"},
            {x: 175, y: 725, width: 10, height: 10, color: "red"},
            {x: 245, y: 725, width: 10, height: 10, color: "red"},
            {x: 280, y: 725, width: 10, height: 10, color: "red"},
            {x: 315, y: 725, width: 10, height: 10, color: "red"},
            {x: 350, y: 725, width: 10, height: 10, color: "red"},
            {x: 385, y: 725, width: 10, height: 10, color: "red"},
            {x: 420, y: 725, width: 10, height: 10, color: "red"},
            {x: 455, y: 725, width: 10, height: 10, color: "red"},
            {x: 525, y: 725, width: 10, height: 10, color: "red"},
            {x: 560, y: 725, width: 10, height: 10, color: "red"},
            {x: 590, y: 725, width: 10, height: 10, color: "red"},
            {x: 620, y: 725, width: 10, height: 10, color: "red"},
        ];

        this.bonusPillsSecond = [
            {x: 45, y: 115, width: 10, height: 10, r: 5, color: "red"}, 
            {x: 655, y: 115, width: 10, height: 10, r: 5, color: "red"},
            {x: 45, y: 725, width: 10, height: 10, r: 5, color: "red"},
            {x: 655, y: 725, width: 10, height: 10, r: 5, color: "red"},
        ];

        this.countPillsSecond = 231;
        // -------------------------------------------------------------------------

        // third-map ---------------------------------

        this.wallsThird = [
            {x: 10, y: 10, width: 690, height: 10},
            {x: 10, y: 10, width: 10, height: 150},
            {x: 80, y: 80, width: 70, height: 10},
            {x: 210, y: 20, width: 10, height: 70}, 
            {x: 280, y: 80, width: 150, height: 10},
            {x: 490, y: 20, width: 10, height: 70},
            {x: 560, y: 80, width: 70, height: 10},
            {x: 10, y: 150, width: 70, height: 10},
            {x: 70, y: 150, width: 10, height: 60},
            {x: -70, y: 200, width: 140, height: 10},
            {x: -70, y: 270, width: 140, height: 10},
            {x: 690, y: 10, width: 10, height: 150},
            {x: 630, y: 150, width: 70, height: 10},
            {x: 630, y: 150, width: 10, height: 60},
            {x: 630, y: 200, width: 140, height: 10},
            {x: 630, y: 270, width: 140, height: 10},  
            {x: 140, y: 150, width: 10, height: 130},
            {x: 150, y: 270, width: 70, height: 10},
            {x: 210, y: 150, width: 80, height: 60},
            {x: 280, y: 270, width: 150, height: 10},
            {x: 350, y: 150, width: 10, height: 130},
            {x: 420, y: 150, width: 80, height: 60},
            {x: 560, y: 150, width: 10, height: 130},
            {x: 490, y: 270, width: 70, height: 10},
            {x: 280, y: 340, width: 10, height: 80},
            {x: 280, y: 410, width: 150, height: 10},
            {x: 420, y: 340, width: 10, height: 80},
            {x: 490, y: 340, width: 70, height: 10},
            {x: 560, y: 340, width: 10, height: 80},
            {x: 630, y: 280, width: 10, height: 140},
            {x: 630, y: 410, width: 150, height: 10},
            {x: 630, y: 480, width: 150, height: 10},
            {x: 490, y: 410, width: 10, height: 80},
            {x: 420, y: 480, width: 150, height: 10},
            {x: 140, y: 340, width: 80, height: 10},
            {x: 140, y: 340, width: 10, height: 80}, 
            {x: 70, y: 270, width: 10, height: 150},
            {x: -60, y: 410, width: 130, height: 10},
            {x: -60, y: 480, width: 140, height: 10}, 
            {x: 140, y: 480, width: 150, height: 10},
            {x: 210, y: 410, width: 10, height: 70},
            {x: 140, y: 550, width: 80, height: 10},
            {x: 70, y: 480, width: 10, height: 80},
            {x: 10, y: 550, width: 60, height: 10},
            {x: 280, y: 550, width: 150, height: 10},
            {x: 350, y: 480, width: 10, height: 70}, 
            {x: 490, y: 550, width: 80, height: 10},
            {x: 630, y: 490, width: 10, height: 70},
            {x: 630, y: 550, width: 70, height: 10},
            {x: 690, y: 550, width: 10, height: 220}, 
            {x: 10, y: 550, width: 10, height: 220},
            {x: 10, y: 760, width: 690, height: 10},
            {x: 80, y: 620, width: 70, height: 80},
            {x: 210, y: 620, width: 10, height: 80},
            {x: 220, y: 620, width: 70, height: 10}, 
            {x: 280, y: 690, width: 150, height: 10},
            {x: 350, y: 620, width: 10, height: 70},
            {x: 420, y: 620, width: 80, height: 10},
            {x: 490, y: 630, width: 10, height: 70},
            {x: 560, y: 620, width: 70, height: 80},                                                               
        ];

        this.redWallThird = this.redWallSecond;

        this.pillsThird = [
            {x: 75, y: 45, width: 10, height: 10, color: "purple"},
            {x: 110, y: 45, width: 10, height: 10, color: "purple"},
            {x: 145, y: 45, width: 10, height: 10, color: "purple"},
            {x: 175, y: 45, width: 10, height: 10, color: "purple"},
            {x: 245, y: 45, width: 10, height: 10, color: "purple"},
            {x: 280, y: 45, width: 10, height: 10, color: "purple"},
            {x: 315, y: 45, width: 10, height: 10, color: "purple"},
            {x: 350, y: 45, width: 10, height: 10, color: "purple"},
            {x: 385, y: 45, width: 10, height: 10, color: "purple"},
            {x: 420, y: 45, width: 10, height: 10, color: "purple"},
            {x: 455, y: 45, width: 10, height: 10, color: "purple"},
            {x: 525, y: 45, width: 10, height: 10, color: "purple"},
            {x: 555, y: 45, width: 10, height: 10, color: "purple"},
            {x: 590, y: 45, width: 10, height: 10, color: "purple"},
            {x: 625, y: 45, width: 10, height: 10, color: "purple"},

            {x: 45, y: 80, width: 10, height: 10, color: "purple"},
            {x: 175, y: 80, width: 10, height: 10, color: "purple"},
            {x: 245, y: 80, width: 10, height: 10, color: "purple"},
            {x: 455, y: 80, width: 10, height: 10, color: "purple"},
            {x: 525, y: 80, width: 10, height: 10, color: "purple"},
            {x: 655, y: 80, width: 10, height: 10, color: "purple"},

            {x: 45, y: 115, width: 10, height: 10, color: "purple"},
            {x: 75, y: 115, width: 10, height: 10, color: "purple"},
            {x: 105, y: 115, width: 10, height: 10, color: "purple"},
            {x: 140, y: 115, width: 10, height: 10, color: "purple"},
            {x: 175, y: 115, width: 10, height: 10, color: "purple"},
            {x: 210, y: 115, width: 10, height: 10, color: "purple"},
            {x: 245, y: 115, width: 10, height: 10, color: "purple"},
            {x: 280, y: 115, width: 10, height: 10, color: "purple"},
            {x: 315, y: 115, width: 10, height: 10, color: "purple"},
            {x: 350, y: 115, width: 10, height: 10, color: "purple"},
            {x: 385, y: 115, width: 10, height: 10, color: "purple"},
            {x: 420, y: 115, width: 10, height: 10, color: "purple"},
            {x: 455, y: 115, width: 10, height: 10, color: "purple"},
            {x: 490, y: 115, width: 10, height: 10, color: "purple"},
            {x: 525, y: 115, width: 10, height: 10, color: "purple"},
            {x: 560, y: 115, width: 10, height: 10, color: "purple"},
            {x: 595, y: 115, width: 10, height: 10, color: "purple"},
            {x: 625, y: 115, width: 10, height: 10, color: "purple"},
            {x: 655, y: 115, width: 10, height: 10, color: "purple"},

            {x: 105, y: 150, width: 10, height: 10, color: "purple"},
            {x: 175, y: 150, width: 10, height: 10, color: "purple"},
            {x: 315, y: 150, width: 10, height: 10, color: "purple"},
            {x: 385, y: 150, width: 10, height: 10, color: "purple"},
            {x: 525, y: 150, width: 10, height: 10, color: "purple"},
            {x: 595, y: 150, width: 10, height: 10, color: "purple"},

            {x: 105, y: 175, width: 10, height: 10, color: "purple"},
            {x: 175, y: 175, width: 10, height: 10, color: "purple"},
            {x: 315, y: 175, width: 10, height: 10, color: "purple"},
            {x: 385, y: 175, width: 10, height: 10, color: "purple"},
            {x: 525, y: 175, width: 10, height: 10, color: "purple"},
            {x: 595, y: 175, width: 10, height: 10, color: "purple"},

            {x: 105, y: 200, width: 10, height: 10, color: "purple"},
            {x: 175, y: 200, width: 10, height: 10, color: "purple"},
            {x: 315, y: 200, width: 10, height: 10, color: "purple"},
            {x: 385, y: 200, width: 10, height: 10, color: "purple"},
            {x: 525, y: 200, width: 10, height: 10, color: "purple"},
            {x: 595, y: 200, width: 10, height: 10, color: "purple"},

            {x: 105, y: 235, width: 10, height: 10, color: "purple"},
            {x: 175, y: 235, width: 10, height: 10, color: "purple"},
            {x: 210, y: 235, width: 10, height: 10, color: "purple"},
            {x: 245, y: 235, width: 10, height: 10, color: "purple"},
            {x: 280, y: 235, width: 10, height: 10, color: "purple"},
            {x: 315, y: 235, width: 10, height: 10, color: "purple"},
            {x: 385, y: 235, width: 10, height: 10, color: "purple"},
            {x: 420, y: 235, width: 10, height: 10, color: "purple"},
            {x: 455, y: 235, width: 10, height: 10, color: "purple"},
            {x: 490, y: 235, width: 10, height: 10, color: "purple"},
            {x: 525, y: 235, width: 10, height: 10, color: "purple"},
            {x: 595, y: 235, width: 10, height: 10, color: "purple"},

            {x: 105, y: 270, width: 10, height: 10, color: "purple"},
            {x: 245, y: 270, width: 10, height: 10, color: "purple"},
            {x: 455, y: 270, width: 10, height: 10, color: "purple"},
            {x: 595, y: 270, width: 10, height: 10, color: "purple"},

            {x: 105, y: 305, width: 10, height: 10, color: "purple"},
            {x: 140, y: 305, width: 10, height: 10, color: "purple"},
            {x: 175, y: 305, width: 10, height: 10, color: "purple"},
            {x: 210, y: 305, width: 10, height: 10, color: "purple"},
            {x: 245, y: 305, width: 10, height: 10, color: "purple"},
            {x: 280, y: 305, width: 10, height: 10, color: "purple"},
            {x: 315, y: 305, width: 10, height: 10, color: "purple"},
            {x: 350, y: 305, width: 10, height: 10, color: "purple"},
            {x: 385, y: 305, width: 10, height: 10, color: "purple"},
            {x: 420, y: 305, width: 10, height: 10, color: "purple"},
            {x: 455, y: 305, width: 10, height: 10, color: "purple"},
            {x: 490, y: 305, width: 10, height: 10, color: "purple"},
            {x: 525, y: 305, width: 10, height: 10, color: "purple"},
            {x: 560, y: 305, width: 10, height: 10, color: "purple"},
            {x: 595, y: 305, width: 10, height: 10, color: "purple"},

            {x: 105, y: 340, width: 10, height: 10, color: "purple"},
            {x: 245, y: 340, width: 10, height: 10, color: "purple"},
            {x: 455, y: 340, width: 10, height: 10, color: "purple"},
            {x: 595, y: 340, width: 10, height: 10, color: "purple"},

            {x: 105, y: 375, width: 10, height: 10, color: "purple"},
            {x: 175, y: 375, width: 10, height: 10, color: "purple"},
            {x: 210, y: 375, width: 10, height: 10, color: "purple"},
            {x: 245, y: 375, width: 10, height: 10, color: "purple"},
            {x: 455, y: 375, width: 10, height: 10, color: "purple"},
            {x: 490, y: 375, width: 10, height: 10, color: "purple"},
            {x: 525, y: 375, width: 10, height: 10, color: "purple"},
            {x: 595, y: 375, width: 10, height: 10, color: "purple"},

            {x: 105, y: 410, width: 10, height: 10, color: "purple"},
            {x: 175, y: 410, width: 10, height: 10, color: "purple"},
            {x: 245, y: 410, width: 10, height: 10, color: "purple"},
            {x: 455, y: 410, width: 10, height: 10, color: "purple"},
            {x: 525, y: 410, width: 10, height: 10, color: "purple"},
            {x: 595, y: 410, width: 10, height: 10, color: "purple"},

            {x: 105, y: 445, width: 10, height: 10, color: "purple"},
            {x: 140, y: 445, width: 10, height: 10, color: "purple"},
            {x: 175, y: 445, width: 10, height: 10, color: "purple"},
            {x: 245, y: 445, width: 10, height: 10, color: "purple"},
            {x: 280, y: 445, width: 10, height: 10, color: "purple"},
            {x: 420, y: 445, width: 10, height: 10, color: "purple"},
            {x: 455, y: 445, width: 10, height: 10, color: "purple"},
            {x: 525, y: 445, width: 10, height: 10, color: "purple"},
            {x: 560, y: 445, width: 10, height: 10, color: "purple"},
            {x: 595, y: 445, width: 10, height: 10, color: "purple"},

            {x: 105, y: 480, width: 10, height: 10, color: "purple"},
            {x: 315, y: 480, width: 10, height: 10, color: "purple"},
            {x: 385, y: 480, width: 10, height: 10, color: "purple"},
            {x: 595, y: 480, width: 10, height: 10, color: "purple"},

            {x: 105, y: 515, width: 10, height: 10, color: "purple"},
            {x: 140, y: 515, width: 10, height: 10, color: "purple"},
            {x: 175, y: 515, width: 10, height: 10, color: "purple"},
            {x: 210, y: 515, width: 10, height: 10, color: "purple"},
            {x: 245, y: 515, width: 10, height: 10, color: "purple"},
            {x: 280, y: 515, width: 10, height: 10, color: "purple"},
            {x: 315, y: 515, width: 10, height: 10, color: "purple"},
            {x: 385, y: 515, width: 10, height: 10, color: "purple"},
            {x: 420, y: 515, width: 10, height: 10, color: "purple"},
            {x: 455, y: 515, width: 10, height: 10, color: "purple"},
            {x: 490, y: 515, width: 10, height: 10, color: "purple"},
            {x: 525, y: 515, width: 10, height: 10, color: "purple"},
            {x: 560, y: 515, width: 10, height: 10, color: "purple"},
            {x: 595, y: 515, width: 10, height: 10, color: "purple"},

            {x: 105, y: 550, width: 10, height: 10, color: "purple"},
            {x: 245, y: 550, width: 10, height: 10, color: "purple"},
            {x: 455, y: 550, width: 10, height: 10, color: "purple"},
            {x: 595, y: 550, width: 10, height: 10, color: "purple"},

            {x: 45, y: 585, width: 10, height: 10, color: "purple"},
            {x: 75, y: 585, width: 10, height: 10, color: "purple"},
            {x: 105, y: 585, width: 10, height: 10, color: "purple"},
            {x: 140, y: 585, width: 10, height: 10, color: "purple"},
            {x: 175, y: 585, width: 10, height: 10, color: "purple"},
            {x: 210, y: 585, width: 10, height: 10, color: "purple"},
            {x: 245, y: 585, width: 10, height: 10, color: "purple"},
            {x: 280, y: 585, width: 10, height: 10, color: "purple"},
            {x: 315, y: 585, width: 10, height: 10, color: "purple"},
            {x: 350, y: 585, width: 10, height: 10, color: "purple"},
            {x: 385, y: 585, width: 10, height: 10, color: "purple"},
            {x: 420, y: 585, width: 10, height: 10, color: "purple"},
            {x: 455, y: 585, width: 10, height: 10, color: "purple"},
            {x: 490, y: 585, width: 10, height: 10, color: "purple"},
            {x: 525, y: 585, width: 10, height: 10, color: "purple"},
            {x: 560, y: 585, width: 10, height: 10, color: "purple"},
            {x: 595, y: 585, width: 10, height: 10, color: "purple"},
            {x: 625, y: 585, width: 10, height: 10, color: "purple"},
            {x: 655, y: 585, width: 10, height: 10, color: "purple"},

            {x: 45, y: 620, width: 10, height: 10, color: "purple"},
            {x: 175, y: 620, width: 10, height: 10, color: "purple"},
            {x: 315, y: 620, width: 10, height: 10, color: "purple"},
            {x: 385, y: 620, width: 10, height: 10, color: "purple"},
            {x: 525, y: 620, width: 10, height: 10, color: "purple"},
            {x: 655, y: 620, width: 10, height: 10, color: "purple"},

            {x: 45, y: 655, width: 10, height: 10, color: "purple"},
            {x: 175, y: 655, width: 10, height: 10, color: "purple"},
            {x: 245, y: 655, width: 10, height: 10, color: "purple"},
            {x: 280, y: 655, width: 10, height: 10, color: "purple"},
            {x: 315, y: 655, width: 10, height: 10, color: "purple"},
            {x: 385, y: 655, width: 10, height: 10, color: "purple"},
            {x: 420, y: 655, width: 10, height: 10, color: "purple"},
            {x: 455, y: 655, width: 10, height: 10, color: "purple"},
            {x: 525, y: 655, width: 10, height: 10, color: "purple"},
            {x: 655, y: 655, width: 10, height: 10, color: "purple"},

            {x: 45, y: 690, width: 10, height: 10, color: "purple"},
            {x: 175, y: 690, width: 10, height: 10, color: "purple"},
            {x: 245, y: 690, width: 10, height: 10, color: "purple"},
            {x: 455, y: 690, width: 10, height: 10, color: "purple"},
            {x: 525, y: 690, width: 10, height: 10, color: "purple"},
            {x: 655, y: 690, width: 10, height: 10, color: "purple"},

            {x: 75, y: 725, width: 10, height: 10, color: "purple"},
            {x: 105, y: 725, width: 10, height: 10, color: "purple"},
            {x: 140, y: 725, width: 10, height: 10, color: "purple"},
            {x: 175, y: 725, width: 10, height: 10, color: "purple"},
            {x: 210, y: 725, width: 10, height: 10, color: "purple"},
            {x: 245, y: 725, width: 10, height: 10, color: "purple"},
            {x: 280, y: 725, width: 10, height: 10, color: "purple"},
            {x: 315, y: 725, width: 10, height: 10, color: "purple"},
            {x: 350, y: 725, width: 10, height: 10, color: "purple"},
            {x: 385, y: 725, width: 10, height: 10, color: "purple"},
            {x: 420, y: 725, width: 10, height: 10, color: "purple"},
            {x: 455, y: 725, width: 10, height: 10, color: "purple"},
            {x: 490, y: 725, width: 10, height: 10, color: "purple"},
            {x: 525, y: 725, width: 10, height: 10, color: "purple"},
            {x: 560, y: 725, width: 10, height: 10, color: "purple"},
            {x: 595, y: 725, width: 10, height: 10, color: "purple"},
            {x: 625, y: 725, width: 10, height: 10, color: "purple"},
        ];

        this.bonusPillsThird = [
            {x: 45, y: 45, width: 10, height: 10, r: 5, color: "purple"},
            {x: 655, y: 45, width: 10, height: 10, r: 5, color: "purple"},
            {x: 45, y: 725, width: 10, height: 10, r: 5, color: "purple"},
            {x: 655, y: 725, width: 10, height: 10, r: 5, color: "purple"},
        ];

        this.countPillsThird = 201;
        // ------------------------------------------------------------------------
        this.pacmanSettings = {
            height: 55,
            width: 55,
            r: 20,
            yy: 0,
            xx: 0,
            x: 315,
            y: 420,
            startXFirst: 315,
            startXSecond: 325,
            startY: 420,
            speed: 3
        }

        this.settings = {   //canvas settings
            canvas: null,
            ctx: null,
            bufferCanvas: null,
            bufferCtx: null,
        }

        this.ghostSettings = [
            {
                height: 60,
                width: 60,
                r: 20,
                yy: 0,
                xx: 0,
                x: 315,
                y: 350,
                startXFirst: 315,
                startXSecond: 325,
                startY: 350,
                speed: 3,
                color: "purple",
                mainColor: "purple"
            },

            {
                height: 60,
                width: 60,
                r: 20,
                yy: 0,
                xx: 0,
                x: 315,
                y: 350,
                startXFirst: 315,
                startXSecond: 325,
                startY: 350,
                speed: 3,
                color: "pink",
                mainColor: "pink"
            },

            {
                height: 60,
                width: 60,
                r: 20,
                yy: 0,
                xx: 0,
                x: 315,
                y: 350,
                startXFirst: 315,
                startXSecond: 325,
                startY: 350,
                speed: 3,
                color: "orange",
                mainColor: "orange"
            },

            {
                height: 60,
                width: 60,
                r: 20,
                yy: 0,
                xx: 0,
                x: 315,
                y: 350,
                startXFirst: 315,
                startXSecond: 325,
                startY: 350,
                speed: 3,
                color: "#00BFFF",
                mainColor: "#00BFFF" 
            },
    
    
    ];

        this.direction = null;          //pacman logic set
        this.mouthRotate = false;
        this.canMove = false;

        this.startAngle = null;
        this.endAngle = null;
        this.mouthState = true;

        this.space = false;

        // ------------------------

        this.ghostDirection = [];

        this.bonusPillsState = [true, true, true, true]; // pills anim state

        this.directionIntervalForGhost = null;

        this.ghostTimeEnd1 = null;          // bad timers for ghost's
        this.ghostTimePreEnd1 = null;
        this.ghostTimeEnd2 = null;
        this.ghostTimePreEnd2 = null;
        this.ghostTimeEnd3 = null;
        this.ghostTimePreEnd3 = null;
        this.ghostTimeEnd4 = null;
        this.ghostTimePreEnd4 = null;

        this.whiteInterval1 = null;
        this.blueInterval1 = null;
        this.whiteInterval2 = null;
        this.blueInterval2 = null;
        this.whiteInterval3 = null;
        this.blueInterval3 = null;
        this.whiteInterval4 = null;
        this.blueInterval4 = null;

        this.ghostComeToNormal1 = null;
        this.ghostComeToNormal2 = null;
        this.ghostComeToNormal3 = null;
        this.ghostComeToNormal4 = null;

        this.resetGame = false; // stop game
        this.set = false;

        this.death = false;
    }

    updateState() {     // SPA
        const hashPageName = window.location.hash.slice(1).toLowerCase();

        if (hashPageName === "records") this.getScore();

        this.view.renderContent(hashPageName);
    }

    timer() {   // timer to start game
        let intervalId = setInterval(() => {
            this.time--;
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId);
            this.time = null;
        }, 4000);
    }

    setGame() { // set settings for game (lvl)
        if (this.map === 1) {
            if (!this.countPills) {
                this.countPills = this.countPillsSecond;
            }

            this.walls = this.wallsSecond;
            this.redWall = this.redWallSecond;

            this.pills = this.pillsSecond;
            this.bonusPills = this.bonusPillsSecond;

            this.pacmanSettings.x = this.pacmanSettings.startXSecond;
            
            for (let i = 0; i < this.ghostSettings.length; i++) {
                this.ghostSettings[i].x = this.ghostSettings[i].startXSecond;
            }
        } else if (this.map === 2) {
            if (!this.countPills) {
                this.countPills = this.countPillsThird;
            }

            this.walls = this.wallsThird;
            this.redWall = this.redWallThird;

            this.pills = this.pillsThird;
            this.bonusPills = this.bonusPillsThird;

            this.pacmanSettings.x = this.pacmanSettings.startXSecond;
            
            for (let i = 0; i < this.ghostSettings.length; i++) {
                this.ghostSettings[i].x = this.ghostSettings[i].startXSecond;
            }
        } else {
            if (!this.countPills) {
                this.countPills = this.countPillsFirst;
            }

            this.walls = this.wallsFirst;
            this.redWall = this.redWallFirst;

            this.pills = this.pillsFirst;
            this.bonusPills = this.bonusPillsFirst;

            this.pacmanSettings.x = this.pacmanSettings.startXFirst;
            
            for (let i = 0; i < this.ghostSettings.length; i++) {
                this.ghostSettings[i].x = this.ghostSettings[i].startXFirst;
            }
        }


        this.animBonus = false;

        this.setMapToView();

        this.level();

        this.view.getSettings(this.pacmanSettings, this.settings, this.ghostSettings);
        this.setWalls();
        this.setPills();
        this.animBonusPills();

        requestAnimationFrame(this.setMouthAngle.bind(this));

        this.timer();

        requestAnimationFrame(this.setTimer.bind(this));

        this.view.createGame();

        this.startSound();

        this.directionIntervalForGhost = setInterval(() => {
            this.getRandom();
        }, 600); 

        setTimeout(() => {
            this.canMove = true;
            this.resetGame = false;
            requestAnimationFrame(this.createGame.bind(this));
        }, 4000);
    }

    createGame() {    //start game
        if (this.resetGame) return;
        else {
            this.pacmanRun();
            this.ghostRun();
            this.score();
            this.livesSet();
            this.animBonusPills();

            requestAnimationFrame(this.createGame.bind(this));
        }
    } 

    startSound() {      
        let startAudio = new Audio;
        startAudio.src = "./music/opening_song.mp3";
        startAudio.autoplay = true;
    }

    eatingPillsSound() {
        let eatingPillsAudio = new Audio;
        eatingPillsAudio.src = "./music/eating_short.mp3";
        eatingPillsAudio.autoplay = true;
    }

    eatingBonusSound() {
        let eatingAudio = new Audio;
        eatingAudio.src = "./music/eatpill.mp3";
        eatingAudio.autoplay = true;
    }

    eatingGhostSound() {
        let eatingGhostAudio = new Audio;
        eatingGhostAudio.src = "./music/eatghost.mp3";
        eatingGhostAudio.autoplay = true;
    }

    deathSound() {
        let deathAudio = new Audio;
        deathAudio.src = "./music/die.mp3";
        deathAudio.autoplay = true; 
    }
    
    setWalls() {    // push walls settings to view
        this.view.getWalls(this.walls, this.redWall);
    }

    setPills () {      // push pills settings to view
        this.view.getPills(this.pills, this.bonusPills);
    }

    animBonusPills() {
        for (let i = 0; i < this.bonusPills.length; i++) {
            if (!this.bonusPillsState[i]) {
                this.bonusPills[i].r -= 0.25;
    
                if (this.bonusPills[i].r < 2) this.bonusPillsState[i] = true;
            } else if (this.bonusPillsState) {
                this.bonusPills[i].r += 0.25;
    
                if (this.bonusPills[i].r > 10) this.bonusPillsState[i] = false;
            }
        }
    }

    setMouthAngle () {     // push to view settings to anim pacman mouth
        this.view.getMouthAngle(this.startAngle, this.endAngle);

        requestAnimationFrame(this.setMouthAngle.bind(this));
    }

    getDirection(direction) {   // get pacman direction from controller
        if (this.canMove) {
            this.direction = direction;
        }
    }

    setMouthRotate(rotate) {
        this.mouthRotate = rotate;
    }
    
    setMouthDirection() {
        if (this.direction === -1) {
            this.startAngle = 2.8;
            this.endAngle = 3.2;
        } else if (this.direction === 1) {
            this.startAngle = -0.2;
            this.endAngle = 0.2;
        } else if (this.direction === -2) {
            this.startAngle = 3.3;
            this.endAngle = 3.7;
        } else if (this.direction === 2) {
            this.startAngle = 2.3;
            this.endAngle = 2.7;
        }
    }

    getSpaceToRun(space) {      // bad logic for pacman run :)
        this.space = space;
    }

    pacmanRun() {   // all pacman move logic
        this.pacmanSettings.x += this.pacmanSettings.xx;
        this.pacmanSettings.y += this.pacmanSettings.yy;

        if (this.countPills === 0) {        // refresh to next lvl
            this.refresh();
        }
        
        // move logic
        if (this.direction === -1) {
            this.pacmanSettings.xx = -this.pacmanSettings.speed;  

            if(this.mouthRotate) {
                if (!this.mouthState) {
                    this.startAngle -= 0.02;
                    this.endAngle += 0.02;
        
                    if (this.startAngle < 2.8 && this.endAngle > 3.2) this.mouthState = true;
                } else if (this.mouthState) {
                    this.startAngle += 0.02;
                    this.endAngle -= 0.02;

        
                    if (this.startAngle > 2.99 && this.endAngle < 3.01) this.mouthState = false;
                }

                if (this.space) {
                    this.pacmanSettings.yy = 0;
                } 
            }
        } else if (this.direction === 1) {
            this.pacmanSettings.xx = this.pacmanSettings.speed;

            if(this.mouthRotate) {
                if (!this.mouthState) {
                    this.startAngle -= 0.02;
                    this.endAngle += 0.02;
        
                    if (this.startAngle < -0.2 && this.endAngle > 0.2) this.mouthState = true;
                } else if (this.mouthState) {
                    this.startAngle += 0.02;
                    this.endAngle -= 0.02;
        
                    if (this.startAngle > -0.01 && this.endAngle < 0.01) this.mouthState = false;
                }

                if (this.space) {
                    this.pacmanSettings.yy = 0;
                }
            }

        } else if (this.direction === -2) {
            this.pacmanSettings.yy = -this.pacmanSettings.speed;

            if(this.mouthRotate) {
                if (!this.mouthState) {
                    this.startAngle -= 0.02;
                    this.endAngle += 0.02;
        
                    if (this.startAngle < 3.3 && this.endAngle > 3.7) this.mouthState = true;
                } else if (this.mouthState) {
                    this.startAngle += 0.02;
                    this.endAngle -= 0.02;

        
                    if (this.startAngle > 3.49 && this.endAngle < 3.51) this.mouthState = false;
                }

                if (this.space) {
                    this.pacmanSettings.xx = 0;
                }
            }

        } else if (this.direction === 2) {
            this.pacmanSettings.yy = this.pacmanSettings.speed;

            if (this.mouthRotate) {
                if (!this.mouthState) {
                    this.startAngle -= 0.02;
                    this.endAngle += 0.02;
        
                    if (this.startAngle < 2.3 && this.endAngle > 2.7) this.mouthState = true;
                } else if (this.mouthState) {
                    this.startAngle += 0.02;
                    this.endAngle -= 0.02;

        
                    if (this.startAngle > 2.49 && this.endAngle < 2.51) this.mouthState = false;
                }

                if (this.space) {
                    this.pacmanSettings.xx = 0;
                }
            }
        }

        // walls collides 
        for (let i = 0; i < this.walls.length; i++) {
            this.collidesWalls(this.pacmanSettings, this.walls[i]);
        }

        this.collidesWalls(this.pacmanSettings, this.redWall);

        // pills collides
        for (let i = 0; i < this.pills.length; i++) {
            if (this.collidesPills(this.pacmanSettings, this.pills[i])) {
                this.eatingPillsSound();
                this.pills[i].color = "black";
                this.scorePoint += 10;
                this.countPills--;
            }
        }

        // bonusPills collides
        for (let i = 0; i < this.bonusPills.length; i++) {
            if (this.collidesBonusPills(this.pacmanSettings, this.bonusPills[i])) {
                if (this.ghostTimeEnd1) {
                    clearTimeout(this.ghostTimeEnd1);
                    clearTimeout(this.ghostTimePreEnd1);

                    clearTimeout(this.ghostTimeEnd2);
                    clearTimeout(this.ghostTimePreEnd2);

                    clearTimeout(this.ghostTimeEnd3);
                    clearTimeout(this.ghostTimePreEnd3);

                    clearTimeout(this.ghostTimeEnd4);
                    clearTimeout(this.ghostTimePreEnd4);

                    clearInterval(this.whiteInterval1);
                    clearInterval(this.blueInterval1);

                    clearInterval(this.whiteInterval2);
                    clearInterval(this.blueInterval2);

                    clearInterval(this.whiteInterval3);
                    clearInterval(this.blueInterval3);

                    clearInterval(this.whiteInterval4);
                    clearInterval(this.blueInterval4);

                    if (this.ghostComeToNormal1 || this.ghostComeToNormal2 || this.ghostComeToNormal3 || this.ghostComeToNormal4) {
                        clearTimeout(this.ghostComeToNormal1);
                        clearTimeout(this.ghostComeToNormal2);
                        clearTimeout(this.ghostComeToNormal3);
                        clearTimeout(this.ghostComeToNormal4);
                    }
                }

                this.eatingBonusSound();
                this.bonusPills[i].color = "black";
                this.scorePoint += 50;
                this.countPills--;

                for (let i = 0; i < 4; i++) {
                    this.ghostSettings[i].color = "blue";
                    this.ghostSettings[i].speed = 1.5;

                    switch (i) {
                        case 0:
                            this.ghostTimePreEnd1 = setTimeout(() => {
                                if (this.ghostSettings[i].color === "blue") {
                                    this.whiteInterval1 = setInterval(() => {
                                        this.ghostSettings[i].color = "white";  
                                    }, 200);
        
                                    this.blueInterval1 = setInterval(() => {
                                        this.ghostSettings[i].color = "blue";  
                                    }, 400);
                                }
                            }, 5000);
        
                            this.ghostTimeEnd1 = setTimeout(() => {
                                clearInterval(this.whiteInterval1);
                                clearInterval(this.blueInterval1);
        
                                this.ghostSettings[i].color = this.ghostSettings[i].mainColor;
                                this.ghostSettings[i].speed = 3;
                            }, 7000);   
                            break;
                        case 1:
                            this.ghostTimePreEnd2 = setTimeout(() => {
                                if (this.ghostSettings[i].color === "blue") {
                                    this.whiteInterval2 = setInterval(() => {
                                        this.ghostSettings[i].color = "white";  
                                    }, 200);
        
                                    this.blueInterval2 = setInterval(() => {
                                        this.ghostSettings[i].color = "blue";  
                                    }, 400);
                                }
                            }, 5000);
        
                            this.ghostTimeEnd2 = setTimeout(() => {
                                clearInterval(this.whiteInterval2);
                                clearInterval(this.blueInterval2);
        
                                this.ghostSettings[i].color = this.ghostSettings[i].mainColor;
                                this.ghostSettings[i].speed = 3;
                            }, 7000);   
                            break;
                        case 2:
                            this.ghostTimePreEnd3 = setTimeout(() => {
                                if (this.ghostSettings[i].color === "blue") {
                                    this.whiteInterval3 = setInterval(() => {
                                        this.ghostSettings[i].color = "white";  
                                    }, 200);
        
                                    this.blueInterval3 = setInterval(() => {
                                        this.ghostSettings[i].color = "blue";  
                                    }, 400);
                                }
                            }, 5000);
        
                            this.ghostTimeEnd3 = setTimeout(() => {
                                clearInterval(this.whiteInterval3);
                                clearInterval(this.blueInterval3);
        
                                this.ghostSettings[i].color = this.ghostSettings[i].mainColor;
                                this.ghostSettings[i].speed = 3;
                            }, 7000);   
                            break;
                        case 3:
                            this.ghostTimePreEnd4 = setTimeout(() => {
                                if (this.ghostSettings[i].color === "blue") {
                                    this.whiteInterval4 = setInterval(() => {
                                        this.ghostSettings[i].color = "white";  
                                    }, 200);
        
                                    this.blueInterval4 = setInterval(() => {
                                        this.ghostSettings[i].color = "blue";  
                                    }, 400);
                                }
                            }, 5000);
        
                            this.ghostTimeEnd4 = setTimeout(() => {
                                clearInterval(this.whiteInterval4);
                                clearInterval(this.blueInterval4);
        
                                this.ghostSettings[i].color = this.ghostSettings[i].mainColor;
                                this.ghostSettings[i].speed = 3;
                            }, 7000);   
                            break;
                        default:
                            break;
                    }
                }

            }
        }

        // collides with ghost's
        for (let i = 0; i < 4; i++) {
            if (this.collidesGhost(this.pacmanSettings, this.ghostSettings[i])) {
                this.reset();
            }
        }

        // collides to eat ghost's
        for (let i = 0; i < 4; i++) {
            if (this.collidesEatGhost(this.pacmanSettings, this.ghostSettings[i])) {
                switch (i) {
                    case 0:
                        clearTimeout(this.ghostTimeEnd1);
                        clearTimeout(this.ghostTimePreEnd1);

                        clearInterval(this.whiteInterval1);
                        clearInterval(this.blueInterval1);

                        this.ghostComeToNormal1 = setTimeout(() => {
                            this.ghostSettings[i].speed = 2.5;
                            this.ghostSettings[i].color = this.ghostSettings[i].mainColor;  
                        }, 3000);
                        break;
                    case 1:
                        clearTimeout(this.ghostTimeEnd2);
                        clearTimeout(this.ghostTimePreEnd2);  
                        
                        clearInterval(this.whiteInterval2);
                        clearInterval(this.blueInterval2);

                        this.ghostComeToNormal2 = setTimeout(() => {
                            this.ghostSettings[i].speed = 2.5;
                            this.ghostSettings[i].color = this.ghostSettings[i].mainColor;  
                        }, 3000);
                        break;
                    case 2:
                        clearTimeout(this.ghostTimeEnd3);
                        clearTimeout(this.ghostTimePreEnd3);

                        clearInterval(this.whiteInterval3);
                        clearInterval(this.blueInterval3);

                        this.ghostComeToNormal3 = setTimeout(() => {
                            this.ghostSettings[i].speed = 2.5;
                            this.ghostSettings[i].color = this.ghostSettings[i].mainColor;  
                        }, 3000);
                        break;
                    case 3:
                        clearTimeout(this.ghostTimeEnd4);
                        clearTimeout(this.ghostTimePreEnd4);
                        
                        clearInterval(this.whiteInterval4);
                        clearInterval(this.blueInterval4);

                        this.ghostComeToNormal4 = setTimeout(() => {
                            this.ghostSettings[i].speed = 2.5;
                            this.ghostSettings[i].color = this.ghostSettings[i].mainColor;  
                        }, 3000);
                        break;
                    default:
                        break;
                }

                this.eatingGhostSound();
                this.scorePoint += 100;
                this.ghostSettings[i].color = "grey";
                this.ghostSettings[i].speed = 5.8;
            }
        }

        if (this.pacmanSettings.x + this.pacmanSettings.width < 0) {
            this.pacmanSettings.x = this.settings.bufferCtx.canvas.width;
        } else if (this.pacmanSettings.x > this.settings.bufferCtx.canvas.width) {
            this.pacmanSettings.x = -this.pacmanSettings.width;
        }
    }

    ghostRun() {    // like pacman logic, but less
        for (let i = 0; i < 4; i++) {
            this.ghostSettings[i].x += this.ghostSettings[i].xx;
            this.ghostSettings[i].y += this.ghostSettings[i].yy;
            
            if (this.ghostDirection[i] === -1) {
                this.ghostSettings[i].xx = -this.ghostSettings[i].speed;  
            } else if (this.ghostDirection[i] === 1) {
                this.ghostSettings[i].xx = this.ghostSettings[i].speed;
            } else if (this.ghostDirection[i] === -2) {
                this.ghostSettings[i].yy = -this.ghostSettings[i].speed;
            } else if (this.ghostDirection[i] === 2) {
                this.ghostSettings[i].yy = this.ghostSettings[i].speed;
            }


            for (let i = 0; i < this.walls.length; i++) {
                this.collidesWalls(this.ghostSettings[0], this.walls[i]);
                this.collidesWalls(this.ghostSettings[1], this.walls[i]);
                this.collidesWalls(this.ghostSettings[2], this.walls[i]);
                this.collidesWalls(this.ghostSettings[3], this.walls[i]);
            }


            if (this.ghostSettings[i].x + this.ghostSettings[i].width < 0) {
                this.ghostSettings[i].x = this.settings.bufferCtx.canvas.width;
            } else if (this.ghostSettings[i].x > this.settings.bufferCtx.canvas.width) {
                this.ghostSettings[i].x = -this.ghostSettings[i].width;
            }
        }
    }

    randomMap(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.map = Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    setMapToView() {
        this.view.getMap(this.map);
    }

    getRandom(min = -2, max = 2) {      //random direction for ghost's
        let arr = [];

        for(let i = 0; i < 4; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            arr.push(Math.floor(Math.random() * (max - min + 1)) + min); 
        }

        this.ghostDirection = arr;
    }

    collidesWalls(pacman, walls) {
        const dx = (pacman.x  + pacman.width / 2) - (walls.x + walls.width / 2);
        const dy = (pacman.y + pacman.height / 2) - (walls.y + walls.height /2)
        const width = (pacman.width + walls.width) / 2;
        const height = (pacman.height + walls.height) /2;
        const crossWidth = width * dy;
        const crossHeight = height * dx;

        if (Math.abs(dx) <= width && Math.abs(dy) <= height) { 
            if (crossWidth > crossHeight) {
                if (crossWidth > - crossHeight) { 
                    pacman.y = walls.y + walls.height;
                } else {
                    pacman.x = walls.x - pacman.width;
                }
            } else {
                if (crossWidth > -crossHeight) { 
                    pacman.x = walls.x + walls.width;
                } else{
                    pacman.y = walls.y - pacman.height;
                }
            }
        }
    }

    collidesPills(pacman, pills) {
        if(pills.color === "black") return false;

        return pacman.x < pills.x - pills.width &&
                pacman.x + pacman.width > pills.x &&
                pacman.y < pills.y + pills.height &&
                pacman.y + pacman.height > pills.y;
    }

    collidesBonusPills(pacman, bonusPills) {
        if(bonusPills.color === "black") return false;

        return pacman.x < bonusPills.x - bonusPills.width &&
                pacman.x + pacman.width > bonusPills.x &&
                pacman.y < bonusPills.y + bonusPills.height &&
                pacman.y + pacman.height > bonusPills.y;
    }

    collidesGhost(pacman, ghost) {
        if (ghost.color === "blue" || ghost.color === "grey" || ghost.color === "white") return false;

        return pacman.x < ghost.x + ghost.width - 30 &&
                pacman.x + pacman.width > ghost.x + 30 &&
                pacman.y < ghost.y + ghost.height - 30 &&
                pacman.y + pacman.height > ghost.y + 30;
    }

    collidesEatGhost(pacman, ghost) {
        if (ghost.color !== "blue" && ghost.color !== "white") return false;

        return pacman.x < ghost.x + ghost.width - 30 &&
                pacman.x + pacman.width > ghost.x + 30 &&
                pacman.y < ghost.y + ghost.height - 30 &&
                pacman.y + pacman.height > ghost.y + 30;
    }

    score() {
        this.view.getScore(this.scorePoint);
    }

    level() {
        this.view.getLvl(this.lvl);
    }

    livesSet() {
        this.view.getLives(this.lives);
    }

    setTimer() {
        this.view.getTime(this.time);

        requestAnimationFrame(this.setTimer.bind(this));
    }

    pacmanDeath() {   //anim pacman death
        if (!this.death) return;
        
        this.startAngle -= 0.01;
        this.endAngle += 0.01;

        requestAnimationFrame(this.pacmanDeath.bind(this));
    }

    reset() {     // reset if pacman die
        this.animBonus = true;
        this.resetGame = true;
        this.death = true;
        this.direction = null;
        this.ghostDirection = [];
        this.canMove = false;

        clearInterval(this.directionIntervalForGhost);

        requestAnimationFrame(this.pacmanDeath.bind(this));
        this.deathSound();

        setTimeout(() => {
            this.death = false;

            this.startAngle = null;
            this.endAngle = null;
    
            this.pacmanSettings.xx = 0; 
            this.pacmanSettings.yy = 0;

            if (this.map === 1 || this.map === 2) {
                this.pacmanSettings.x = this.pacmanSettings.startXSecond;
                this.pacmanSettings.y = this.pacmanSettings.startY;
            } else {
                this.pacmanSettings.x = this.pacmanSettings.startXFirst;
                this.pacmanSettings.y = this.pacmanSettings.startY;
            }
    
            for (let i = 0; i < 4; i++) {
                this.ghostSettings[i].xx = 0;
                this.ghostSettings[i].yy = 0;

                if (this.map === 1 || this.map === 2) {
                    this.ghostSettings[i].x = this.ghostSettings[i].startXSecond;
                    this.ghostSettings[i].y = this.ghostSettings[i].startY; 
                } else {
                    this.ghostSettings[i].x = this.ghostSettings[i].startXFirst;
                    this.ghostSettings[i].y = this.ghostSettings[i].startY; 
                }
            }
    
            this.lives--; 
    
            this.time = 4;
    
            if (this.lives < 0) {
                this.resetGame = true;
    
                window.location.hash = "end";
    
                this.settings = {
                    canvas: null,
                    ctx: null,
                    bufferCanvas: null,
                    bufferCtx: null,
                };
    
                this.time = 4;
    
                for (let i = 0; i < this.pillsSecond.length; i++) {
                    this.pillsSecond[i].color = "red";
                }
    
                for (let i = 0; i < this.bonusPillsSecond.length; i++) {
                    this.bonusPillsSecond[i].color = "red";
                }

                for (let i = 0; i < this.pillsThird.length; i++) {
                    this.pillsThird[i].color = "purple";
                }
    
                for (let i = 0; i < this.bonusPillsThird.length; i++) {
                    this.bonusPillsThird[i].color = "white";
                }

                for (let i = 0; i < this.pillsFirst.length; i++) {
                    this.pillsFirst[i].color = "white";
                }
    
                for (let i = 0; i < this.bonusPillsFirst.length; i++) {
                    this.pillsFirst[i].color = "white";
                }


                this.countPills = null;
    
                this.lvl = 1;
    
                this.lives = 3;
    
                this.updateState();  
            } else {
                this.setGame();
            } 
        }, 2500);
    }

    refresh() {     // refresh if pacman pass lvl
        if (this.ghostTimeEnd1) {
            clearTimeout(this.ghostTimeEnd1);
            clearTimeout(this.ghostTimePreEnd1);

            clearTimeout(this.ghostTimeEnd2);
            clearTimeout(this.ghostTimePreEnd2);

            clearTimeout(this.ghostTimeEnd3);
            clearTimeout(this.ghostTimePreEnd3);

            clearTimeout(this.ghostTimeEnd4);
            clearTimeout(this.ghostTimePreEnd4);

            clearInterval(this.whiteInterval1);
            clearInterval(this.blueInterval1);

            clearInterval(this.whiteInterval2);
            clearInterval(this.blueInterval2);

            clearInterval(this.whiteInterval3);
            clearInterval(this.blueInterval3);

            clearInterval(this.whiteInterval4);
            clearInterval(this.blueInterval4);

            if (this.ghostComeToNormal1) {
                clearTimeout(this.ghostComeToNormal1);
                clearTimeout(this.ghostComeToNormal2);
                clearTimeout(this.ghostComeToNormal3);
                clearTimeout(this.ghostComeToNormal4);
            }
        }

        clearInterval(this.directionIntervalForGhost);

        for (let i = 0; i < 4; i++) {
            this.ghostSettings[i].speed = 2.5;
            this.ghostSettings[i].color = this.ghostSettings[i].mainColor;  
        }

        if (this.map === 1) {
            for (let i = 0; i < this.pillsSecond.length; i++) {
                this.pillsSecond[i].color = "red";
            }

            for (let i = 0; i < this.bonusPillsSecond.length; i++) {
                this.bonusPillsSecond[i].color = "red";
            }
        } else if (this.map === 2) {
            for (let i = 0; i < this.pillsThird.length; i++) {
                this.pillsThird[i].color = "purple";
            }

            for (let i = 0; i < this.bonusPillsThird.length; i++) {
                this.bonusPillsThird[i].color = "purple";
            }
        } else {
            for (let i = 0; i < this.pillsFirst.length; i++) {
                this.pillsFirst[i].color = "white";
            }

            for (let i = 0; i < this.bonusPillsFirst.length; i++) {
                this.bonusPillsFirst[i].color = "white";
            }
        }

        this.animBonus = true;
        this.resetGame = true;
        this.death = true;
        this.direction = null;
        this.ghostDirection = [];

        this.startAngle = null;
        this.endAngle = null;

        this.pacmanSettings.xx = 0;
        this.pacmanSettings.yy = 0;

        this.canMove = false;

        if (this.map === 1 || this.map === 2) {
            this.pacmanSettings.x = this.pacmanSettings.startXSecond;
            this.pacmanSettings.y = this.pacmanSettings.startY;
        } else {
            this.pacmanSettings.x = this.pacmanSettings.startXFirst;
            this.pacmanSettings.y = this.pacmanSettings.startY;
        }

        for (let i = 0; i < 4; i++) {
            this.ghostSettings[i].xx = 0;
            this.ghostSettings[i].yy = 0;

            if (this.map === 1 || this.map === 2) {
                this.ghostSettings[i].x = this.ghostSettings[i].startXSecond;
                this.ghostSettings[i].y = this.ghostSettings[i].startY; 
            } else {
                this.ghostSettings[i].x = this.ghostSettings[i].startXFirst;
                this.ghostSettings[i].y = this.ghostSettings[i].startY; 
            }
        }
        
        this.countPills = null;

        this.lvl++;

        this.time = 4;

        this.randomMap(0, 2);

        this.setGame();
    }

    saveScore(_name) {
        let name = _name;
        let id = 0;

        myAppDB.ref("Users/").once("value")
        .then(function(snapshot) {
            id = snapshot.val().length;
        })
        .then(() => {
            myAppDB.ref(`Users/${id}/${name}`).set({
                score: `${this.scorePoint}`,
            })
            .catch(function (error) {
                console.error("Ошибка добавления пользователя: ", error);
            });

            this.scorePoint = 0;
        })
        .catch(function (error) {
            console.log("Error: " + error.code);
        });
    }

    getScore() {
        let arrScore = [];
        let that = this;

        myAppDB.ref("Users/").once("value")
        .then(function(snapshot) {
            for (let i = 0; i < snapshot.val().length; i++) {
                for (let key in snapshot.val()[i]) {
                    arrScore.push({name: key, score: +snapshot.val()[i][key].score});
                }
            }

            arrScore.sort((a, b) => a.score > b.score ? 1 : -1);
            arrScore.reverse();

            that.view.getRecords(arrScore);
        })
        .catch(function (error) {
            console.log("Error: " + error.code);
        });

        // myAppDB.ref("Users/").on("value", function(snapshot) {
        //     for (let i = 0; i < snapshot.val().length; i++) {
        //         for (let key in snapshot.val()[i]) {
        //             arrScore.push({name: key, score: +snapshot.val()[i][key].score});
        //         }
        //     }

        //     arrScore.sort((a, b) => a.score > b.score ? 1 : -1);
        //     arrScore.reverse();

        // }, function (error) {
        //     console.log("Error: " + error.code);
        // });
    }
}