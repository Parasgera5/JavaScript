// let main = document.querySelector(".main");
// main.addEventListener("mouseover", (e)=>{
// window.addEventListener("mouseover", (e)=>{
    // if(e.target.tagName === "IMG"){
    //     e.target.style.transform = "scale(1.1)";
    //     e.target.style.transition = "all 0.3s ease-in-out";
    // }
    // main.style.transform = "scale(2.0)";
    // main.style.transform = `scale(${e.clientX/window.innerWidth + 1})`;
    // main.style.transition = "all 0.3s ease-in-out";

// });

let main = document.querySelector(".main");
window.addEventListener("mousemove", (e)=>{
    main.style.top = `${e.clientY}px`;
    main.style.left = `${e.clientX}px`;
    main.style.transform = `translate(-50%, -50%)`; 
    // with above do this also -> .main {
    //     transform: translate(-50%, -50%);
    // }
    
    // main.style.top  = `${e.clientY - main.offsetHeight / 2}px`;
    // main.style.left = `${e.clientX - main.offsetWidth / 2}px`;

    // main.style.top  = `${e.clientY - parseFloat(getComputedStyle(main).height) / 2}px`;
    // main.style.left = `${e.clientX - parseFloat(getComputedStyle(main).width) / 2}px`;
    
    // main.style.top = `${e.clientY - 100}px`;
    // main.style.left = `${e.clientX - 100}px`;

    // main.style.top = e.clientY + "px";
    // main.style.left = e.clientX + "px";
})