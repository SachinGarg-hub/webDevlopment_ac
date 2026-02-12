// Function to return array elements larger than a number
let arr = [1, 2, 3, 4, 5, 6];
let key = 4;

function getLargerElements(arr, key) {
    let result = [];  // naya array banate hain
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > key) {
            result.push(arr[i]); // agar element bada hai toh result me daal do
        }
    }
    return result;
}

console.log(getLargerElements(arr, key));
/* 
q2 
write a js fnx to extract unique characters from string 
str="abcdabcdefgggh"
ans="abcdefgh"
*/
function getUniqueChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {   // agar result me already nahi hai
            result += str[i];
        }
    }
    return result;
}

let str = "abcdabcdefgggh";
console.log(getUniqueChars(str));

/*
q3
write a javascript function that accepts a list of country names as input and returns the longest name as output */

function longestCountry(countries) {
    let longest = countries[0]; // pehle element ko maan lete hain longest
    for (let i = 1; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i]; // agar bada mila toh update kar do
        }
    }
    return longest;
}

let country = ["Australia", "Germany", "UnitedStatesofAmerica"];
console.log(longestCountry(country));
/*
q4
write a js to count no. of vowels in string argument 

*/
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count = count + 1;
        }
    }
    return count;
}
str = "hello how are you";
console.log(countVowels(str));
/*q5 
Write a JavaScript function to generate a random number within a range(start,end)
*/
let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));