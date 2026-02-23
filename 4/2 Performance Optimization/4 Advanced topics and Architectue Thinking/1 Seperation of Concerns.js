// DOM vs Logic
// humko hamare dom ke ui ka code alag rakhna chahiye and logic ka code alag rakhna chahiye.
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

// btn.addEventListener("click", () => {
//     const num1 = Math.floor(Math.random() * 10);
//     const num2 = Math.floor(Math.random() * 10);
//     let add = num1 + num2;
//     let li = document.createElement("li");
//     li.textContent = add;
//     ul.appendChild(li);
// })
// isme kyuki dom and logic ek sath hai ye kharab code hai abhi kyuki example chota hai toh iska tanta nahi bolega but bade codes mein aisa kiya toh aisi taisi honi tai hai.
let add = (a, b) => {
    return a + b;
}
// logic alag jo add kar raha hai
btn.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    let addd = add(num1, num2);
    let li = document.createElement("li");
    li.textContent = addd;
    ul.appendChild(li);
})
// dom alag jo append kar raha hai => dom manipulation alag.