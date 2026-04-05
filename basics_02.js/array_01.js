// array arrays are resizeable in js
const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[3]);

// Array Methods

myArr.push(6)
console.log(myArr);
        
myArr.pop()

myArr.unshift(9) // adds element at first
myArr.shift() // removes first element from array

console.log(myArr.includes(10));// tells element present or not
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// slice does not change the origanal array but splice do and splice include the range
