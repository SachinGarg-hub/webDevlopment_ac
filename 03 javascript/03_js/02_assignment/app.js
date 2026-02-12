//q1 
let ar = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] == num) {
        ar.splice(i, 1);
    }
}
console.log(ar);

//q2
let num1 = 287152;
let count = 0;
let copy = num1;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log(count);

//q3
let num2 = 287152;
let sum = 0;
let copy1 = num2;
while (copy1 > 0) {
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);

}
console.log(sum);
//q4
let number = 5;
let fact = 1;

for (let i = 1; i <= number; i++) {
    fact = fact * i;
}

console.log("Factorial of " + number + " = " + fact);
//q5
let arr = [12, 45, 67, 23, 89, 34];
let largest = arr[0];   // pehle element ko largest maan lete hain

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest number in array = " + largest);
