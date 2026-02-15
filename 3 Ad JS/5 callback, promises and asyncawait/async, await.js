// promises ke resolve reject clearner way se handle - async and await
// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         let random = Math.random() * 10; // 0 to 10 points wali value
//         if(random > 5) res(`Success: ${random} is greater than 5`);
//         else rej(`Failure: ${random} is less than or equal to 5`);
//     }, 3000);
// });

// async function abcd(params) {
//     let val = await promise; // jab tak promise resolve ya reject nahi hota tab tak ye line ruk jayegi. jab promise resolve ya reject ho jayega tab ye line execute hogi. agar promise resolve hota hai toh val mein success message aa jayega. agar promise reject hota hai toh val mein failure message aa jayega.
// }
// abcd(); // async function ko call karne ke liye bhi hume async function ke andar hi call karna padta hai. ya toh hum IIFE (Immediately Invoked Function Expression) ka use kar sakte hai. ya toh hum async function ke andar hi call kar sakte hai.
// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         let random = Math.random() * 10; // 0 to 10 points wali value
//         if(random > 5) res(`Success: ${random} is greater than 5`);
//         else rej(`Failure: ${random} is less than or equal to 5`);
//     }, 3000);
// });

// async function abcd(params) {
//     try { // resolve hua toh
//         let val = await promise;
//         console.log(val);
//     } catch (error) { // reject hua toh
//         console.log(error);
//     }
// }
// abcd();


// function getUser(cb) {
//     setTimeout(() => {
//         console.log("User fetched");
//         cb(1);
//     }, 1000);
// }

// function getPosts(userId, cb) {
//     setTimeout(() => {
//         console.log("Posts fetched for user:", userId);
//         cb(101);
//     }, 1000);
// }

// function getComments(postId, cb) {
//     setTimeout(() => {
//         console.log("Comments fetched for post:", postId);
//     }, 1000);
// }

// getUser((userId) => {
//     getPosts(userId, (postId) => {
//         getComments(postId);
//     });
// });

// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve(1);
//         }, 1000);
//     });
// }

// function getPosts(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Posts fetched for user:", userId);
//             resolve(101);
//         }, 1000);
//     });
// }

// function getComments(postId) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Comments fetched for post:", postId);
//             resolve();
//         }, 1000);
//     });
// }

// getUser()
//     .then(userId => getPosts(userId))
//     .then(postId => getComments(postId))
//     .then(() => console.log("All done!"));

// chaining async operations
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("User fetched");
            resolve(1);
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Posts fetched for user:", userId);
            resolve(101);
        }, 1000);
    });
}

function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Comments fetched for post:", postId);
            resolve();
        }, 1000);
    });
}

async function loadData() {
    const userId = await getUser();
    console.log("User ID:", userId);
    const postId = await getPosts(userId);
    console.log("Post ID:", postId);
    await getComments(postId);
    console.log("Comments loaded");

    console.log("All done!");
}

loadData();