
let arr = [10,20,20.4,"Rahul",{name:"naga"},[1,2]];

console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
let a1=arr[5]; //assigning the array element insid an array to a new varianle
console.log(a1);
console.log(a1[1]); // by the use of new array name we can access the elements inside th array element seperatly.

//printing all elements in array using for loop

console.log("printing all elements in array using for loop");

for(x in arr) {
    console.log(arr[x]);
}
