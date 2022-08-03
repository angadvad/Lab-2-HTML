function ValidateEmail(inputText) {
    var mailformat = /\w+@\w+.com/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.e1.email.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.e1.email.focus();
        return false;
    }
}

function ValidateName(inputText) {
    var nameformat = /[A-Za-z]+ [A-Za-z]+/;
    if (inputText.value.match(nameformat)) {
        alert("Valid name yay!");
        document.e1.name.focus();
        return true;
    }
    else {
        alert("Invalid name boo!");
        document.e1.name.focus();
        return false;
    }
}