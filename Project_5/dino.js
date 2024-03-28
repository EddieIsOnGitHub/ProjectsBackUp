
// board
let board;
let boardWidth = 1050;
let boardHeight = 250;
let context;

// dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight
let dinoImg;

let dino = {
    x: dinoX,
    y: dinoY,
    width: dinoWidth,
    height: dinoHeight,
}

//cactus
let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 1000;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

//cactus moving speed
let velocityX = -8;
let velocityY = 0;
let gravity = .4;

let gameOver = false
let score = 0

window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d") // used for drwaing on the board

    //test 
    // context.fillStyle = "green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    };

    cactus1Img = new Image();
    cactus1Img.src = "./img/cac1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./img/cac2.png";

    cactus3Img = new Image();
    cactus3Img.src = "./img/cac3.png";


    requestAnimationFrame(update)
    setInterval(placeCactus, 500)
    document.addEventListener("keydown", moveDino);

};
function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //dino
    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);
    context.drawImage(dinoImg, dino.x, dino.y, dino.height, dino.width);

    //cactus
    for (let x = 0; x < cactusArray.length; x++) {
        let cactus = cactusArray[x];
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
        if (detectCollisiom(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "./img/dinod.jpg"
            dinoImg.onload = function () {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
                    console.log(`Well done, reload the page to try again`);

            }
        }
    }

    // score
    context.fillStyle = "black";
    context.font = "20px courier";
    score++;
    context.fillText(score, 5, 20)
}

function moveDino(e) {
    if (gameOver) {
        return;
    }

    if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
        velocityY = -10;
    }
}

function placeCactus() {
    if (gameOver) {
        return;
    }

    let cactus = {
        img: null,
        x: cactusX,
        y: cactusY,
        width: null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random(); // 0-.999999

    if (placeCactusChance > .90) { //10 % of getting cactus 3
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .70) {
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .50) {
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if (cactusArray.length > 5) {
        cactusArray.shift(); //shift = remove cactus form array because it gets too long for the code
    }
}

function detectCollisiom(a, b) {
    return a.x < b.x + b.width && //a top left corner doesn't reach b. top right corner
        a.x + a.width > b.x &&  //a top right corner passes b top left corner
        a.y < b.y + b.height && //a top left corner doesnt reach b bottom left corner
        a.y + a.height > b.y; // a bottom left corner passes b top left corner 
}

//Asynchronous

function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 3000) {

    }
    console.log("Get ready"); 
}
console.log("game is starting up");

let result = someLongRunningFunction();











