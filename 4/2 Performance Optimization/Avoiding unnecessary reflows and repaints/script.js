// jab bhi hum koi css mein change karte hai toh wo change dom mein hota hai jisse pura reload hota hai toh facebook pe bohot saare notifications at a same time occurs. toh har notification pe reload and because of this lag bohot aat tha toh react bana.
// ab hota kya hai ki koi bhi element add karte hi ya koi bhi css mein change karte hi dom reload hota hai pura jiski wajah se bohot hi jyada lag aata hai. toh to remove this we use this concept of avoiding uncessary reflows and repaints.

// const ul = document.querySelector("ul");
// for(let i=0; i<1000000; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }
// is code ne toh system ka bhatta hi bitha diya

// toh isko ache tarike se kaise kare. niche diye gaye tarike se.

const ul = document.querySelector("ul");
    const space = document.createDocumentFragment(); // ye memory(matlab ram) mein hume ek space allocate kar dega and hum us space mein addition karte jayenge instead of again and again reloading the dom by again and again adding the element. and jab hum saare element space mein add kardenge then ek baar mein hum us space ko ul mein add karke dom ko multiple times reload hone se rok denge and single reload pe hi kaam chal jayega

for (let i = 0; i < 100000; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
}
ul.appendChild(space);

// const ul = document.querySelector("ul");
// window.addEventListener("load", () => {
//     console.log("Page loaded");

    
//     for (let i = 0; i < 100000; i++) {
//         const li = document.createElement("li");
//         li.textContent = i;
//         ul.appendChild(li);
//     }
// });
// window.addEventListener("load", () => {
//     console.log("Page loaded");

//     const ul = document.querySelector("ul"); // get existing ul
//     const space = document.createDocumentFragment(); // performance optimization

//     for (let i = 0; i < 100000; i++) {
//         const li = document.createElement("li");
//         li.textContent = i;
//         space.appendChild(li);
//     }

//     ul.appendChild(space);
// });



// similar way mein jab css mein kuch change karna hai toh everytime change matt karo. instead ek class bana lo us class mein add karo sare changes and at the very last add that class.