//How to find object is empty or not?
//we can not able to find the object is empty or not directly..!

emp = {id:101, name:"Nagaraj", loc:"Banglour", sal:45000}

let keys = Object.keys(emp); // it creats an new array called "keys" and store the keys into the array...

console.log(keys); // keys are stored into an array.!

console.log(keys.length)

empty_arr = {};

console.log("empty_arr =",empty_arr);

let no_keys = Object.keys(empty_arr);

let len_keys = no_keys.length;

if (len_keys > 0) {
    console.log("This object contain elements")
}
else {
    console.log("This is Empty object")
}