let createToaster = (config) => {

    const parent = document.querySelector(".parent");
    // parent.classList.add("fixed"); // 👈 THIS IS WHY IT WAS IN MIDDLE. comment this line the toast will come in the middle

    // Set parent position ONCE
    parent.classList.add(
        config.positionX === "left" ? "left-5" : "right-5",
        config.positionY === "top" ? "top-5" : "bottom-5"
    );

    return (notification) => {

        const div = document.createElement("div");
        div.innerText = notification;

        div.className = `
            ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
            px-4 py-2 rounded shadow-lg mb-2
        `;

        parent.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    };
};

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3,
});

toaster("This is the toast");
setTimeout(() => {
    toaster("This is the toast");
}, 1000);
setTimeout(() => {
    toaster("This is the toast");
}, 2000);
setTimeout(() => {
    toaster("This is the toast");
}, 3000);
setTimeout(() => {
    toaster("This is the toast");
}, 4000);
setTimeout(() => {
    toaster("This is the toast");
}, 5000);
setTimeout(() => {
    toaster("This is the toast");
}, 6000);
// toaster("This is the toast");
// toaster("This is the toast");
// toaster("This is the toast");
// toaster("This is the toast");