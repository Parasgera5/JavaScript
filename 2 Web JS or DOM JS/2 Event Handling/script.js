// browser mein page par koi bhi harkat kardo event raise ho jayega
// event matlab hota hai kuch action hua
// event listener ka matlab hai apne koi action ka reaction kiya

// Event Binding
// element.addEventListener("eventName", ()=>{

// });

let h1 = document.querySelector("h1");
h1.addEventListener("click", ()=> {
    h1.style.color = "red";
})

// mouseenter → fires once when cursor enters
// or
// mouseover → fires multiple times (even when hovering child elements)

// mouseout → fires once when cursor leaves
// or
// mouseleave → fires once when cursor leaves (does not fire when hovering child elements)

// mousemove -> jab ap mouse ko move karte ho tab ye event fire hota hai

window.addEventListener("mousemove", (e)=>{
    console.log(e)
    // window.document.body.style.backgroundColor = `rgb(${e.clientX/5}, ${e.clientY/5}, ${e.clientX/e.clientY})`;
    window.document.body.style.backgroundColor = `rgb(${e.clientX/5}, ${e.clientY/5}, 100)`;
});

let p = document.querySelector("p");

let originalBg = getComputedStyle(p).backgroundColor;

// p.addEventListener("mouseenter", () => {
//     p.style.backgroundColor = "blue"
// })
// p.addEventListener("mouseleave", function(){
//     p.style.backgroundColor = "transparent";
// });
// p.addEventListener("mouseleave", function(){
//     p.style.backgroundColor = originalBg;
// });

// below wali same thing different tarike se below ke niche
// p.addEventListener("dblclick", ()=>{
//     p.style.color = "yellow";
//     p.style.backgroundColor = "cyan"
// })

// p.classList.add("dbl");

p.addEventListener("dblclick", ()=>{
    p.classList.add("dbl");
    // p.classList.toggle("dbl");
})

const dblclick = () =>{
    p.style.fontSize = "45px";
}

p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick", dblclick);
// removeEventListener mein wahi same function pass karna hota hai jo addEventListener mein lagaya ya call kiya hota hai toh alag se function banake hi call karna chahiye addEventListener and removeEventListener mein

// console.dir(p)

// Common Events -> click, input, change, submit, mouseOver, keyUp and many more

let div = document.querySelector("div");
function onClick(){
    div.style.color = "red";
}
div.addEventListener("click", onClick);

let input = document.querySelector("input");
// input.addEventListener("input", ()=>{
//     // console.log("waah bete");
// })
// // input.addEventListener("input", ()=>{
// //     console.log(input.value); // jo input field mein hoga wo print ho jayega update hone ke sath sath.
// // })
// input.addEventListener("input", (e)=>{
//     console.log(e);
// })
// input.addEventListener("input", (e)=>{
//     console.log(e.data); // jo jo dabate ja rahe hao wo wo print hota jayega, backspace ke liye ye value null hogi and space ke liye empty(kuch nahi)
// })
input.addEventListener("input", (e)=>{
    if(e.data !== null) console.log(e.data);
})


// let input = document.querySelector("input");
// input.addEventListener("input", (e)=>{
//     if(e.data !== null){
//         console.log(e.data);
//     }
// });





// change event -> tab chalta hai jab apka koi input select ya textarea mein koi change ho jaye.
// let select = document.querySelector("select");
// select.addEventListener("change", (e)=>{
//     // console.log(e)
//     console.log(e.target.value)
// });

// let selectedFood = document.getElementById("selectedFood");
// console.dir(selectedFood);
let selectedFood = document.querySelector("#selectedFood");
console.log(selectedFood);
console.dir(selectedFood.textContent);
let select = document.querySelector("select");
select.addEventListener("change", (e)=>{
    // console.log(e)
    console.log(e.target.value);
    // selectedFood.textContent = "You Selected: " + e.target.value;
    selectedFood.textContent = `You Selected: ${e.target.value}`;
});

