
//Variables
var enter;
var withUpperCase;
var withLowerCase;
var withNumber;
var withSpecialChar;



var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var space = [];
var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

var upperCase = lowerCase.map(toUpper);

var get = document.querySelector("#generate");
get.addEventListener("click", function () {
    ps = generateNewPassword();
    document.getElementById("password").placeholder = ps;
});


function generateNewPassword() {
    enter = parseInt(prompt("Please enter Password Length? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Please choose between 8 to 128"));
    } else {
        withNumber = confirm("the generator required to include numbers?");
        withSpecialChar = confirm("the generator required to include special characters?");
        withUppercase = confirm("the generator required to include Uppercase letters?");
        withLowercase = confirm("the generator required to include Lowercase letters?");
    };

    if (!withSpecialChar && !withNumber && !withUpperCase && !withLowerCase) {
        choices = alert("You must choose a criteria!");
    }

    // Else if for 4 positive options 
    else if (withSpecialChar && withNumber && withUpperCase && withLowerCase) {
        choices = specialChar.concat(number, upperCase, lowerCase);
    }

    // Else if for 3 positive options 
    else if (withSpecialChar && withNumber && withUpperCase) {
        choices = specialChar.concat(number, upperCase);
    }
    else if (withSpecialChar && withNumber && withLowerCase) {
        choices = specialChar.concat(number, lowerCase);
    }
    else if (withSpecialChar && withUpperCase && withLowerCase) {
        choices = specialChar.concat(upperCase, lowerCase);
    }


    // Else if for 2 positive options 
    else if (withSpecialChar && withNumber) {
        choices = specialChar.concat(number);

    } else if (withSpecialChar && withLowerCase) {
        choices = specialChar.concat(lowerCase);

    } else if (withSpecialChar &&  withUpperCase) {
        choices = specialChar.concat(upperCase);
    }
    else if (withLowercase && withNumber) {
        choices = lowerCase.concat(number);

    } else if (withLowercase && withUppercase) {
        choices = lowerCase.concat(upperCase);

    } else if (withNumber && withUppercase) {
        choices = number.concat(upperCase);
    }

    // Else if for 1 positive option
    else if (withCharacter) {
        choices = specialChar;
    }
    else if (withNumber) {
        choices = number;
    }
    else if (withLowercase) {
        choices = lowerCase;
    }
    // Created space variable to fill uppercase conversion
    else if (withUppercase) {
        choices = space.concat(upperCase);
    };

    var password = [];
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
