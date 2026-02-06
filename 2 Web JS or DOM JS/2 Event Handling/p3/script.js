let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit", (e)=>{
    e.preventDefault(); // it will stop form submission
    console.log(inputs);
    inputs.forEach((val)=>{
        console.log(val.value)
    })

    let parent = document.querySelector(".parent");
    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    profile.classList.add("profile");
    let image = document.createElement("img");
    image.setAttribute("src", inputs[0].value);
    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;  
    let p = document.createElement("p");
    p.textContent = inputs[3].value;
    
    profile.appendChild(image);
    profile.appendChild(h3);
    profile.appendChild(h5);
    profile.appendChild(p);
    card.appendChild(profile);  
    parent.appendChild(card);
    console.log(parent);

    inputs.forEach((fields)=>{
        if(fields.type != "submit"){
            fields.value = "";
        }
    })

});
