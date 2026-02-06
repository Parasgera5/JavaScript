// shehar ke saare kutte -> arrays
// shehar ke saare trees -> arrays
// shehar ke saare bade bussinesses sabke owner Paras Gera and Lakshit Gera  under HDLP PVT LTD -> objects


// object tab banate hai jab ek entity ke baare me sabkuch chahiye ek entity ke baare mein hi saari information store karni hai.


// ek kutte ki details chahiye humein -> objects
// saare kuttoo ki details chahiye -> arrays of objects

// let obj = {}; // empty object or blank object
// let a = {
//     name: "harsh",
//     age: 21,
//     khaana: "roti",
// };
// console.log(a.name);
// console.log(a.age);
// console.log(a.khaana);
// console.log(a['name']);
// console.log(a['age']);
// console.log(a['khaana']);
// console.log(a["name"]);
// console.log(a["age"]);
// console.log(a["khaana"]);


// let a = {
//     name: "harsh",
//     age: 21,
//     khaana: "roti",
// }
// console.log(a);
// let b = "name";
// a.b = "paras";
// console.log(a.b); 
// console.log(a);

// let c = "b";
// a[c] = "lakshit"; // is tarike se object ki keys access kar sakte hai
// console.log(a.b); 
// console.log(a);

// let d = age; // ReferenceError: age is not defined 
// a['d'] = 22;
// console.log(a);

// a.name = "hello" or a['name'] = "hello" or a["name"] = "hello"  -> ye teeno same hai

// const user = {
//     name: "xyz",
//     age: 25,
//     address:{
//         state: "Haryana",
//         city: "Faridabad",
//         pin: 121001,
//         location: {
//             lat: 124587,
//             lon: 120356
//         }
//     }
// }
// console.log(user);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.location.lat);
// console.log(user['address']['location']['lon']);
// console.log(user['address'].location.lat);
// console.log(user.address['location'].lon);
// console.log(user['address'].city);
// console.log(user.name);
// console.log(user['name']);
// console.log(user.age);
// console.log(user['age']);
// user.age = 26;
// console.log(user.age);
// user['name'] = "abc";
// console.log(user.name);
// user.address.city = "Gurgaon";
// console.log(user.address.city);
// user['address']['pin'] = 121002;
// console.log(user.address.pin);
// user.address.location.lat = 987654;
// console.log(user.address.location.lat);
// user['address']['location']['lon'] = 456321;
// console.log(user.address.location.lon);
// user.address.country = "India"; // nayi key add kar di object me
// console.log(user.address.country);
// console.log(user);
// user['hobbies'] = ['reading', 'coding', 'gaming']; // nayi key add kar di object me
// console.log(user.hobbies);
// console.log(user);
// user.hobbies.push('traveling'); // existing array me nayi value add kar di
// console.log(user.hobbies);
// console.log(user);
// user.address.location.timezone = "IST"; // nested object me nayi key add kar di
// console.log(user.address.location.timezone);
// console.log(user);

// const{lat, lon} = user.address.location; // destructuring of object
// console.log(lat);
// console.log(lon);
// const {name, age} = user; // destructuring of object
// console.log(name);
// console.log(age);
// const {city, pin} = user.address; // destructuring of nested object
// console.log(city);
// console.log(pin);
// const {hobbies} = user; // destructuring of object
// console.log(hobbies);
// const [firstHobby, secondHobby] = user.hobbies; // destructuring of array inside object
// console.log(firstHobby);
// console.log(secondHobby);
// // const {thirdHobby} = user.hobbies; // undefined
// // console.log(thirdHobby);
// const {timezone} = user.address.location; // destructuring of nested object
// console.log(timezone);
// const {country} = user.address; // destructuring of nested object
// console.log(country);


// let a = {
//     name: "harsh",
//     age: 21,
//     khaana: "roti",
//     email: "abc@gmail.com"
// };
// console.log(a);
// console.log(a.name);
// console.log(Object.keys(a)); // returns array of keys
// console.log(Object.values(a)); // returns array of values
// console.log(Object.entries(a)); // returns array of key-value pairs as arrays => array of arrays
// for (let key in a) {
//     console.log("key is:", key, "and value is:", a[key]);
//     console.log("key is:", key, "and value is:", a.key); // undefined because a.key is not valid way to access value using key variable
// }

// const b = { ...a }; // spread operator to copy object deep copy
// console.log(b);
// b.name = "paras";
// console.log(b);
// console.log(a);

// let c = a; // reference copy
// console.log(c);
// c.name = "lakshit";
// console.log(c);
// console.log(a);

// let d = Object.assign({}, a); // deep copy using Object.assign() same as spread operator
// console.log(d);
// let e = Object.assign({ "hello": "hye bye bye" }, a); // deep copy using Object.assign() same as spread operator
// // dono hi ek baat hai -> let e = Object.assign({"hello": "hye bye bye"}, a); // deep copy using Object.assign() same as spread operator
// console.log(e);

// when we copy object using = operator then both variables point to same object in memory
// when we copy object using spread operator then both variables point to different objects in memory


// let a = {
//     name: "harsh",
//     age: 21,
//     khaana: "roti",
//     address: {
//         city: "Faridabad",
//         state: "Haryana"
//     }
// }

// let b = { ...a }; // shallow copy using spread operator
// console.log(b);
// b.address.city = "Gurgaon";
// console.log(b);
// console.log(a); // original object bhi change ho gaya kyunki nested object ka reference copy hua hai
// nested object ki reference copy hoti hai spread operator se bhi or Object.assign() se bhi iske liye deep clone karna padta hai



// let a = {
//     name: "harsh",
//     age: 21,
//     khaana: "roti",
//     address: {
//         city: "Faridabad",
//         state: "Haryana"
//     }
// }
// let s = JSON.stringify(a); // convert object to string
// console.log(s); // convert object to string
// let b = JSON.parse(s); // convert string to object (not always object but generally to the original state of that variable)
// console.log(b); // convert string to object

// console.log(a);
// let b = JSON.parse(JSON.stringify(a)); // deep clone using JSON methods
// console.log(b);
// b.address.city = "Gurgaon";
// console.log(b);
// console.log(a); // original object nahi change hoga kyunki deep clone hua hai

// JSON.parse(JSON.stringify(objectName)) -> is tarike se hum kisi bhi object ka deep clone kar sakte hai taaki jisme clone kiya hai usme change karne se real mein na ho.


// Optional Chaining -> ?. operator
// const user = {
//     name: "xyz",
//     age: 25,
//     address:{
//         state: "Haryana",
//         city: "Faridabad",
//         pin: 121001,
//         location: {
//             lat: 124587,
//             lon: 120356
//         }
//     }
// }
// console.log(user.address?.city); // Faridabad
// console.log(user.contact?.phone); // undefined
// console.log(user.address?.location?.lat); // 124587
// console.log(user.address?.location?.timezone); // undefined
// console.log(user.contact.phone); // TypeError: Cannot read properties of undefined (reading 'phone')
// console.log(user.address.location.timezone); // TypeError: Cannot read properties of undefined (reading 'timezone')
// ?.address => iska matlab hai ki agar address key exist karti hai to hi uske andar ki value ko access karo warna undefined return karo bina error diye.

// Computed Properties -> you have a variable and you want to use its value as key in object matlab ki uss variable ki value ko object ki key banana hai
// let admin = "isAdmin";
// let adminName = "adminName";
// let user = {
//     name: "xyz",
//     age: 25,
//     [admin]: true, // computed property
//     [adminName]: "paras" // computed property
// };
// console.log(user);
// console.log(user.isAdmin);
// console.log(user.adminName);
// console.log(user.admin); // undefined



// Nested Objects
// const company = {
//     name: "HDLP PVT LTD",
//     owners: {
//         owner1: {
//             name: "Paras Gera",
//             age: 30,
//             shares: 60
//         },
//         owner2: {
//             name: "Lakshit Gera",
//             age: 28,
//             shares: 40
//         }
//     },
//     businesses: [
//         {
//             name: "Business A",
//             revenue: 1000000
//         },
//         {
//             name: "Business B",
//             revenue: 2000000
//         }
//     ]
// };

// let {name : companyName, owners, businesses} = company; // destructuring of object
// console.log(companyName);
// console.log(owners);
// console.log(businesses);
// let {owner1, owner2} = owners; // destructuring of nested object
// console.log(owner1);
// console.log(owner2);
// let {name: owner1Name, age: owner1Age, shares: owner1Shares} = owner1; // destructuring of nested object
// console.log(owner1Name);
// console.log(owner1Age);
// console.log(owner1Shares);
// let {name: owner2Name, age: owner2Age, shares: owner2Shares} = owner2; // destructuring of nested object
// console.log(owner2Name);
// console.log(owner2Age);
// console.log(owner2Shares);
// let [businessA, businessB] = businesses; // destructuring of array inside object
// console.log(businessA);
// console.log(businessB);
// let {name: businessAName, revenue: businessARevenue} = businessA; // destructuring of object inside array
// console.log(businessAName);
// console.log(businessARevenue);
// let {name: businessBName, revenue: businessBRevenue} = businessB; // destructuring of object inside array
// console.log(businessBName);
// console.log(businessBRevenue);
// // accessing nested object values directly
// console.log(company.owners.owner1.name);
// console.log(company.owners.owner2.shares);
// console.log(company.businesses[0].revenue);
// console.log(company.businesses[1].name);
// // optional chaining
// console.log(company.owners?.owner1?.age);
// console.log(company.owners?.owner3?.name); // undefined
// // computed properties
// let ownerKey = "owner1";
// console.log(company.owners[ownerKey].name);
// // modifying nested object values
// company.owners.owner1.shares = 65;
// console.log(company.owners.owner1.shares);
// company.businesses[1].revenue = 2500000;
// console.log(company.businesses[1].revenue);
// // adding new nested object
// company.owners.owner3 = {
//     name: "New Owner",
//     age: 35,
//     shares: 10
// };
// console.log(company.owners.owner3);
// // adding new business
// company.businesses.push({
//     name: "Business C",
//     revenue: 1500000
// });
// console.log(company.businesses[2]);
// // deep clone using JSON methods
// let companyClone = JSON.parse(JSON.stringify(company));
// console.log(companyClone);
// companyClone.owners.owner1.name = "Changed Name";
// console.log(companyClone.owners.owner1.name);
// console.log(company.owners.owner1.name); // original object not changed



let a = {
    name: "harsh",
    age: 21,
    khaana: "roti",
    address: {
        city: "Faridabad",
        state: "Haryana"
    }
}
// let {name, city} = {a, a.address}; // destructuring multiple keys -> ye galat hai -> a.address -> SyntaxError: Unexpected token '.'
// console.log(name);
// console.log(city);

// let {name} = a; // destructuring
// console.log(name);
// let {city} = a.address; // destructuring nested object alternative way
// console.log(city);

let {name, address: {city, state}} = a; // destructuring multiple keys including nested object
console.log(name);
console.log(city);


// let {name} = a; // destructuring
// console.log(name);
// let {name: firstName} = a; // destructuring with aliasing
// console.log(name);
// console.log(firstName);
// // let {address: {city}} = a; // destructuring nested object
// // console.log(city);
// let {city} = a.address; // destructuring nested object alternative way
// console.log(city);
// let {address: {state: st}} = a; // destructuring nested object with aliasing
// console.log(st);
// let {khaana: food} = a; // destructuring with aliasing
// console.log(food);
// // let {age: age} = a; // destructuring with same name
// let {age} = a; // destructuring with same name
// console.log(age);


for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}