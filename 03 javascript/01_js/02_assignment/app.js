//q1
let num = 100;
if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}
//q2
let name = prompt("please enter your name");
let age = prompt("plz enter your age");
alert(`${name} is ${age} years old. `)
//q3
let quarter = 1;
switch (quarter) {
    case 1:
        console.log("January , Febuary , March");
        break;
    case 2:
        console.log("April , May , June");
        break;
    case 3:
        console.log("JUly , August , September");
        break;
    case 4:
        console.log("October , November , December");
        break;
    default:
        console.log("Enter no. between 1 to 4");
        break;
}
//q4
let str = "adan";
if (str[0] == 'A' || str[0] == 'a' && str.length > 5) {
    console.log("Golden");
} else {
    console.log("not golden ");
}
//q5
let num1 = 10;
let num2 = 15;
let num3 = 7;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greatest`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greatest`);
} else {
    console.log(`${num3} is greatest`);
}
//q6
let num_1 = 32;
let num_2 = 4352;
if ((num_1 % 10) == (num_2 % 10)) {
    console.log("numbers have the same digit which is ", num_1 % 10);

}
else {
    console.log("numbers dont have the same last digit ");
}