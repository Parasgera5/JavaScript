// let a = [1, 2, 3, 4, 5];
// console.log(a[0]); // 1
// console.log(a[10]); // undefined

// let arr = [];

// let ar = new Array();
// let ar = new Array(6, 7, 8, 9, 10);



// let array = [1, "string", true, null, undefined, {name: "object"}, [1, 2, 3]];


// let a = [1, 2, 3, 4, 5];
// console.log(a); // [1, 2, 3, 4, 5]
// a.splice(2, 3); // kis index se hatani hai kitni hatani hai
// console.log(a); // [1, 2]
// a.splice(2, 3, 6, 7, 8); // kis index se hatani hai kitni hatani hai, fir kya add karna hai
// console.log(a); // [1, 2, 6, 7, 8]
// a.splice(1, 2);
// console.log(a); // [1, 7, 8]


// let a = [1, 2, 3, 4, 5];
// a.slice(1, 4); // starting index, ending index (ending index is not included)
// console.log(a); // [1, 2, 3, 4, 5]
// let b = a.slice(1, 4);
// console.log(b); // [2, 3, 4]
// console.log(a); // [1, 2, 3, 4, 5]
// slice matlab copy karna, splice matlab cut karna
// slice kaha se kaha tak+1 hatana hai and splice is kaha se kitna hatana hai
// slice returns a new copy of the updated array and does not modify the original array a whereas splice modifies the original array a and does not return a new array.
// slice cut that area that you specified and return the copy array of that specified area

// let a = [2, 5, 4, 3, 1, 99, 4, 5, 67, 43, 56, 22];
// a.sort(); // sort in ascending order
// console.log(a); // [1, 2, 22, 3, 4, 4, 5, 5, 43, 56, 67, 99] -> as it converts all the elements to string and then compare their unicode values
// a.sort((a, b) => a - b); // sort in ascending order
// console.log(a); // [1, 2, 3, 4, 4, 5, 5, 22, 43, 56, 67, 99]
// a.sort((a, b) => b - a); // sort in descending order
// console.log(a); // [99, 67, 56, 43, 22, 5, 5, 4, 4, 3, 2, 1]
// a.sort(function(a, b){
//     return a - b;
// }); // sort in ascending order
// console.log(a); // [1, 2, 3, 4, 4, 5, 5, 22, 43, 56, 67, 99]





// map, filter, reduce, foreach
// jab bhi array pe ye char chize lagti hai sab mein ek cheez common hai wo sab ek function accept karte hai jaise sort mein kiya tha sort ek function accept karta tha
// foreach har ek bande pe jata hai or jo karna hai uska karlo
// map har baar ek ek bande pe jata hai or kuch return karta hai
// filter har ek bande pe jata hai or condition lagata hai or jo satisfy karte hai wo naya array bana ke deta hai
// reduce pura array leta hai or ek single value return karta hai

// let a = [1, 2, 3, 4, 5];
// a.forEach(function(val, index, array){
//     console.log(`value is ${val}, index is ${index}, array is ${array}`); 
// });

// a.forEach((a) => {
//     console.log(a);
// })

// forEach mein array ke har ek value ke liye function ke andar likha hua code chalta rahega baar baar
// forEach kuch return nahi karta hai
// forEach array ki har ek value ke liye baar baar call hota hai baar baar us function ko chalata hai jo uske andar diya hota hai


// a.forEach(function(val){
//     console.log(val * 2);
// })

// console.log(a);





// map sirf tab use karna hai jab naya array banana hai pichle array ke data ke basis pe
// map dikhte hi ek khali array create karlo mann mein fir har ek value ke return ko usme add karte jao
// let a = [1, 2, 3, 4, 5];
// let c = a.map(function(val){});
// console.log(c); // [undefined, undefined, undefined, undefined, undefined
// let b = a.map(function(val){
//     return 12;
// });
// console.log(a); // [1, 2, 3, 4, 5]
// console.log(b); // [12, 12, 12, 12, 12]

// let d = a.map((val) => {
//     if(val > 2) return val;
//     return; // ho na ho same behavior
// })
// console.log(d); // [undefined, undefined, 3, 4, 5]
// jab lage ki is array se ek naya array banana hai and usme kuch kuch changes karne hai toh map use karna hai



// filter tab use karna hai jab naya array banana hai pichle array ke data ke basis pe but kuch conditions laga ke
// filter kuch kuch values lata hai new array mein jo ki condition satisfy karte hai
// diff bw map and filter is that ki map har ek value ko naya value mein convert karta hai whereas filter sirf unhi values ko naya array mein leta hai jo condition satisfy karte hai.
// har ek value par toh dono hi chalte hai but map har ek value ko naya value mein convert karta hai whereas filter sirf unhi values ko naya array mein leta hai jo condition satisfy karte hai.
// filter mein jis value pe function true return karta hai wo value naya array mein chali jati hai otherwise nahi jati
// let a = [1, 2, 3, 4, 5];
// let b = a.filter((val) => {
//     if(val%2 == 0) return true;
// })
// console.log(b); // [2, 4]


// reduce -> ek array se ek value banana, => saare number add kardo
// let a = [1, 2, 3, 4, 5];
// a.reduce((accumulator, currentValue, index, array) => {}, 0);
// accumulator -> jo value hum return karte hai wo agle step mein accumulator ban ke aata hai
// currentValue -> jo current value pe hum hai wo
// index -> current value ka index
// array -> original array
// 0 -> initial value of accumulator

// let sum = a.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // 0 is initial value of accumulator
// console.log(sum); // 15
// let b = a.reduce((changing, arrayValues)=> {
//     return changing + arrayValues;
// }, 0);
// console.log(b); // 15
// isme changing ki initial value 0 hogi and then 0 + arrayValues(1) = 1, fir 1 + arrayValues(2) = 3, fir 3 + arrayValues(3) = 6, fir 6 + arrayValues(4) = 10, fir 10 + arrayValues(5) = 15, toh final answer 15 aayega

// find -> hamesha pehli occurence milte hi return kar deta hai
// let a = [
//     {
//         key: 1, val: 1
//     },
//     {
//         key: 2, val: 4
//     },
//     {
//         key: 3, val: 9
//     },
//     {
//         key: 4, val: 16
//     },
//     {
//         key: 5, val: 1
//     }
// ]

// let b = a.find((obj) => {
//     return (obj.val === 1);
// });
// console.log(b); // {key: 1, val: 1} -> find returns the first element that satisfies the condition
// console.log(a.find((obj) => {
//     return (obj.val === 1 && obj.key !== 1);
// }));

// some -> sabhi elements ko check karta hai aur agar sabhi elements condition satisfy karte hai tabhi true return karta hai
// let a = [2, 4, 6, 8, 10];
// let b = a.some((val) => {
//     return val % 2 !== 0;
// });
// console.log(b); // false -> because none of the elements satisfy the condition
// let c = a.some((val) => {
//     return val % 2 === 0;
// });
// console.log(c); // true -> because all elements satisfy the condition
// agar ek value bhi condition satisfy nahi karti toh false return karta hai agar ek bhi kari toh at a time true return karta hai.
// let ar = [2, 4, 6, 8, 10, 11, 12];
// let d = ar.some((val) => {
//     return val % 2 === 1;
// });
// console.log(d); // false -> because not all elements satisfy the condition

// every -> agar array ke sabhi elements condition satisfy karte hai tabhi true return karta hai otherwise false 
// let a = [2, 4, 6, 8, 10];
// let b = a.every((val) => {
//     return val % 2 === 0;
// });
// console.log(b); // true -> because all elements satisfy the condition
// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let c = ar.every((val) => {
//     return val % 2 === 0;
// });
// console.log(c); // false -> because not all elements satisfy the condition



// destructuring and spread operator
// let a = [1, 2, 3, 4, 5];
// let [b, c, d, ...rest] = a; // rest operator
// console.log(b); // 1
// console.log(c); // 2
// console.log(d); // 3
// console.log(rest); // [4, 5]

// rest operator -> baaki sab elements ko ek array mein daal deta hai

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combined = [...arr1, ...arr2]; // spread operator
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// spread operator -> ek array ke elements ko dusre array mein spread kar deta hai

// let obj1 = {a: 1, b: 2};
// let obj2 = {c: 3, d: 4};
// let combinedObj = {...obj1, ...obj2};
// console.log(combinedObj); // {a: 1, b: 2, c: 3, d: 4}

// spread operator can also be used with objects to combine them

// let obj = {x: 10, y: 20, z: 30};
// let {x, y, ...others} = obj;
// console.log(x); // 10
// console.log(y); // 20
// console.log(others); // {z: 30}

// rest operator can also be used with objects to collect remaining properties into a new object

// let a = [1, 2, 3, 4, 5];
// let [first, , third, ...rest] = a; // skipping second element
// console.log(first); // 1
// console.log(third); // 3
// console.log(rest); // [4, 5]
// you can skip elements while destructuring arrays by leaving empty spaces


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = a; // ab yaha pe reference copy hua hai matlab any change in b will reflect in a and vice versa
// let c = [...a]; // ab yaha pe value copy hua hai matlab koi bhi change in c will not reflect in a and vice versa. this is the magic of spread operator (...) isi ko funions mein hum rest parameter bhi bolte hai yaha arrays mein isse spread operator bolte hai
// now any change in c will not affect a
// c.push(11);
// console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(c); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// b.push(12);
// console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
// console.log(b); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
// so to make a copy of an array use spread operator (...) like let c = [...a];


let a = ["hello", "hye", "bye", "bye"];
// for(let s in a){
//     console.log(s); // prints index
// }
// for(let s in a){
//     console.log(a[s]); // prints values
// }
// for(let s of a){
//     console.log(s); // prints value
// }
for(let s of a){
    if(s === "bye"){
        s = "goodbye"; // this will not change the original array
    }
}
for(let s of a){
    console.log(s); // prints value
}
console.log(a); // original array remains unchanged

for(let s in a){
    if(a[s] === "bye"){
        a[s] = "goodbye"; // this will change the original array
    }
}
for(let s of a){
    console.log(s); // prints value
}
console.log(a); // original array remains unchanged

// for...in loop iterates over the indices of the array
// for...of loop iterates over the values of the array
