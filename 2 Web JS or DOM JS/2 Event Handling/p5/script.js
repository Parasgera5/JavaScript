let main = document.querySelector(".main");

let x = 200;
let y = 200;
let step = 40;

const boxWidth = 200; // for boundaries
const boxHeight = 200; // for boundaries

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "w") y -= step;
    if (e.key === "ArrowDown" || e.key === "s") y += step;
    if (e.key === "ArrowLeft" || e.key === "a") x -= step;
    if (e.key === "ArrowRight" || e.key === "d") x += step;

    x = Math.max(0, Math.min(x, window.innerWidth - boxWidth)); // for boundaries
    y = Math.max(0, Math.min(y, window.innerHeight - boxHeight)); // for boundaries

    main.style.top = y + "px";
    main.style.left = x + "px";
});