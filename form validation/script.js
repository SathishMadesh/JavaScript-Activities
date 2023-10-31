const form = document.getElementById("form");
const username = document.getElementById("user_name");
const email = document.getElementById("user_email");
const password = document.getElementById("user_password");
const password2 = document.getElementById("confirm_password");

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

String.prototype.isAlpha = function() {
    return !!this.match(/^[a-zA-Z]*$/);
}


function checkInputs(inputs) {
    inputs.forEach((element) => {
        if (element.value.trim() === ""){
            //Error
            errorInput(element,`${getId(element)} is required`);
        } else {
            //Success
            successInput(element);
        }
    });
}

function getId (element) {
    return element.id;
}

function errorInput(element,message) {
    const formGroup = element.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector('p');
    p.innerHTML = message;
}

function successInput(element) {
    const formGroup = element.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector('p');
    p.innerHTML = "";
}

function checkLength(input, min, max) {
    const data = input.value.trim().length;
    if (data < min) {
        errorInput(input,`${getId(input)} must be grater then ${min} characters`);
    } else if (data > max) {
        errorInput(input,`${getId(input)} must be lesser then ${max} characters`);
    } else {
        successInput(input);
    }
}

function checkEmailId(input) {
    if (!input.value.trim().isEmail()) {
        errorInput(input,`${getId(input)} is not a valied email address`);
    }
}

function checkName(input) {
    if (!input.value.trim().isAlpha()) {
        errorInput(input,`${getId(input)} Must be Alphabet`);
    }
}

function checkConfirmPassword (password, password2) {
    if (password.value !== password2.value) {
        errorInput(password2,`${getId(password2)} does not match`);
    }
}

form.addEventListener ("submit", function(e) {
    e.preventDefault();
    checkInputs([username, email, password, password2]);
    checkLength(username, 6, 15);
    checkLength(password, 8, 20);
    checkConfirmPassword(password,password2);
    checkEmailId(email);
    checkName(username);
});