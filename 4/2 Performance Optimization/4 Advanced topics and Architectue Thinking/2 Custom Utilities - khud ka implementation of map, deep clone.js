// khud ka filter, reduce, map, deep clone banana
// map -> ek array ke top pe chalta hai map function and uss array ke sabhi elements us map function ke andar aate hai and map function ek naya array return karta hai and uss array mein jo bhi map ne return kiya hoga wahi placed hoga.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myMap = (array, callBack) => {
    let newArray = [];
    for(let i=0; i<array.length; i++){
        newArray.push(callBack(array[i], i, array));
    }
    return newArray;
}

// let ans = myMap(array, num => num + 2);
// let ans = myMap([1, 2, 3, 4, 5], num => num + 2);
let ans = myMap(array, function (value, index, array){
    return value + 2;
});
console.log(ans)

// deep clone - different file named deep copy and shallow copy.