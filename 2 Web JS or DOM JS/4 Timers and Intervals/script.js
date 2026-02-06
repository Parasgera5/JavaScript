// setTimeout(() => {
//     console.log("Hello, World!");
// }, 1000);
// console.log("Outer Hello, World!");

// setInterval(() => {
//     console.log("Hello, World!");
// }, 1000);
// console.log("Outer Hello, World!");

// setInterval(() => {
//     setTimeout(() => {
//         console.log("Hello, World!");
//     }, 2000);
// }, 1000);

// setTimeout(() => {
//     setInterval(() => {
//         console.log("Hello, World!");
//     }, 1000);
// }, 1000);

// let timeOut = setTimeout(() =>{
//     console.log("Hello, World!");
// }, 1000);
// clearTimeout(timeOut);

// let interval = setInterval(() => {
//     console.log("Hello, World!");
// }, 1000);
// clearInterval(interval);

// let count = 10;
// let interval = setInterval(() => {
//     if(count >= 1) {
//         console.log(count);
//         count--;
//     }
//     else clearInterval(interval);
// }, 1000);


let downText = document.querySelector(".download-text");
let pBar = document.querySelector(".progress-bar");
let percentage = document.querySelector(".percentage");
let count = 0;

// let interval = setInterval(() => {
//     if(count <= 99){
//         count++;
//         pBar.style.width = count + "%";
//         percentage.innerText = count + "%";
//     }
//     else{
//         clearInterval(interval);
//         pBar.addEventListener(("transitionend"), x = () => {
//             downText.innerText = "Download Complete!";
//             alert("Download Complete!");
//             pBar.removeEventListener("transitionend", x);
//         });
//     }
// }, 10);

// let interval = setInterval(() => {
//     if (count < 100) {
//         count++;
//         pBar.style.width = count + "%";
//         percentage.innerText = count + "%";
//     } else {
//         clearInterval(interval);

//         // wait for CSS animation to finish
//         pBar.addEventListener("transitionend", function handler() {
//             downText.innerText = "Download Complete!";
//             alert("Download Complete!");
//             pBar.removeEventListener("transitionend", handler);
//         });
//     }
// }, 10);

// let interval = setInterval(() => {
//     if (count < 100) {
//         count++;
//         pBar.style.width = count + "%";
//         percentage.innerText = count + "%";
//     } else {
//         clearInterval(interval);

//         const onTransitionEnd = () => {
//             downText.innerText = "Download Complete!";
//             alert("Download Complete!");
//             pBar.removeEventListener("transitionend", onTransitionEnd);
//         };

//         pBar.addEventListener("transitionend", onTransitionEnd);
//     }
// }, 10);


// let interval = setInterval(() => {
//     if (count < 100) {
//         count++;
//         pBar.style.width = count + "%";
//         percentage.innerText = count + "%";
//     } else {
//         clearInterval(interval);

//         // wait for CSS animation to finish
//         pBar.addEventListener("transitionend", function handler() {
//             downText.innerText = "Download Complete!";
//             // let al = alert("Download Complete!");
//             setTimeout(() => {alert("Download Complete!");}, 3000); // it will run this alert after 3 seconds of completion
//             pBar.removeEventListener("transitionend", handler);
//         });
//     }
// }, 10);

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

let interval = setInterval(() => {
    if (count < 100) {
        count++;
        pBar.style.width = count + "%";
        percentage.innerText = count + "%";
    } else {
        clearInterval(interval);

        // wait for CSS animation to finish
        pBar.addEventListener("transitionend", function handler() {
            downText.innerText = "Download Complete!";
            downText.innerText = "Download Complete!";
            showToast("Download Complete!");
            pBar.removeEventListener("transitionend", handler);
        });
    }
}, 10);
