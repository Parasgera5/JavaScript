let imgs = document.querySelectorAll("img");
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(entry);
        }
    });
},
{
    root: null, // matlab ki puri screen observation pe hai. agar koi particular div ko observe karana hai toh uska address dena padega
    threshold: 0.1 // 10% jab andar aayegi tab load hoyega
});
imgs.forEach(function(img){
    observer.observe(img);
});



// const images = document.querySelectorAll(".lazy-img");

//         const imageObserver = new IntersectionObserver((entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const img = entry.target;

//                     img.src = img.dataset.src;

//                     img.onload = () => {
//                         img.classList.add("loaded");
//                     };

//                     observer.unobserve(img);
//                 }
//             });
//         }, {
//             threshold: 0.2
//         });

//         images.forEach(img => {
//             imageObserver.observe(img);
//         });
