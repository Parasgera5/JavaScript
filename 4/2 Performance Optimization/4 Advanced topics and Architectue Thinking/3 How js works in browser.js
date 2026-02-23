// event loop, web api's, call stack/

// call stack (Execution Stack)
// 1. js is single-threaded => ek time par ek kaam only.
// 2. jab hum koi bhi function call karte hai toh wo stack ke top pe jata hai.
// 3. function complete hone ke baad stack se nikal jata hai (pop ho jata hai).

// let a = () => {
//     console.log("a");
// }
// let b = () => {
//     a();
//     console.log("b");
// }
// let c = () => {
//     b();
//     console.log("c");
// }
// c();


// Web Api's ke features hai ye -> console, setTimeoutx setInterval, alert, prompt -> ye saari cheeze js mein nahi hoti matlab ye sab js ka part nahi hoti. matlab kuch cheeze browser ki taraf se aati hai kuch cheeze js ki apni hoti hai.
// Web Api's -> js ke khud ke features jo hai wo toh js ka part hi ho gaye lekin kuch features jo browser deta hai js ko unko hum kehte hai web api's.
// node mein web api's wali cheeze kaam nahi karti => web api's supported nahi hoti node js mein kyuki node js toh js ka runtime hai toh js hi only supported hai node js mein.
// web api's are all the things that we get from the browser.
// console.log(window) // jab inspect mein browser ke hum ye likhenge toh hume web api's (browser) ki taraf se jo bhi prapt hota hai wo sab aa jayega.


// Event Loop
// js mein do type ke task hote hai -> Synchronous(turant -> pehle ye karo fir ye karo fir ye karo => line by line) and asynchronous(10 line of code hai toh 10 line of code ek baar pe chala do)
// Asynchronous wala code hai niche
setTimeout(() => {
    console.log("Hello 1");
}, 1000)
setTimeout(() => {
    console.log("Hello 2");
}, 1200)
setTimeout(() => {
    console.log("Hello 3");
}, 400)
setTimeout(() => {
    console.log("Hello 4");
}, 4000)
setTimeout(() => {
    console.log("Hello 5");
}, 5000)

// setTimeout web api's ke through aata hai
// jo bhi web api's ke through chlati hai wo complete hote hi hum usse callback queue mein dalte hai jisse hum task queue bhi kehte hai.
// there is a guy jiska naam hai event loop and there is another called call stack.
// jo bhi cheez call stack mein hoti hai usse hi chalaya jata hai.
// setTimeout directly call stack mein nahi jata kyuki ye asynchronous hai ye jata hai task queue mein ya callback queue mein.
// callback queue mein ye setTimeout wait karta hai main stack(matlab call stack) ke khali hone ka jiske baad ye uss main stack(matlab call stack) mein jayega and then execute hoga.
