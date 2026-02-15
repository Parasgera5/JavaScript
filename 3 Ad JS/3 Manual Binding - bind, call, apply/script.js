// bind, call, apply
// function ko call karte waqt hum set kar sakte hai ki uski this ki value kya hogi

// let obj = {
//     name: "hulala",
// };
// function hello(){
//     console.log(this);
//     console.log(this.name); // undefined => kyuki this ki value window hoti hai aur window ke andar name property nahi hoti hai toh isliye undefined aata hai
// }
// hello(); // Output: Window {...}
// ab hum chahte hai ki hello function ke andar this ki value obj ho jaye instead of window toh hum bind, call, apply ka use karte hai.

let obj = {
    name: "hulala",
};
function hello(){
    console.log(this);
    console.log(this.name);
}
hello.call(); // Output: Window {...} => call ke andar agar hum kuch bhi nahi dete hai toh this ki value window hoti hai
// is wali call pe humne kuch bhi pass nahi kiya hai toh this ki value window hoti hai
// matlab ki output will be:
//     1. Window {...}
//     2. undefined
// hello.call(obj); // ab this ki value object ho jayegi ya jo bhi humne pass kiya hoga -> Output: { name: "hulala" } => call ke andar agar hum obj dete hai toh this ki value obj hoti hai
// is wali call pe humne obj pass kiya hai toh this ki value obj hoti hai
// matlab ki output will be:
//     1. { name: "hulala" }
//     2. hulala




let object = {
    name: "hulala",
    age: 22
}
function hello(a, b, c){
    console.log(this, a, b, c);
}
hello.call(object, 1, 2, 3); // output: { name: 'hulala', age: 22 } 1 2 3 -> this -> { name: 'hulala', age: 22 } and a = 1, b = 2, c = 3
hello.apply(object, [1, 2, 3]); // output: { name: 'hulala', age: 22 } 1 2 3 -> this -> { name: 'hulala', age: 22 } and a = 1, b = 2, c = 3
hello.bind(object, 1, 2, 3) // output nothing
const func = hello.bind(object, 1, 2, 3) // it returns a function
func(); // output: { name: 'hulala', age: 22 } 1 2 3 -> this -> { name: 'hulala', age: 22 } and a = 1, b = 2, c = 3
// difference between call and apply is that in call we pass arguments one by one and in apply we pass arguments as an array. means apply takes only two arguments - first is the value of this and second is an array of arguments. call takes multiple arguments - first is the value of this and then the rest are the arguments. bind returns a new function with the value of this set to the provided value. call and apply call the function immediately while bind returns a new function that can be called later.