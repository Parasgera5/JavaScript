// localStorage -> website ka apna database that stores the data. indefinitely until deleted by user. around 5mbs
// sessionStorage -> website ka temporary database that stores the data for one session. around 5mbs
// cookies -> small files that store data on the user's computer on website itself only. around 4kbs

// localStorage -> browser ke andar data store karna jo ki browser band hone ke baad bhi rahega.
// sessionStorage -> browser ke andar data store karna jo ki tab tak rahega jab tak browser tab band na ho jaye. matlab temporarily store the data.
// cookies -> chhoti files jo ki website ke data ko browser me store karti hai. ye data server ko bheja jata hai har request ke sath. data cookies naam ki property mein store htoa hai, ye light data ke liye use hota hai.

// localStorage
// store kaise karna hai -> setItem("variableName", "value")
// data fetch kaise karna hai -> getItem("variableName")
// remove kaise karna hai -> removeItem("variableName")
// updae kaise karna hai -> setItem("variableName", "newValue")

// setItem -> property nahi hoti toh bana deta hai hoti hai toh uski value ko update kar deta hai

localStorage.setItem("name", "John Doe"); // store
let name = localStorage.getItem("name"); // fetch
console.log(name); // John Doe
localStorage.removeItem("name"); // remove
localStorage.setItem("name", "Jane Doe");
localStorage.setItem("name", "newName"); // update
localStorage.setItem("name", 1); // update
name = localStorage.getItem("name");
console.log(name); // Jane Doe
localStorage.clear(); // sab kuch remove karna


// sessionStorage
sessionStorage.setItem("sessionName", "Session User"); // store
let sessionName = sessionStorage.getItem("sessionName"); // fetch
console.log(sessionName); // Session User
sessionStorage.removeItem("sessionName"); // remove
sessionStorage.setItem("sessionName", "New Session User"); // update
sessionStorage.setItem("sessionName", "New Session User2"); // update
sessionName = sessionStorage.getItem("sessionName");
console.log(sessionName); // New Session User2
sessionStorage.clear(); // sab kuch remove karna

// cookies
document.cookie = "user=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"; // store
let cookies = document.cookie; // fetch
console.log(cookies); // user=John Doe
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // remove
document.cookie = "user=Jane Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"; // update
cookies = document.cookie; // fetch
console.log(cookies); // user=Jane Doe
// Note: Cookies ko manually delete karna padta hai, koi clear method nahi hota.

// Summary:
// localStorage aur sessionStorage dono hi key-value pairs mein data store karte hain, lekin localStorage permanent hota hai jabki sessionStorage temporary hota hai.
// Cookies chhoti files hoti hain jo ki server ke sath data share karti hain har request mein.
// localStorage aur sessionStorage mein zyada data store kiya ja sakta hai (around 5MB) jabki cookies mein bahut kam data (around 4KB) store kiya ja sakta hai.

// cookies mein jo bhi data store karoge wo data page reload hone ke baad bhi rahega jab tak ki uski expiry date na aa jaye ya manually delete na kar do. and har reload par wo data jo cookies mein stored hai wo server ko automatically bheja jata hai.

document.cookie = "email = test@gmail.com"


