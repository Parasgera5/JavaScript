// Event Object -> target, type, preventDefault
let container = document.querySelector(".container");
container.addEventListener("click", function(e) { // e hi event object hai
    console.log(e);
}); 
// .target -> jis element pe event hua hai
// type = e.type; // event ka type kya hai -> click, mouseover, keyup, etc
// preventDefault = e.preventDefault(); // default behavior ko rokta hai mainly form mein kaam aata hai

let form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    console.log("Form submitted!");
    e.preventDefault(); // form ka default behavior rokh diya
});

window.addEventListener("load", (e) => {
    console.log("Page loaded or reloaded");
    // console.log(e.type); // load
});