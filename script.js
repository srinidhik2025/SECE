console.log("js testing");

var x = 10;
var x = 20;

let a = 10;
a = 50;

const b = 10;
console.log(b);
console.log(typeof a);

let c = 22;
{
    let c = 10;
    
}
console.log(c);

let obj = {
    name: "test",
    age: 40
};
console.log(obj.name);

let num = 10;
let num2 = num;
num2 = 40;
console.log(num);

console.log(5 == '5');

function add(a, b) {
    return a + b;
}
console.log(add(99, 88));

// Arrow function
const add1 = (a, b, c) => {
    return a + b + c;
};
console.log(add1(9, 8, 7));

// Callback function
const cal = (a, b, callback) => {
    return callback(a, b);
};
console.log(cal(9, 9, add));

// Map
let arr = [1, 2, 3, 4, 5];

const doubleNumbers = (num) => num * 2;
const doubledArr = arr.map(doubleNumbers);
console.log(doubledArr);

// Array of objects
let marks = [
    { name: 'A', age: 30, marks: 85 },
    { name: 'B', age: 33, marks: 90 },
    { name: 'C', age: 35, marks: 78 }
];

// Map
const nameList = marks.map((detail) => detail.name);
console.log(nameList);

// Filter
const highPerformers = marks.filter((detail) => detail.marks > 80);
console.log(highPerformers);

//find
const findMark=marks.find((detail)=>detail.marks<90)
console.log(findMark);

//reduce
const reduceArr=arr.reduce((total,num)=>{return total+num})
console.log(reduceArr)

//Template literals
let name='Sri'
let mark=100
console.log(`I am ${name} have scored ${mark}`)