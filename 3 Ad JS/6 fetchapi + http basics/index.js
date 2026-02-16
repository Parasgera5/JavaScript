// fetch api -> isse hum kisi data ko manga sakte hai ek link ke through
// json -> java script object notation
// {
//     "name": "name"
// }
// fetch -> inbuilt in js -> isko hum url dete hai -> fetch uss url pe jata hai -> fetch promise based hai => use karne ke do tarike:
// 1. resolve mein .then() nahi toh error mein .catch()
// 2. 


// fetch("https://randomuser.me/api")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// fetch("https://randomuser.me/api")
//     .then((data) => {
//         return data.json(); // isko json mein convert karna hota hai hamesha. pehle then mein raw data aata hai usko json mein convert karke agle .then() mein print karte hai.
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// fetch("https://randomuser.me/api")
fetch("https://randomuser.me/api/?results=5")
    .then((data) => data.json()) // implicit return
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
    })