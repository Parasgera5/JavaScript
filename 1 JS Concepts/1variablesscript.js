// // global block function scopes
// var a = 12; // pure code mein kahi bhi use ho sakta hai

// {
//     var a = 12; // block ke andar kahi bhi use ho sakta hai -> aisa nahi hai pure code mein kahi bhi use ho sakta hai kyu kyuki bkl ki gandmasti hai
// }

// function hello(){
//     var a = 12; // function ke andar kahi bhi use ho sakta hai 
//     if(true){
//         var a = 13; // function ke andar kahi bhi use ho sakta hai 
//     }
// }

// console.log(a); 

// function hello(){

//     var a = 12; // function ke andar kahi bhi use ho sakta hai
//     var a = 12; // allowed

//     let a = 12; // function ke andar kahi bhi use ho sakta hai
//     // let a = 12; // not allowed
//     if(true){
//         let a = 13; // block ke andar kahi bhi use ho sakta hai
//         console.log(a); // 13
//     }
// }

// let jo hai wo apne parent block mein kahi bhi use ho sakta hai matlab ki apne ghar mein kisi bhi kamre mein use ho sakta hai kyuyki wo apne maa baap ke ghar ka hi hissa hai

// console.log(a);
// let a = 12;
// its tdz -> temporal dead zone => utna area jitne mein js ko pata toh hai ki variable hai but wo usko access nahi kar sakta matlab uski value nahi de sakta.


// console.log(a);
// var a = 12;



// Hoisting impact per type
// Hoisting -> jab ek variable ko js mein banate hai toh woh variable do hisso mein tut jata hai and uska declare part upar chala jata hai and uska initialization part neeche rehta jata hai.

// var a = 12;
// is upar wali line ke do hisse honge
// var a = undefined; ye line sabse top pe chali jayegi matlab yeh top nahi sabse top pe tabhi console.log pe undefined aaya tha.
// a = 12;

//                         var a = undefined;

// var a = 12; =>          console.log(a); => undefined

//                         a = 12;

// ye sara concept hoisting ka hota hai.


// ab let and const bhi hoised hote hai but jaise var ke case mein undefined milta tha top pe yaha pe no value toh isliye let and const reference error dete hai

// console.log(a);
// let a = 12;

// console.log(b);
// const b = 13;  
