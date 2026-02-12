//q1 
const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));
//q2
let num = 4;
const isEven = (num) => num % 2 == 0;
/* q3 
object.logMessage method ke andar this.message likha hai.
Normally agar aap direct object.logMessage() call karte, to output hota:

Hello, World!


Lekin setTimeout(object.logMessage, 1000) ka matlab hai ki aap object.logMessage function ka reference pass kar rahe ho, bina object ke context ke.

Jab JavaScript me ek function bina object ke call hota hai, uska this value:

Browser me → window (ya strict mode me undefined)

Node.js me → undefined

Matlab yaha this.message undefined ho jaayega, kyunki global object me message property nahi hai.

Final Output:
undefined
*/
/* q4
Global variable

let length = 4;


Yaha length global scope me hai (browser me window.length hota hai jo open frames ka count dikhata hai, aur Node.js me ye directly global object me nahi jata).

Function definition

function callback() {
    console.log(this.length);
}


Ye ek normal function hai, aur jab bina object ke call hota hai, uska this:

Strict mode → undefined

Non-strict mode → window ya global object

Matlab this.length ka result undefined ya global object ke hisaab se depend karega.

Object ke andar method

const object = {
    length: 5,
    method(callback) {
        callback();
    },
};


Yaha method function hai jo callback ko call karta hai. Lekin jab ye call hota hai:

object.method(callback, 1, 2);


To callback() direct function call hai, kisi object ke through nahi.

👉 Is wajah se callback ka this global object hoga (ya undefined strict mode me).

Global me kya milega?

Browser me → window.length (jo frames count hota hai, usually 0)

Node.js me → undefined
Final Output:
undefined    */