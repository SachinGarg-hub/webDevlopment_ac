//pq1
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(sum);
console.log(avg);
//pq2 nums same in rehne dete hai 
const plusfive = nums.map((num) => num + 5);
console.log(plusfive);
//q3 
let strings = ["adam", "manish", "bob", "eva", "donald"];
console.log(strings.map((string) => string.toUpperCase()));
//q4 
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((arg) => arg * 2),

];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 1, 4));
//q5 
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));