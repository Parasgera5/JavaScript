// // jispe event aayega agar us element par event listener nahi hua toh hamara event uske parent element par chala jayega aur waha jaake event listener dhundhega aur aisa karte karte upar ki taraf move karta jayega jab tak ki window tak na pahuch jaye is process ko event bubbling kehte hai
// // main div
// //     nav div
// //         links
// //         button
// // agar button pe event listener mila toh chal jayega nahi mila toh nav div parent pe jaayega mila toh chal jayega nahi mila toh main div parent pe jaayega mila toh chal jayega nahi mila toh window tak jaayega window pe mila toh chal jayega nahi mila toh event khatam ho jayega kuch bhi nahi hoga is process ko event bubbling kehte hai


// document.querySelector(".nav").addEventListener("click", function(e) {
    //     alert("Nav Div Clicked");   
    // });
    
    // Event delegation -> ye ek aisa concept hai jisme hum ek parent element par event listener lagate hai aur uske child elements par hone wale events ko handle karte hai isse hume har ek child element par alag se event listener lagane ki zarurat nahi padti hai isse performance bhi better hoti hai aur code bhi clean hota hai    
    // document.querySelector("ul").addEventListener("click", (e)=>{
    // e.target.style.color = "white";
//     e.target.style.textDecoration = "line-through";
//     // if (e.target.tagName === "li") {
//     //     e.target.style.textDecoration = "line-through";
//     // }
// })
// document.querySelector("ul").addEventListener("click", (e)=>{
//     e.target.classList.toggle("lt");
//     // e.target.classList.add("lt");
// })
// isme event listener lagaya ul pe hai chal li pe raha hai this is event delegation -> isme event bubbling and event capturing ka concept bhi use hota hai.



// Event Bubbling and event capturing
// button pe click hoga fir iske parent c pe fir uske parent b pe fir uske parent a pe event propagate hoga is process ko event bubbling kehte hai

// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// });

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// });
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// });
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// });
// output of above code snippet
// button click
// c div
// b div
// a div

// Event Capturing -> Evenet bubbling ka ulta bas pattern niche se upar ki jagah upar se niche follow hota hai
// jab bhi hum click karte hai ya koi bhi event raise karte hai toh jo bhi event flow hai wo do phase mein propagate karta hai
// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event neeche wale element jaha se event raise hua hai waha se upar ki taraf jayega
// pehle phase 1 hota hai fir phase 2 hota hai


// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// });

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// });
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// });
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// }, true); // ye true ne capture phase ko enable kar diya hai
// // output of above code snippet
// // c div
// // button click
// // b div
// // a div

// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// });

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// }, true);
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// });
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// }, true); // ye true ne capture phase ko enable kar diya hai
// // output of above code snippet
// // a div
// // c div
// // button click
// // b div

// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// });

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// }, true);
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// }, true);
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// }, true); // ye true ne capture phase ko enable kar diya hai
// // output of above code snippet
// // a div
// // b div
// // c div
// // button click

// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// }, true); // isko true karenge toh bhi output pe farak nahi padega kyuki ye inner most child hai

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// }, true);
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// }, true);
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// }, true); // ye true ne capture phase ko enable kar diya hai
// // output of above code snippet
// // a div
// // b div
// // c div
// // button click

// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     // e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// }, true); // isko true karenge toh bhi output pe farak nahi padega kyuki ye inner most child hai

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// },);
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// },);
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// },); // ye true ne capture phase ko enable kar diya hai
// // output of above code snippet
// // button click
// // c div
// // b div
// // a div

// let button = document.querySelector("button");
// button.addEventListener("click", function(e) {
//     e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
//     alert("Button Clicked");
// }, true); // isko true karenge toh bhi output pe farak nahi padega kyuki ye inner most child hai

// let a = document.querySelector(".a");
// a.addEventListener("click", function() {
//     alert("a Div Clicked");
// },);
// let b = document.querySelector(".b");
// b.addEventListener("click", function() {
//     alert("b Div Clicked");
// },);
// let c = document.querySelector(".c");
// c.addEventListener("click", function() {
//     alert("c Div Clicked");
// },); // ye true ne capture phase ko enable kar diya hai
// // output of above code snippet
// // button click only as stopPropagation is used

let button = document.querySelector("button");
button.addEventListener("click", function(e) {
    e.stopPropagation(); // ye event bubbling ko rok deta hai isse parent element pe event nahi jayega
    alert("Button Clicked");
}, true); // isko true karenge toh bhi output pe farak nahi padega kyuki ye inner most child hai

let a = document.querySelector(".a");
a.addEventListener("click", function() {
    alert("a Div Clicked");
},);
let b = document.querySelector(".b");
b.addEventListener("click", function() {
    alert("b Div Clicked");
},);
let c = document.querySelector(".c");
c.addEventListener("click", function() {
    alert("c Div Clicked");
}, true); // ye true ne capture phase ko enable kar diya hai
// output of above code snippet
// c div
// button click
// as stopPropagation is used in button click event listener so event will not propagate to parent elements