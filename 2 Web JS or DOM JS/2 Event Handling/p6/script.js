const maze = [
    [1,1,1,1,1,1,1],
    [1,0,0,0,1,0,1],
    [1,0,1,0,1,0,1],
    [1,0,1,0,0,0,1],
    [1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1],
];
let player = {x: 1, y: 1};
let goal = {x: 5, y: 5};

const game = document.querySelector(".game");
const msg = document.querySelector(".msg");

function drawMaze() {
    game.innerHTML = "";
    maze.forEach((row, y) => {
        row.forEach((cell, x) => {
            const div = document.createElement("div");
            div.classList.add("cell");
            if(cell === 1) {
                div.classList.add("wall");
            }
            if(player.x === x && player.y === y) {
                div.classList.add("player");
            }
            if(goal.x === x && goal.y === y) {
                div.classList.add("goal");
            }
            game.appendChild(div);
        });
    });
}

function movePlayer(dx, dy) {
    const moveX = player.x + dx;
    const moveY = player.y + dy;

    if (maze[moveY][moveX] === 0) {
        player.x = moveX;
        player.y = moveY;
    }

    if (player.x === goal.x && player.y === goal.y) {
        msg.innerText = "🎉 YOU WIN!";
        window.removeEventListener("keyup", handleKey);
    }

    drawMaze();
}

function handleKey(e) {
    if (e.key === "ArrowUp" || e.key === "w") movePlayer(0, -1);
    if (e.key === "ArrowDown" || e.key === "s") movePlayer(0, 1);
    if (e.key === "ArrowLeft" || e.key === "a") movePlayer(-1, 0);
    if (e.key === "ArrowRight" || e.key === "d") movePlayer(1, 0);
}

window.addEventListener("keyup", handleKey);

drawMaze();