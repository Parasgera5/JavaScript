// koi bhi code line by line chalta hai(sync) but kabhi kabhi acc to the situation code wait karta hai and tabtak agla line ka code chal jata hai this is async

// syncronous
// console.log("Hello World1"); 
// console.log("Hello World2"); 
// console.log("Hello World3"); 
// console.log("Hello World4"); 

// asyncronous
// console.log("Hello World1"); 
// console.log("Hello World2"); 
// setTimeout(() => {
//     console.log("Hello World3");
// }, 2000); 
// console.log("Hello World4"); 


// let a = (value) => {
//     setTimeout(() => {
//         console.log(value);
//     }, Math.floor(Math.random() * 10) * 1000); // math.random -> 0 to 1 points wali value;
// }
// a(12);

// ek function ko dusre function ke andar pass karna callback function kehlata hai.
// let a = (func) => {
//     setTimeout(() => {
//         func();
//     }, 2000);
// };
// a(() => {
//     console.log("Hello World");
// })


// let a = (userName, age, callback) => {
//     setTimeout(() => {
//         console.log(`Profile Fetched: of ${userName} and age is ${age}`);
//         callback(); // call after data is "fetched"
//     }, 2000);
// }
// a("harsh", 12, () => {
//     console.log("aa gayi profile");
// });

// let a = (userName, age, callback) => {
//     setTimeout(() => {
//         console.log(`Profile Fetched: of ${userName} and age is ${age}`);
//         callback({userName, company: "lalaCompany"}); // call after data is "fetched"
//         // callback(userName); // call after data is "fetched"
//     }, 2000);
// }
// a("harsh", 12, (profileData) => {
//     console.log(profileData);
// });


// callback hell

let profileLekarAao = (userName, age, callback) => {
    console.log("Profile Fetching...");
    setTimeout(() => {
        console.log(`Profile Fetched: of ${userName} and age is ${age}`);
        callback({_id: 1, userName, age, company: "lalaCompany", email: "lalacompany@lalacompany.com"}); // call after data is "fetched"
    }, 2000);
};
let saarePostsLekarAao = (userId, callback) => {
    console.log("Posts Fetching...");
    setTimeout(() => {
        callback({_id: userId, posts: ["post1", "post2", "post3"]});
    }, 3000)
};
let savedPostsNikalLo = (postId, callback) => {
    console.log("Saved Posts Fetching...");
    setTimeout(() => {
        callback({_id: postId, savedPosts: ["savedPost1", "savedPost2", "savedPost3"]});
    }, 4000)
};
profileLekarAao("harsh", 12, (profileData) => {
    console.log(profileData);
    saarePostsLekarAao(profileData._id, (postsData) => {
        console.log(postsData);
        savedPostsNikalLo(postsData._id, (savedPosts) => {
            console.log(savedPosts);
        });
    });
});