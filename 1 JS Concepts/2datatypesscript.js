// there are two types of data types -> primitives(bina brackets wale) and references(brackets wale)
// primitives ko hum directly copy kar sakte hai
// references ko hum directly copy nahi kar sakte hai hume uska address lena padta hai

// primitives -> inko copy karne par real copy milti hai. String, Number, Boolean, null, undefined, Symbol, bigInt
// references -> inko copy karne par real copy nahi milti inka reference milta hai. array[], object{}, function()

// let a = [1, 2, 3];
// let b = a;
// console.log(a); // [1, 2, 3]
// console.log(b); // [1, 2, 3]
// b.push(4);
// console.log(a); // [1, 2, 3, 4]
// console.log(b); // [1, 2, 3, 4]


// Strings -> 'hello', "hello", `hello`

// let a = null; // null
// let b; // undefined


// let u1 = Symbol('hello'); // symbol
// let u2 = Symbol('hello'); // symbol
// u1 === u2; // false

// let obj = {
//     uid: 12,
// }
// console.log(obj.uid); // 12
// obj.uid = 10;
// console.log(obj.uid); // 10

// let obj = {
//     uid: 12,
// }
// console.log(obj.uid); // 12
// let u1 = Symbol('uid');
// obj[u1] = 10;
// console.log(obj.uid); // 12
// console.log(obj[u1]); // 10
// console.log(obj); // { uid: 12, [Symbol(uid)]: 10 }


let a = Number.MAX_SAFE_INTEGER; // normal value
console.log(a); //9007199254740991
a = a + 2;
console.log(a); // 9007199254740992

// let a = 9007199254740991n; // bigInt
// a = a + 12n;
// console.log(a); // 9007199254741003n