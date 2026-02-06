let input = document.querySelector("input");
// console.dir(input)  
// input.addEventListener("click", (e)=>{
//     console.dir(input)
// })
let upload = document.querySelector(".upload");
upload.addEventListener("click", ()=>{
    // console.log("btn is clicked");
    input.click();
})
input.addEventListener("change", (e)=>{
    // console.dir(e);
    // console.log(e.target.files[0].name);
    // alert("You Selected: " + e.target.files[0].name);
    let file = e.target.files[0];
    if(file) upload.textContent = file.name;
    else upload.textContent = "Upload File";
})


