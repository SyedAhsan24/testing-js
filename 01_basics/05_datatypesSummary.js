// primative 

// 7 Types : String, Number, Boolean, Undefined, null, symbol,bigInt

const score = 100;
const scorevalue = 100.0

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

const bigNumber = 34561237890456456789n

//console.log(typeof bigNumber );
// Array
const hero = ["amir", "salman", "sharukh"];
// object 

const myObj ={
    name:"ahsan",
    age:"19",
}
// function 
const myfunction = function(){
    console.log("hello World");
    
}


// reference (Non primative)

// dataTypes document url = { https://262.ecma-international.org/5.1/#sec-11.4.3}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (premitive),  Heap (non-premitive)

let myyoutube = "Ahsan code youtube"
let anothername = myyoutube
anothername = "Syed Code"
console.log(myyoutube);
console.log(anothername);

let userone ={
    eamil: "syed@gmail.com",
    code:"1234"
}
let usertwo = userone

usertwo.eamil ="code@gmail.com"
console.log(userone.eamil);
console.log(usertwo.eamil);

