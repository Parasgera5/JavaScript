// saare users show karna
// filter karna har baar input par
// show karana filtered users ko

// function showUsers() {

// }

const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens ☁️🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    // --- Generated Users Below ---
    {
        name: "Rohan Das",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
        bio: "coding by day, gaming by night 🎮 | pixel perfect",
    },
    {
        name: "Zara Khan",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
        bio: "collecting moments not things 📸 | wanderlust",
    },
    {
        name: "Vihaan Sharma",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
        bio: "hustle hard stay humble 🚀 | tech enthusiast",
    },
    {
        name: "Ananya Gupta",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
        bio: "sunshine mixed with a little hurricane 🌪️☀️",
    },
    {
        name: "Kabir Singh",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
        bio: "music is my escape 🎧 | guitar soul",
    },
    {
        name: "Priya Malhotra",
        pic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60",
        bio: "bookworm & tea lover 📚☕ | living in fiction",
    },
    {
        name: "Arjun Reddy",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60",
        bio: "fitness freak 💪 | adrenaline junkie",
    },
    {
        name: "Sana Mir",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
        bio: "fashion fades, style is eternal 👗 | glam life",
    },
    {
        name: "Dev Patel",
        pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
        bio: "capturing the world one frame at a time 📷",
    },
    {
        name: "Nia Sharma",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60",
        bio: "dancing through life 💃 | vibes only",
    },
    {
        name: "Aditya Roy",
        pic: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60",
        bio: "explorer at heart 🌍 | nature lover 🌲",
    },
    {
        name: "Meera Joshi",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
        bio: "artist 🎨 | painting my own reality",
    },
    {
        name: "Aryan Khanna",
        pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60",
        bio: "foodie for life 🍕 | always hungry",
    },
    {
        name: "Riya Sen",
        pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60",
        bio: "dream big sparkle more ✨ | positivity",
    },
    {
        name: "Karan Johar",
        pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=60",
        bio: "making movies & memories 🎥 | storyteller",
    },
    {
        name: "Sneha Kapoor",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
        bio: "dog mom 🐶 | happiness is a warm puppy",
    }
];

// const showUsers = (arr) => {
//     arr.forEach((user)=>{
//         // 1. Create the main card container
//     const card = document.createElement('div');
//     card.classList.add('card');

//     // 2. Create the image element
//     const img = document.createElement('img');
//     img.src = user.pic; 
//     img.classList.add('bg-img');

//     // 3. Create the blurred layer
//     const blurredLayer = document.createElement('div');
//     blurredLayer.classList.add('blurred-layer');
//     // Important: The blur layer needs the same background image for the effect to work
//     blurredLayer.style.backgroundImage = `url(${user.pic})`; 

//     // 4. Create the content container
//     const content = document.createElement('div');
//     content.classList.add('content');

//     // 5. Create the text elements (Name and Bio)
//     const h3 = document.createElement('h3');
//     h3.textContent = user.name;

//     const p = document.createElement('p');
//     p.textContent = user.bio;

//     // 6. Append text to content container
//     content.appendChild(h3);
//     content.appendChild(p);

//     // 7. Append everything to the card
//     card.appendChild(img);
//     card.appendChild(blurredLayer);
//     card.appendChild(content);

//     // document.body.appendChild(card);
//     document.querySelector(".cards").appendChild(card);
//     })
// }
// showUsers(users)    

// let input = document.querySelector(".inp")
// input.addEventListener("input",(e)=>{
//     // console.log(input.value)
//     let newUsers = users.filter((user) => {
//         return user.name.startsWith(input.value);
//     });
//     console.log(newUsers)
//     document.querySelector(".cards").innerHTML = "";
//     showUsers(newUsers) 
// });
// Cache DOM (important optimization)
const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");


// Single fast render function
function showUsers(list) {
  cardsContainer.innerHTML = list.map(user => `
    <div class="card">
      <img src="${user.pic}" class="bg-img">

      <div class="blurred-layer" 
           style="background-image:url('${user.pic}')">
      </div>

      <div class="content">
        <h3>${user.name}</h3>
        <p>${user.bio}</p>
      </div>
    </div>
  `).join("");
}


// Initial render
showUsers(users);


// Optimized search with debounce (pro feature)
let debounceTimer;

input.addEventListener("input", () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const value = input.value.toLowerCase();

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(value)
    );

    showUsers(filteredUsers);
  }, 150);
});