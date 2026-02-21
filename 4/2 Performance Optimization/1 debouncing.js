// debouncing -> hum koi action kar rahe hai and hum nahi chahte har action par kuch ho, hum chahte hai ki jab bhi koi action ke bich mein gap aa jaye toh uska reaction us specific time gap ke baad jo humne set kiya hai uske baad wo reaction aaye. Eg. -> serching something by typing when we stop typing, after 1 millisecond google gives us suggestions to search things related to our searching.

// document.querySelector("input").addEventListener("input", () => {
//     console.log("aldjfh");
// });
let debouncing = (fnc, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fnc(...args);
        }, delay)
    }
}
document.querySelector("input").addEventListener("input", debouncing(function () {
    console.log("aljsdf");
    console.log("aljsdf");
}, 1000));