// let input = document.querySelector("input");
// let span = document.querySelector("span");
// input.addEventListener("input", function(e) {
//     // console.log(e.target.value.length);
//     console.log(input.value.length);
//     span.textContent = input.value.length;
// });

let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", function(e) {
    let length = 20 - e.target.value.length;
    span.textContent = length;
    if(length < 0) span.style.color = "red";
    else span.style.color = "white";
});