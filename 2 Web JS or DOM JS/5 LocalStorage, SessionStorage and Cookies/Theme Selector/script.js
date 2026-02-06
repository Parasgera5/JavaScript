// const setTheme = () => {
//     if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
//         document.body.classList.add("dark");
//         document.body.classList.remove("light");
//     }
//     else{
//         document.body.classList.add("light");
//         document.body.classList.remove("dark");
//     }
// }
// // setTheme();

// if(localStorage.getItem("theme")){
//     document.body.classList.add(localStorage.getItem("theme"));
// }
// else{
//     setTheme();
// }


// // window.addEventListener("change", setTheme);
// // window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme);
// // window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
// //     setTheme();
// // });
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
//     if(!localStorage.getItem("theme")) setTheme();
// });

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//     if(document.body.classList.contains("dark")){
//         document.body.classList.remove("dark");
//         document.body.classList.add("light");

//         localStorage.setItem("theme", "light");
//     }
//     else{
//         document.body.classList.remove("light");
//         document.body.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// });


// // localStorage.getItem("theme")
// document.body.classList.add(localStorage.getItem("theme"));

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const button = document.querySelector("button");

const applyTheme = (theme) => {
    document.body.className = theme;
};

const systemTheme = () => mediaQuery.matches ? "dark" : "light";

// initial load
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || systemTheme());

// system change (only if no manual theme saved)
mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(systemTheme());
    }
});

// manual toggle
button.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});