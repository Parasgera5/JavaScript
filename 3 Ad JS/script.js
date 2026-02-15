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

// let a = 12;
// function x() {
//     console.log(a); // 12
// }
// function y() {
//     let a = 20;
//     x(); // 12
// }
// y(); // 12 kyuki lexically scoped hai js dynamialy hoti toh y function mein jo value hai a ki wo global variable a ki value ko override kar deti aur x function mein 20 print hota, lekin kyuki js lexically scoped hai toh x function mein global variable a ki value print hoti hai, jo ki 12 hai.




// Closures hote hai function jo kisi parent function ke andar ho aur andar wala function return ho raha ho, and wo andar wala returning function use kare koi parent function ka variable.
// toh us case mein wo inner function closure kehlata hai. closures ke through hum private variables create kar sakte hain, jise hum bahar se access nahi kar sakte hain, lekin inner function ke through access kar sakte hain. closures ke through hum data encapsulation achieve kar sakte hain, jismein hum apne data ko hide kar sakte hain, aur sirf inner function ke through access kar sakte hain. closures ke through hum apne code ko modular bana sakte hain, jismein hum apne code ko chhote chhote functions mein divide kar sakte hain, aur unhe reuse kar sakte hain.
// advantages of closures:
// 1. Data Encapsulation: Closures allow us to encapsulate data and create private variables that cannot be accessed from outside the function. This helps in protecting the data from unauthorized access and modification.
// 2. Modular Code: Closures enable us to write modular code by allowing us to break down our code into smaller functions that can be reused across different parts of our application.
// 3. Memory Efficiency: Closures can help in improving memory efficiency by allowing us to create functions that can access variables from their parent scope without having to create new variables for each function call.
// 4. stop global pollution => main global space ko pollute hone se bachata hai, kyunki closures ke through hum apne variables ko private bana sakte hain, aur unhe global scope mein define nahi karna padta hai.

// function ke khatam hone pe uske variables khatam ho jaate hai, par jab bhi closure banta hai toh us function and uske variables ka ek backlink banaya jata hai aur uska naam hota hai [[environment]]




// function outer() {
//     let count = 0; // private variable
//     function inner() { // closure
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// dono hi thik hai
// function outer() {
//     let count = 0; // private variable
//     return function inner() { // closure
//         count++;
//         console.log(count);
//     }
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3
// const counter2 = outer();
// counter2(); // 1
// counter2(); // 2
// counter2(); // 3
// counter2(); // 4



// encapsulation -> keval unhi chezon ka access dena jinki need hai baaki chupa lena.
function clickLimiter() {
    let click = 0;
    return () => {
        if (click < 5) {
            click++;
            console.log(`clicked: ${click} times`);
        }
        else console.error("click limit exceeded");
    }
}
// clickLimiter()(); // clicked: 1 times
// clickLimiter()(); // clicked: 1 times
// clickLimiter()(); // clicked: 1 times
// clickLimiter()(); // clicked: 1 times
// clickLimiter()(); // clicked: 1 times
let clicks = clickLimiter();
clicks(); // clicked: 1 times
clicks(); // clicked: 2 times
clicks(); // clicked: 3 times
clicks(); // clicked: 4 times
clicks(); // clicked: 5 times
clicks(); // click limit exceeded
clicks(); // click limit exceeded
click = 0;
console.log(click); // 0
clicks(); // click limit exceeded -> ye jo humne click 0 kiya hai ye us function wale click ko change nahi karega. toh wo click inside function wala encapsulated hai toh ye encapsulation mein bhi use hota hai.
