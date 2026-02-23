// let count = 0;
// const interval = setInterval(() => {
//     if(count < 10){
//         count++;
//         console.log(count);
//     }
//     else{ 
//         console.log("still chal raha hai"); // ye chalta hi rahega toh isse rokna hota hai nahi toh ye load deta rehta hai system pe. toh ye ek memory leak hai
//     }
// }, 1000);

let count = 0;
const interval = setInterval(() => {
    if (count < 10) {
        count++;
        console.log(count);
    }
    else {
        console.log("finished");
        clearInterval(interval);
        console.log("finished1"); // output mein toh ye bhi aayega but regularly chalta nahi rahega ab ye.
    }
}, 10);