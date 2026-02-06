let h1 = document.querySelector("h1");
console.dir(h1)

window.addEventListener("keyup", (e)=>{
    if(e.key === " ") h1.textContent = "space daba diya bhai ne waah bete"
    else h1.textContent = e.key;
    console.log(e)
    console.log(e.key)
})