// Arithmatic, comparison, logical, assignment, bitwise, unary, ternary, typeof, delete, void, in, instanceof, nullish coalescing

// + - * / % **
// = == ===
// < > <= >= ! != !== !!
// && ||
// & | ^ ~ << >> >>>
// = += -= *= /= %= **=
// ++ --
// ? :

// Arithmatic operator
// 1 + 2 // 3
// "he" + "llo" // "hello" -> concatenation
// 2 - 1 // 1
// 2 * 2 // 4
// 2 / 2 // 1
// 5 % 2 // 1
// 2 ** 3 // 8 => 2 ^ 3

// Comparison operator
// 1 < 2 // true
// 2 > 1 // true
// 1 < 1 // false
// 2 > 2 // false
// 2 <= 2 // true
// 2 >= 1 // true
// 1 == 1 // true
// 1 == '1' // true -> value check
// 1 === '1' // false -> value + type check
// 1 != 2 // true
// 1 != '2' // true -> value check
// 1 !== '1' // true -> value + type check
// 1 != 1 // false
// 1 !== 1 // false
// 1 != '1' // false
// 1 !== '1' // true
// "harsh" == "harsh" // true
// "harsh" === "harsh" // true
// "harsh" != "Harsh" // true
// "harsh" !== "Harsh" // true

// Assignment operator
// let a = 10; // assignment
// a += 5; // a = a + 5; -> 15
// a -= 5; // a = a - 5; -> 10
// a *= 2; // a = a * 2; -> 20
// a /= 2; // a = a / 2; -> 10
// a %= 3; // a = a % 3; -> 1
// a **= 3; // a = a ** 3; -> 1
// console.log(a); // 1

// Logical operator
// let a = true;
// let b = false;
// a && b // false
// a || b // true
// !a // false
// !b // true
// !!a // true
// !!b // false
// !!"hello" // true
// !!"" // false
// !!0 // false
// !!1 // true
// !!null // false
// !!undefined // false
// !!{} // true
// !![] // true
// !!NaN // false
// a ^ b // true

// Unary operator -> + - ++ -- typeof delete void
// let a = 10;
// ++a; // 11 -> preincrement
// --a; // 10 -> predecrement
// a++; // 10 -> postincrement
// a--; // 10 -> postdecrement
// a++ + a; // 21 -> 10 + 11
// +a; // 10
// -a; // -10
// typeof a; // "number"
// +"10" // 10 string se number mein convert ho gaya
// +"5" // 5 number wali ye convert ho gayi string se number mein kyuki 
// +"harsh" // NaN

// Ternary operator
// ?:
// condition ? true hui ka code : false hui ka code
// let age = 18;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // "Yes"

// typeof operator
// let a = 10;
// console.log(typeof a); // "number"
// let b = "hello";
// console.log(typeof b); // "string"
// let c = true;
// console.log(typeof c); // "boolean"
// let d = null;
// console.log(typeof d); // "object" -> quirk
// let a = Nan;
// console.log(typeof a); // "number" -> quirk
// let e;
// console.log(typeof e); // "undefined"
// let f = Symbol('id');
// console.log(typeof f); // "symbol"
// let g = 10n;
// console.log(typeof g); // "bigint"
// let h = {name: "harsh"};
// console.log(typeof h); // "object"
// let i = [1, 2, 3];
// console.log(typeof i); // "object" -> quirk
// let j = function() {};
// console.log(typeof j); // "function"

// instanceof operator
var a = 12;
console.log(a instanceof Number); // false
let a = []; // undefined
console.log(typeof a); // "object"
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true
// a instanceof Array => kya a array ka instance hai?
// instanceof hamesha reference value ke sath work karta hai. it do not work with primitives.
// So instanceof hum use karte hai reference data types ke sath and typeof hum use karte hai primitive data types ke sath.
let b = {};
console.log(typeof b); // "object"
console.log(b instanceof Object); // true
console.log(b instanceof Array); // false
let c = function() {};
console.log(c instanceof Function); // true

// delete operator
let obj = {
    name: "harsh",
    age: 20
};
