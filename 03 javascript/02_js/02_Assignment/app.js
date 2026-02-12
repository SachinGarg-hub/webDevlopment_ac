//1. 
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);
//2.

let ans1 = arr.slice(-n);
console.log(ans1);
//3. 
let str = prompt("ENter a string:");
if (str.length == 0) {
    alert("string is empty");
} else {
    console.log("string is not empty ");
}
//4.
let str1 = "ApnaCollege";
let idx = 3;
if (str[idx] == str[idx].toLowerCase()) {
    console.log("character is lower case");
} else {
    console.log("character is not lower case");

}
//5.
let str2 = prompt("please enter a string");
console.log(`original string =${str2}`);
console.log(`string without spaces =${str2.trim()}`);
//6. 
let arr1 = [1, 2, "om", "blue"];
let item =2;
if(arr.indexOf(2)!=-1){
    console.log("element exists in array");
}else{
    console.log("element doesnot exist ");
}
