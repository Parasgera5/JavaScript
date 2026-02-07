// /* scope => ki aap apne created variables and functions ko kaha tak use kar sakte ho */
// // var se bana hua variable sirf apne parent function mein hi jana ja sakta hai.

// // function scope -> function mein hi use ho sakti hai. 
// // global scope -> jitne bhi variables aur functions global scope mein banaye jate hain, unhe hum kahi bhi use kar sakte hain. Global scope mein banaye gaye variables aur functions har jagah se access kiye ja sakte hain.
// // block scope -> block scope mein banaye gaye variables sirf us block ke andar hi access kiye ja sakte hain, jismein unhe banaya gaya hai. Block scope ka use let aur const keywords ke sath hota hai. Block scope ke andar banaye gaye variables ko block ke bahar access nahi kiya ja sakta hai.


// // const a = () => {
// //     var b = 10;
// // }
// // console.log(b); // a is not defined




// let a = 12; //global scope

// console.log(a); // 12
// {
//     let a = 20 // block scope
//     console.log(a); // 20
// }
// console.log(a); // 12

// function x() {
//     let a = 30; // function scope
//     console.log(a); // 30
// }
// x()
// console.log(a); // 12



// execution context -> abstract(hidden) hai ye -> hypothetical concept hai
// js sabse pehle jaise hi function dekhta hai wo sabse pehle banata hai execution context. ye process 2 phases mein chalta hai:-
//     1. Memory Phase -> js sabse pehle memory phase mein chalta hai, jismein wo apne variables aur functions ko memory mein allocate karta hai. is phase mein js apne variables ko undefined se initialize karta hai, aur functions ko unke actual code se initialize karta hai. is phase mein js apne variables aur functions ko memory mein allocate karta hai, taki wo unhe baad mein use kar sake.
//     2. Execution Phase -> js execution phase mein chalta hai, jismein wo apne code ko execute karta hai. is phase mein js apne variables aur functions ko use karta hai, aur unhe execute karta hai. is phase mein js apne code ko line by line execute karta hai, aur apne variables aur functions ko use karta hai, taki wo apne code ko execute kar sake.

//  Dynamic vs lexical scoping
//  js mein lexical hoti hai
// dynamic scoping -> dynamic scoping mein, jab ek function ko call kiya jata hai, to us function ke variables aur functions ko uske parent function ke variables aur functions ke sath access kiya jata hai. iska matlab hai ki agar ek function ke andar ek variable ya function define kiya jata hai, to wo variable ya function uske parent function ke variables aur functions ke sath access kiya jata hai. dynamic scoping mein, jab ek function ko call kiya jata hai, to us function ke variables aur functions ko uske parent function ke variables aur functions ke sath access kiya jata hai. iska matlab hai ki agar ek function ke andar ek variable ya function define kiya jata hai, to wo variable ya function uske parent function ke variables aur functions ke sath access kiya jata hai.

// lexical scoping -> ap kaha par physically available ho ispe depend karta hai ki aap kya access kar sakte ho. existed in js

// dynamic scoping -> kaha se call kar rahe ho uspe depend karta hai ki aap kya access kar sakte ho. not existed in js
// function abcd(){
//     let a = 12; // a lexically available hai abcd function ke andar
//     function efgh(){
//         console.log(a); // a lexically available hai efgh function ke andar bhi, kyunki wo abcd function ke andar hi defined hai.
//     }
// }

let a = 12;
function x() {
    console.log(a); // 12
}
function y() {
    let a = 20;
    x(); // 12
}
y(); // 12 kyuki lexically scoped hai js dynamialy hoti toh y function mein jo value hai a ki wo global variable a ki value ko override kar deti aur x function mein 20 print hota, lekin kyuki js lexically scoped hai toh x function mein global variable a ki value print hoti hai, jo ki 12 hai.