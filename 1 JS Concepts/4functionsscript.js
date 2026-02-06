// jiske aage () aa gaya matlab vo variable hota hai.




// function dance(){
//     console.log("Dance");
// }
// dance();
// arrow or fat arrow function
// let a = () => {
//     console.log("Arrow Function");
// }
// a();
// function hello(bolo){
//     console.log(bolo);
// }
// hello("Hello World");
// let func = (msg) => {
//     console.log(msg);
// }
// func("Arrow Function with parameter");

// ye call back ka code hai
// let functionAsParameter = (func) => {
//     console.log("Function as parameter");
//     func("Message from function parameter");
// }
// functionAsParameter(func, func("Arrow Function with parameter"));
// // functionAsParameter(func);

// let f = function () {
//     console.log("Function expression");
// }
// f();

// let fu = function (msg) {
//     console.log(msg);
// }
// fu("Function expression with parameter");





// function funcc(){
//     console.log("Function Declaration. This is just a normal function.");
// }

// let funce = function(){
//     console.log("Function Expression. This function is stored in a variable.");
// }

// let funca = () => {
//     console.log("Arrow or fat arrow function Function. This function uses the arrow syntax.");
// }

// let callbackFunction = (message) =>{
//     console.log(message);
// }

// let callback = (callback) => {
//     console.log("This function is passed as a parameter to another function.");
//     callback("callback is called from function parameter");
// }
// callback(callbackFunction);


// let a = (animal) => {
//     console.log(`${animal} nach raha hai`);
// }
// a("Ghoda");

// let sum = (a, b) => {  //a, b -> parameters
//     return a + b;
// }
// console.log(sum(5, 10)); // output is 15 and 5, 10 -> arguments
// console.log(sum()); // NaN as undefined + undefined = NaN

// let sum1 = (a=0, b=0) => {  
//     return a + b;
// }
// console.log(sum(5, 10)); // 15
// console.log(sum()); // 0 as default values are used


// res function parameter
// function abcd(a, b, c, d, e, f, g, h, i, j){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(f);
//     console.log(g);
//     console.log(h);
//     console.log(i);
//     console.log(j);
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function restFunction(...res){
//     console.log(res);
//     console.log(res+1); // array + 1 -> string concatenation because array is object
// }
// restFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// jab arguments bohot saare hote hai tab unhe bohot saare paramenters mein nahi baant sakte hai isliye rest parameter use karte hai. rest parameter(...res) ek array bana deta hai jisme saare arguments aa jate hai.
// agar ... function ke parameter space mein lage toh wo rest parameter/operator hai and agar wo arrays and objects mein lage toh wo spread operator hai.
// rest operator/parameter sirf function ke parameter space mein hi use hota hai. ye array bana deta hai

// function restFunction1(a, b, c, ...res){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log("ab res wale");
//     console.log(res);
//     console.log(res+1); // array + 1 -> string concatenation because array is object
// }
// restFunction1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// let a = (val) => {
//     if(val == undefined){
//         return "bsdk argument toh dede"
//     }
//     return val;
// }

// console.log(a());
// console.log(a("hello"));

// let a = (val) => {
//     if(val == undefined){
//         return "bsdk argument toh dede"
//     }
//     return `${val} and iski length is ${val.length}`;
// }

// console.log(a("hello"));
// // console.log(a());


// First class functions
// functions jinko value ki tarah treat kiya ja sake means we can save them in variables and pass them as parameters to other functions wo first class functions hote hai.
// function abcd(val){
//     val();
// }
// abcd(function () {
//     console.log("Hello from first class function");
// });

// high order functions -> jo ki return kare ek function ya fir except kare ek function apne parameter mein. dono bhi kar sakta hai

// let a = function(val){ // a is higher order function
//     val();
// }
// a(function(){
//     console.log("Hello");
// })

// let b = function(){ // b is higher order function
//     return function(){
//         console.log("Hello");
//     }
// }
// console.log(b()());
// console.log(b());
// let c = b();
// console.log(c());
// b()()

// Pure vs impure functions
// aisa function jo ki bahar ki value ko na badle wo hai pure function -> pure function
// aisa function jo ki bahar ki value ko badle wo hai pure function ya kehlo jiska side effect ho -> impure function

// let a = 12;
// function print(){
//     console.log("Hello"); // pure function
// }
// function badado(){
//     a = a + 1; // impure function
// }



// Closures and lexcical scoping
// Closures -> ek function jo return kare ek or function and return hone function hamesha use karega parent function ka koi variable 
// function a() {
//     let a = 12;
//     return function() {
//         console.log("dekha ye hai clousure " + a); // as it is using parent function variable a
//     }
// }
// a() closure hai

// let a = 12;
// console.log(a); // 12
// function func(){
//     let a = 10;
//     console.log(a); // 10
// }
// func()

// Lexical Scoping
// function abcd(){
//     let a = 12; // ye a jo hai wo pure abcd function ke andar kahi bhi accessible hai => efgh and ijkl ke andar bhi hai
//     function efgh(){
//         let b = 10; // ye b jo hai wo sirf efgh function ke andar hi accessible hai => ijkl ke andar bhi hai
//         function ijkl(){
//             let c = 5; // ye c jo hai wo sirf ijkl function ke andar hi accessible hai => khali ijkl ke andar hi hai
//         }
//     }   
// }



// IIFE (Immediately Invoked Function Expression)
// Function without name and called at a time turant hi chal jayega
// (function (){

// })();

// (function(){
//     console.log("IIFE function called");
// })();



// Hoisting difference between declaration and expression
// ye function mein to kaam karta hai lekin function epxression mein nahi.
// abcd(); // Function Declaration can be called before its definition due to hoisting
// function abcd(){
//     console.log("Function Declaration called");
// }
// Upper code will work
// Below code will not work
// a(); // Function Expression cannot be called before its definition due to hoisting
// let a = () => {
//     console.log("Function Expression called");
// }
// ReferenceError: Cannot access 'a' before initialization

// Function statement ya kehlo ki normal function mein hoisting chal jaati hai lekin functino expression mein nahi.



// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function checking(...rest){
//     console.log(rest);
// }
// checking(a);
// checking(a[0]);
// checking(...a); // spread operator jo array ko alag alag elements mein baant deta hai.




// let receive = (func) => {
//     func();
// }
// receive(() => {
//     console.log("Kya haal chal hai bhai ke");
// })
// receive(function(){
//     console.log("Kya haal chal hai bhai ke");
// })

// (function func(){
//     let a = 12;

// })();
// console.log(a + "yaha pe a undefined aayega kyuki ye private var hai us iife ka"); // a is not defined because a is inside the function scope

// function abcd (){
//     let a = 12;
// }
// console.log(a + "yaha pe a undefined aayega kyuki ye private var hai us function ka"); // a is not defined because a is inside the function scope


// let dCal = (discount) => {
//     return function(price){
//         return price - (price * discount/100);
//     }
// }
// let ten = dCal(10); // ten is a function which gives 10% discount
// let twenty = dCal(20); // ten is a function which gives 10% discount
// console.log(ten(1000)); // 900
// console.log(twenty(1000)); // 800

// below written is closure example
// let a = () => {
//     let val = 12;
//     return function() {
//         console.log(val);
//         return val+1;
//     }
// }
// let b = a();
// let updated = b();
// console.log(updated);

// below written is HOF example
// let a = () => {
    //     let val = 12;
    //     return function() {
        //         console.log("hello world");
        //         return "hi there";
        //     }
        // }
        // let b = a();
        // let str = b();
        // console.log(str); 


let a = () => {
    let val = 12;
    return function() {
        console.log(val);
        return val+1;
    }
}
let b = a();
// console.log(updated1);
// var updated1 = b();
// console.log(updated1);

console.log(updated);
const updated = b();
console.log(updated);




