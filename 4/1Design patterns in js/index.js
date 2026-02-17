// design patterns
// module pattern -> it's a design pattern jisme hum apna code ek self executing function (IIFE) ke andar likhte hai, taaki variables aur functions private rahe.
// iske andar hum sirf wahi cheeze return karte hain jo bahar use karni hai.
// is pattern ka main fayda hai data hiding(encapsulation) aur clean structure, taaki code secure, reusable aur manageable ban sake.
// iife -> immidiately invoked function expression
// let func = (function() {
//     return 12;
// })();
// console.log(func); // 12
// iife ke andar jo bhi banega wo automatically private hi banta hai

// function hello(){
//     let a = 12;
// }
// hello()
// console.log(a);

// let hello = () => {
//     let a = 12;
// }
// console.log(a);

// let iife = (() => {
//     let a = 12;

// })()
// console.log(a)

// all the functions and variables in this bank is private they are not accessible outside so we returned an object that contains the names of the functions or variables that we have to use and we are able to access them outside using the bank.functionName. by this we make the bankBalance variable secure and we are not allowing the bankBalance variable to go outise or  access outside.
// let bank = (function () {
//     let bankBalance = 12000;
//     function checkBalance() {
//         console.log(bankBalance);
//     }
//     function setBalance(val) {
//         bankBalance = val;
//     }
//     function withdraw(val){
//         if(val <= bankBalance){
//             bankBalance -= val;
//             console.log(bankBalance);
//         }
//         else console.log("No that much amount left.");
//     }
//     return{
//         checkBalance,
//         setBalance,
//         withdraw 
//     };
// })();

// console.log(bank);
// bank.checkBalance();
// bank.withdraw(11000)
// bank.setBalance(22000)
// bank.checkBalance();
// revealing module pattern -> in this bass return karte time hum kisi aur naam se return karte hai matlab functions ya variables ka jo asli naam tha uski jagah hum koi aur naam de dete hai usse.
// let bank = (function () {
//     let bankBalance = 12000;
//     function checkBalance() {
//         console.log(bankBalance);
//     }
//     function setBalance(val) {
//         bankBalance = val;
//     }
//     function withdraw(val){
//         if(val <= bankBalance){
//             bankBalance -= val;
//             console.log(bankBalance);
//         }
//         else console.log("No that much amount left.");
//     }
//     return{
//         check: checkBalance,
//         set: setBalance,
//         draw: withdraw 
//     };
// })();

// console.log(bank);
// // now below three lines will not work as humne unka naam hi change kar diya
// // bank.checkBalance();
// // bank.withdraw(11000)
// // bank.setBalance(22000)
// // bank.checkBalance();
// bank.check();
// bank.draw(11000)
// bank.set(22000)
// bank.check();


// Factory function pattern
// ek function banate ho jo objects create karta hai(factory => objects banane ki machine)
// factory function pattern ek aisa design pattern hai jisme hum ek simple function likhte hai jo naye objects banakar return karta hai, bina class ya new keyword use kiye.
// is pattern ka main idea hai -> object creation ko ek function ke through control karna.
// har baar jab hum factory function call karte hai toh hume ek naya object mil jata hai jisme methods aur (agar chaho toh) private data rakh sakte ho.
// yeh pattern specially useful hai jab tumhe ek hi type ke bohot saare objects chahiye, jaise users, products, tasks, etc.

// let createProduct = (name, price) => {
//     let stock = 10;
//     return {
//         name,
//         price,
//         buy(quantity){
//             if(quantity <= stock){
//                 stock -= quantity;
//                 console.log(`Booked ${quantity} pieces & now ${stock} pieces left.`);
//             }
//             else {
//                 console.log(`Out of Stock, we only have ${stock} pieces left`);
//             }
//         },
//         refill(quantity){
//             stock += quantity;
//             console.log(`Refiiled the stock & now ${stock} pieces are there in the stock.`);
//         },
//         checkStock(){
//             console.log(`${stock} pieces left`);
//         }
//     }
// }

// let iPhone = createProduct("iphone", 70000);
// console.log(iPhone);
// iPhone.buy(5);
// iPhone.checkStock();
// iPhone.buy(5);
// iPhone.checkStock();
// iPhone.buy(5);
// iPhone.checkStock();
// iPhone.buy(25);
// iPhone.checkStock();


// Observer Pattern(Basic Pub Sub)
class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name} - You have subscribed the channel.`);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((subscriber) => subscriber != user)
        user.update(`${user.name} - You have unsubscribed the channel.`);
    }
    notify(message){
        this.subscribers.forEach((subscriber) => subscriber.update(message));
    }
}
class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        // console.log(data);
        console.log(`Hey ${this.name} ${data}`);
    }
}
let myChannel = new YoutubeChannel();
let user1 = new User("user1");
let user2 = new User("user2");
console.log(user1);
myChannel.subscribe(user1);
myChannel.subscribe(user2);
myChannel.notify("New video uploaded.");
myChannel.unsubscribe(user2);

