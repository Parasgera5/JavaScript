// constructor() is a special method in a class that is automatically called when an instance of the class is created. It is used to initialize the properties of the object. In the example you provided, when you create a new instance of the CreatePencil class using `new CreatePencil()`, the constructor method will be executed, allowing you to set up any necessary properties or perform any initialization tasks for that instance. iska kaam hai ki jab bhi hum class se ek naya object banate hai toh constructor method automatically call hota hai aur usme hum apne object ke properties ko initialize kar sakte hai. isliye jab hum `new CreatePencil()` karte hai toh sabse pehle constructor method chalta hai aur usme hum apne object ke properties ko set kar sakte hai.
// class CreatePencil {
//     constructor(name, color, units, price, msg) {
//         this.name = name;
//         this.color = color;
//         this.units = units;
//         this.price = price;
//         this.msg = msg;
//     }
//     write = (msg) => {
//         let h1 = document.createElement("h1");
//         if (msg !== undefined) {
//             h1.innerText = msg;
//         } else {
//             h1.innerText = this.msg;
//         }
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }

//     erase(){
//         document.body.querySelectorAll("h1").forEach((element) => {
//             if(element.style.color === this.color) element.remove();
//         });
//     }
// }
// new CreatePencil(); // ye karte hi sabse pehle constructor chalta hai
// CreatePencil.prototype.company = "hola";
// let pencil1 = new CreatePencil("Nataraj", "black", 10, 20, "Hello World");
// let pencil2 = new CreatePencil("Nataraj", "red", 10, 20, "Hello World");



// extends and super -> extends ka use karte hai jab hume ek class ke properties aur methods ko dusri class me use karna hota hai. super ka use karte hai jab hume parent class ke constructor ko call karna hota hai child class ke constructor me. isse hum parent class ke properties ko child class me initialize kar sakte hai. isliye jab hum ek class ko dusri class se extend karte hai toh child class automatically parent class ke properties aur methods ko inherit kar leti hai aur agar hume parent class ke constructor ko call karna hai toh hum super ka use kar sakte hai child class ke constructor me.

class User {
    constructor(name, address, username, email, role = "user") {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }

    checkRole() {
        console.log(`you are a ${this.role}`);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email); // super se parent ka constructor call ho jayega aur automatically ye saare paramaters waha pass kardega jo humne Admin ke constructor me diye hai. toh ab Admin class ke object banate time hume name, address, username aur email dena padega aur woh automatically User class ke constructor me chala jayega aur waha se initialize ho jayega. aur iske baad humne role ko "admin" set kar diya hai kyuki admin ka role hamesha "admin" hota hai.
        this.role = "admin";
    }

    remove() {
        document.querySelectorAll("h1").forEach(function (elem) {
            elem.remove();
        });
    }
}

let u1 = new User(
    "Harsh",
    "Bhopal",
    "async123",
    "hey@heyhey.com"
);

let u2 = new User(
    "Harshita",
    "Delhi",
    "harshiiiiitaaa",
    "hey2@heyhey.com"
);

let a1 = new Admin(
    "admin1",
    "India",
    "adminnnn",
    "a@a.a"
);

u1.write("Hello from Harsh");
u2.write("Hello from Harshita");

u1.checkRole();  
a1.checkRole();  

// a1.remove();

// Prototypal inheritance(only in js) vs classical inheritance(exist in every oops language(c++, java, js, python), extends -> classes banana and unhe extend kardena)

// inheritance -> class mein class ko extend/inherit karna
// prototypal inheritance -> object mein object ko extend/inherit karna
// let coffee = {
//     color: "dark",
//     drink: function () {
//         console.log("gut gut gut");
//     }
// };

// let arabiataCoffee = Object.create(coffee);

// console.log(arabiataCoffee);

// arabiataCoffee.taste = "bitter";

// arabiataCoffee.drink();



// Encapsulation with private fields (#)
// What is Encapsulation -> Hide internal data and control access through methods. So users can’t directly mess with your object state.
// Without encapsulation
// class BankAccount {
//     balance = 0;
// }
// let acc = new BankAccount();
// acc.balance = -1000000;


class BankAccount {
    #balance;   // private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

let acc1 = new BankAccount(1000);

acc1.deposit(500);
acc1.withdraw(300);

console.log(acc1.getBalance()); // 1200

// console.log(acc1.#balance); // private field ko directly access nahi kar sakte, error aayega