// Constructor Functions -> new keyword ke sath function ko call karne ke liye use hota hai jisse hume ek blank object milta hai jisme hum properties aur methods add kar sakte hai. ye ek blue print ki tarah kaam karta hai jisse hum multiple objects bana sakte hai bina baar baar same code likhe.

// function Make(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let person1 = new Make("Alice", 30);
// let person2 = new Make("Alicia", 40);
// console.log(person1);
// make se ek blue print bana diya ki object kaisa dikhega aur uske baad new keyword se humne do object banaye person1 aur person2 jisme name aur age diye gaye hai.


// new se hamesha blank object banta hai
// function mein this ki value window hoti hai but kyuki humne yaha se new lagake call kiya hai toh ab this ki value wo blank object hogi jo new se bana hai. toh jab hum name aur age ko this ke through assign karte hai toh wo blank object ke andar name aur age ki properties ban jati hai aur unme values assign ho jati hai. isliye jab hum person1 ko console.log karte hai toh hume ek object milta hai jisme name "Alice" aur age 30 hota hai.

// function CreatePencil(name, company, color, units, price, msg) {
//     this.name = name;
//     this.company = company;
//     this.color = color;
//     this.units = units;
//     this.price = price;
//     this.msg = msg;
//     this.write = (msg) => {
//         let h1 = document.createElement("h1");
//         if(msg !== undefined) {
//             h1.innerText = msg;
//         } else {
//             h1.innerText = this.msg;
//         }
//             h1.style.color = this.color;
//             document.body.appendChild(h1);
//     }
// }
// let pencil1 = new CreatePencil("Nataraj", "hola" "black", 10, 20, "Hello World");
// let pencil2 = new CreatePencil("Nataraj", "hola", "red", 10, 20, "Hello World");


// Prototypes -> jo cheez har object ke liye same hai usse prototype bana do kyuki agar aise likhoge toh woh baar baar memory khayega aur agar usme koi change karna hai toh har object me change karna padega. isliye hum prototype bana ke usme common properties aur methods rakh sakte hai jisse memory bhi bachega aur change karna bhi easy ho jayega.
// function CreatePencil(name, color, units, price, msg) {
//     this.name = name;
//     this.company = "hola";
//     this.color = color;
//     this.units = units;
//     this.price = price;
//     this.msg = msg;
//     this.write = (msg) => {
//         let h1 = document.createElement("h1");
//         if (msg !== undefined) {
//             h1.innerText = msg;
//         } else {
//             h1.innerText = this.msg;
//         }
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }
// }
// let pencil1 = new CreatePencil("Nataraj", "black", 10, 20, "Hello World");
// let pencil2 = new CreatePencil("Nataraj", "red", 10, 20, "Hello World");

// function CreatePencil(name, color, units, price, msg) {
//     this.name = name;
//     this.color = color;
//     this.units = units;
//     this.price = price;
//     this.msg = msg;
//     this.write = (msg) => {
//         let h1 = document.createElement("h1");
//         if (msg !== undefined) {
//             h1.innerText = msg;
//         } else {
//             h1.innerText = this.msg;
//         }
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }
// }
// CreatePencil.prototype.company = "hola"; // company ko prototype me daal diya kyuki har pencil ke liye company same hai toh isse memory bhi bachega aur agar company change karna hai toh sirf prototype me change karna padega.
// let pencil1 = new CreatePencil("Nataraj", "black", 10, 20, "Hello World");
// let pencil2 = new CreatePencil("Nataraj", "red", 10, 20, "Hello World");

// agar constructor function koi field apne prototype par attach karle toh us constructor se banne wale saare new instances yaani ki objects ke paas wo field automatically chali jaati hai.
// prototype => shared memory jo ki ek baar deni padti hai fir baad mein share kar di jaati hai saare insatnces matlab ki objects ke beech mein. isse memory efficient ban jaata hai aur agar hume kisi common property ya method ko change karna hai toh hume sirf prototype me change karna padega aur wo change saare objects me reflect ho jayega.

function CreatePencil(name, color, units, price, msg) {
    this.name = name;
    this.color = color;
    this.units = units;
    this.price = price;
    this.msg = msg;
}
// CreatePencil.prototype.write = (msg) => {
//     let h1 = document.createElement("h1");
//     if (msg !== undefined) {
//         h1.innerText = msg;
//     } else {
//         h1.innerText = this.msg;
//     }
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
// }
// here as the function is fat arrow function here this will be window instead of the object so better use es5 function(normal function).
CreatePencil.prototype.write = function (msg){
    let h1 = document.createElement("h1");
    if (msg !== undefined) {
        h1.innerText = msg;
    } else {
        h1.innerText = this.msg;
    }
    h1.style.color = this.color;
    document.body.appendChild(h1);
}
CreatePencil.prototype.company = "hola";
let pencil1 = new CreatePencil("Nataraj", "black", 10, 20, "Hello World");
let pencil2 = new CreatePencil("Nataraj", "red", 10, 20, "Hello World");