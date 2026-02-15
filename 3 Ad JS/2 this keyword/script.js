// this keyword special keyword hai. kyuki jaise ki baaki saare keywords ki value ya unka nature, this keyword ki value ya nature badal jata hai depending upon where we are using it.
// class Person {
//     constructor(name, age) {
//       this.name = name; // 'this' refers to the new Person instance
//       this.age = age;   // assigns the 'age' property to the new object
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name}`); // 'this' accesses the instance's name
//     }
//   }
  
//   const person1 = new Person("John", 25);
//   person1.greet(); // Output: Hello, my name is John



// global scope
console.log(this); // In a browser, this will refer to the global window object -> gloabl scope mein this ki value window hoti hai
// window hai pradhan mantri => supreme thing

// function scope
const a = () => {
    console.log(this); // In an arrow function, 'this' retains the value of the enclosing context (global scope in this case) => still in t he function also the value of this is window.
}
a();

// method scope
const obj = {
    name: "hulala",
    greet: function() {
        console.log(this); // In a regular function, 'this' refers to the object that called the method => method ke andar this ki value us object hoti hai jisne us method ko call kiya hai.
    }
    // object ke andar ka functino -> method -> hai wo function hi but usse kehte method hai
};
obj.greet(); // Output: { name: "hulala", greet: [Function: greet] }
// method ke this ki value object hoti hai => this method ke andar ek pura object hota hai.
const obj2 = {
    name: "hulala2",
    greet: () => {
        console.log(this) // arrow function bante hi this apni value ko loose kardega ab this ki value firse window hogi ->  In an arrow function, 'this' retains the value of the enclosing context (global scope in this case) => arrow function ke andar this ki value uss context ki value hoti hai jisme wo defined hai. toh is case mein obj2 ke andar greet ek arrow function hai toh iske andar this ki value global scope ki value hogi yani window object.
    }
}
// aisa isliye kyuki arrow function hamesha apne this ki value parent se lete hai. -> yaha pe arrow function ka parent obj jo global hai and global mein this ki value window hoti hai -> toh arrow function ke case mein toh hamesha this ki value wo hogi jo uske parent ki value hogi.
obj2.greet(); // Output: Window { ...
console.log("idhar hu mein")
// humeha yaad rakhna hai ki object ke andar arrow function nahi bana -> es5 function banana hai
const obj3 = {
    name: "hulala3",
    greet: function() {
        console.log(this);
        function a(){
            console.log(this) // ab ye value firse window hogi kyuki ye ek normal function hai toh iske andar this ki value global scope ki value hogi yani window object. isko apni value retain karane ke liye isko fat arrow function banana padega ya iske andar this ko kisi variable mein store karna padega
        }
    }
}
const obj4 = {
    name: "hulala4",
    greet: function() {
        console.log(this);
        const a = () => {
            console.log(this) // ab ye value obj4 hogi kyuki ye ek arrow function hai toh iske andar this ki value uss context ki value hogi jisme wo defined hai. toh is case mein obj4 ke andar greet ek normal function hai toh iske andar this ki value obj4 hogi aur a ek arrow function hai toh iske andar this ki value uss context ki value hogi jisme wo defined hai yani obj4.
        }
        a();
    }
}
const obj5 = {
    name: "hulala5",
    greet: function() {
        console.log(this);
        const that = this; // this ko kisi variable mein store karna padega
        function a(){
            console.log(that) // ab ye value obj5 hogi kyuki isne this ko that mein store kar diya hai toh iske andar that ki value obj5 hogi
        }
        a();
    }
}

// event handler
document.querySelector("h1").addEventListener("click", function() {
    // alert();
    console.log(this); // add event listener mein this wo hoga jispe event listener laga hai => event handler ke andar this uss element ko refer karta hai jispe event listener laga hota hai. toh is case mein this is -> h1 element. iska output h1 element hoga -><h1>hello hye bye bye</h1> -> <h1 style = "color: "red";>hello hye bye bye</h1>
    console.log(this.style.color = "red"); // iska output red hoga 
});
// event handler mein this wo hoga jispe event listener laga hai.

// class
class Main{
    // let a = 12; // Unexpected token. A constructor, method, accessor, or property was expected.
    // var a = 12; // Unexpected token. A constructor, method, accessor, or property was expected.
    a = 12; // ye chalega classes mein
    constructor(name) {
        this.name = name; // class ke andar this ki value uss instance ko refer karti hai jo class se ban raha hai.
        console.log("hulala");
    }
}
let val = new Main("hulala"); // Output: hulala
// val -> Main class ka instance hai
// new ek blank object banata hai
// new Main("hulala") ne constructor ko call karta hai
// blank object ke andar name property add karega jiski value "hulala" hogi
// new ne blank object create kiya ab ye blank object constructor ke andar this ki value ban gaya hai => this.name ab aise dekho {}.name -> ab is blank object mein name naam ki field banjayegi jiski value "hulala" hogi ya jobhi hamne bheji hogi


// arrow function and lexical this -> arrow function ke case mein how this ki value changes -> jo parent ki value hogi wahi arrow function ke this ki value hogi. Lexical(means physical) this means kaha pe wo this present hai physically uska farak padega this ki value pe.



// this values inside:
// global -> window
// event handler -> element jispe event listener laga hai
// class -> blank object -> instance jispe class se object ban raha hai
// function -> arrow function -> global => window
// method with es5 function -> object
// method with es6 arrow function -> global => window
// es5 function inside es5 function (method inside object) -> global => window
// es6 arrow function inside es5 function (method inside object) -> object