
class Account {                                    // class name should start with capital letter

    depositAmount () {                            // we can create n no.of methods inside the class
        console.log("You deposited $500.");
    }

    currentBalance () {
        console.log("Current balance is : $750");
    }
}

//once class is crested we can create n no.of objects

let a1 = new Account ();   // by creating new objects we can access the methods present in the class

console.log(a1.depositAmount);
console.log(a1.currentBalance);

console.log(a1.depositAmount());
console.log(a1.currentBalance());