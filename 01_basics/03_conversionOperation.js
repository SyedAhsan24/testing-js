let score = "33 abc"
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);

// 33 => 33
// "33 abc" NaN
// true => 1; false =>0

let isloggedIn = "ahsan"
let booleanIsloggedIn = Boolean(isloggedIn)
//console.log(booleanIsloggedIn);

// 1 => true false => 0
// "" => false
// "ahsan" => true

let someNumber = 33
let stringNumber = String(someNumber);
//console.log(typeof stringNumber);

// ******************************** Operation *********************************************

let value = 3
let negvalue = -3
console.log( negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str = "hello"
let str2 = " ahsan"
let str3 = str + str2;
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((2 + 3) * 5 % 7);

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
++gameCounter;
console.log(gameCounter);
 // prefix and postfix js mdn


 
 
 // unary operator 

//  let a = 5;
//  let b = 2;
//  console.log("a =", a , "& b = ", b);
//  console.log(--a);
 
//  console.log("a =", a);
 
// Asignment operator
// let a = 5;
// let b = 2;

// a **= 4;
// console.log("a =", a);

// let mode = "green";
// let color;

// if(mode === "dark"){
//     color = "black";
// }else{
//    color = "white";
// }
// console.log(color);

// let aliyan = 25;

// if(aliyan >= 18){
//     console.log("you can derive it!");
    
// }else{
//     console.log("you can not derive it understood !");
    
// }

let num = 12;

if(num%2 === 0){
    console.log(num, "is even" );
    
}else{
    console.log(num, "is odd");
    
}