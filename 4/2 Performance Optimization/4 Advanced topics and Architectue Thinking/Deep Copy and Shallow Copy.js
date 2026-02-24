// // deep copy and shallow copy
// let obj = {
//     name: "harsh",
//     age: "20"
// }
// let obj2 = obj; // is tarike se copy nahi karte kyuki ye copy hota hi nahi hai. Instead yaha pe, obj2 ko obj ka reference mila hai naaki obj2 mein obj ki copy bani hai.
// console.log(obj)
// console.log(obj2)

// console.log(obj.name)
// console.log(obj2.name)
// obj2.name = "harshita";
// console.log(obj.name)
// console.log(obj2.name)


// const obj = {
//     name: "harsh",
//     age: 25
// }
// const obj2 = {...obj};
// console.log(obj)
// console.log(obj2)
// console.log(obj.name)
// console.log(obj2.name)
// obj2.name = "harshita"
// console.log(obj.name)
// console.log(obj2.name)

// shallow copy - jab hum kisi object ko copy kare with Object.assign() method ke through ya spread operator ke through. In dono hi cases mein top level properties toh copy ho jaati hai but kisi bhi nested object ki properties copy hone ki jagah firse reference pass kar deti hai. 
// var obj = {
//     name: "harsh",
//     age: 25,
//     social: {
//         facebook: {
//             ac1: "somewhere@gmail.com",
//             ac2: "somewhere@gmail.com"
//         },
//         twitter: {
//             free: {
//                 ac1: "somewhere@gmail.com"
//             },
//             paid: {
//                 ac1: "somewhere@gmail.com"
//             }
//         }
//     }
// };

// var obj2 = { ...obj };

// console.log(obj);
// console.log(obj2);

// obj2.social.facebook.ac1 = "changed";

// console.log(obj.social.facebook.ac1);
// console.log(obj2.social.facebook.ac1);


// Deep Copy - har level pe hi actual copy banata hai instead of referencing that element.
// '{a: 2, b: 3}' -> string of object
// '{"a": 1, "b": 2}' -> string of json object -> ye banta hai JSON.stringfy(objectName) se and isko hum again JSON.parse kar dete hai.
var obj = {
    name: "harsh",
    age: 25,
    social: {
        facebook: {
            ac1: "somewhere@gmail.com",
            ac2: "somewhere@gmail.com"
        },
        twitter: {
            free: {
                ac1: "somewhere@gmail.com"
            },
            paid: {
                ac1: "somewhere@gmail.com"
            }
        }
    }
};
let obj2 = JSON.parse(JSON.stringify(obj));

obj2.social.facebook.ac1 = "changed";

console.log(obj.social.facebook.ac1);
console.log(obj2.social.facebook.ac1);

// now obj2 is a deep copy of obj jo changes hum obj2 mein karenge wo obj mein nahi impose honge and jo changes hum obj mein karenge wo obj2 mein impose nahi honge.

// typeof(null, object, array) -> object
// Object.keys:
// If array => [9, 1, 2, 3, 4, 5];
// If object => ['key1', 'key2', ...]
const makeDeepCopy = (obj) => {
    if(typeof obj !== 'object' || obj === null) return obj;
    var cloned = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);
    for(var i=0; i<keys.length; i++){
        cloned[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return cloned;
}
console.log(makeDeepCopy(obj));
obj2.social.facebook.ac1 = "changed 2";

console.log(obj.social.facebook.ac1);
console.log(obj2.social.facebook.ac1);