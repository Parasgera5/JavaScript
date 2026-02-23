// code splitting => lets say 20000 lines ka code hai ab for some function x we only need 200 lines of code from that and for some function y we need 400 lines of another code part. so if we load all the 20000 lines of code in a single go, it takes a lot of load so we implement code splitting -> in code splitting we first of all at the initial only run the part that is needed and then when we want some code part to run we run that specific code part.

const btn = document.querySelector("button");
btn.addEventListener("click", async function(){
    let heavy = await import("./heavy.js"); // heavy will be an object
    heavy.veryHeavyLoad(); // we load veryHeavyLoad function that is getting exported from the heavy.js and is loaded in the heavy object and from that object we are calling this veryHeavyLoad function.
});

yahi concept tha code splitting ka.