// promises -> hum ek promise banate hai joki 2 states mein se ek state mein ja sakta hai. wo ya toh resolve hoga ya toh reject hoga kya hoga wo toh waqt batayega. hume dono ke liye hi code likhna padta hai.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Profile Fetched");
//     }, 3000) // 3 seconds ke baad promise resolve hoga. before 3 seconds promise pending state mein rahega. uske baad resolve ho jayega.
// });
// resolve karte time agar koi value bheji toh vo then wale function ke parameter mein aa jayegi. reject karte time agar koi value bheji toh vo catch wale function ke parameter mein aa jayegi.
// promise.then().catch(); // then() ka use hum resolve hone ke baad ka code likhne ke liye karte hai. catch() ka use hum reject hone ke baad ka code likhne ke liye karte hai.
let promise = new Promise((res, rej) => {
    setTimeout(() => {
        let random = Math.random() * 10; // 0 to 10 points wali value
        if(random > 5) res(`Success: ${random} is greater than 5`);
        else rej(`Failure: ${random} is less than or equal to 5`);
    }, 3000);
});
promise.then((successMessage) => {
    console.log(successMessage);
}).catch((failureMessage) => {
    console.log(failureMessage);
});