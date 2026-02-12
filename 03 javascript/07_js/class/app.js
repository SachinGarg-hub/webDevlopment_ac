//Array Methods 
//1. forEach 
let arr = [1, 2, 3, 4, 5];
let print = function (el) {
    console.log(el);
}
arr.forEach(print);
//2. map 
let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * 2;
});
//3. filter 
let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = nums.filter((el) => {
    return el % 2 == 0;
});
//4. every 
console.log(num.every((el) => (el < 5)));
console.log(num.every((el) => (el % 2 == 0)));
//5. some
console.log(num.some((el) => (el % 2 == 0)));
//6. reduce reduce array to a single value
console.log([1, 2, 3, 4].reduce((res, el) => (res + el)));
// find maximum in an array using reduce 
let arr1 = [1, 4, 2, 5, 6, 7, 2, 9, 2];
let max = arr1.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(max);
//pq 
// 1.check if all numbers in an array our multiple of 10 or not 
let arr2 = [10, 20, 30, 40, 50];
console.log(arr2.every((el) => (el % 10 == 0)));
//2.create a  function to find the min number in an array
// arr1 = [1, 4, 2, 5, 6, 7, 2, 9, 2];
function getMin(arr1) {
    let min = arr1.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
};
console.log(getMin(arr1));
//default parameters 
//giving a default value to the argument 
function sum(a, b = 3) {
    return a + b;
}
console.log(sum(2));
console.log(sum(2, 5));
//spread (expands an iterable into multiple values)
let chars = [..."hello"]
console.log(chars);
console.log(Math.min(...arr1));
//Rest 
function sum1(...args) {

}