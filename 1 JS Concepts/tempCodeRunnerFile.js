let ar = [2, 4, 6, 8, 10, 11, 12];
let d = ar.some((val) => {
    return val % 2 === 1;
});
console.log(d);