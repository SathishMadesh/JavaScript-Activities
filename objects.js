
// creating object

let emp = {id:101, name:"Nagaraj", loc:"Banglour", sal:45000}; // objects contain keys and values

console.log(emp);

console.log(emp.id);
console.log(emp.name); //access the element inside the object using their key values

//updating the values in the object

emp.name = "Rahul";

console.log(emp);

//deleting the element in an object

delete emp.loc;

console.log(emp);

//we can iterate the elements inside an object using for in loop

for(x in emp){
    console.log(x);  // only iterate the keys
}

for (x in emp) {
    console.log("key:",x,"- value",emp[x]);  //iterat and access both keys and values
}


