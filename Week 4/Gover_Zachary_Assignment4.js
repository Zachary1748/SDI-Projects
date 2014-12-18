// SDI Week 4 1412
// Project 4
// Zachary Gover
// 0003013517
// December 17th, 2014

// Global Variables
var phoneNumber = "000-000-0000";
var sentenceCase = "hello my name is zachary gover.";
var email = "abc@abc.abc";
var webAddress = "https://goverdevelopment.com";

// Functions
var checkNumber = function(number) {
    
    var firstThree = number.charAt(3);
    var secondThree = number.charAt(7);
    var correctLength = number.length;
    
    if (firstThree == "-" && secondThree == "-" && correctLength === 12) {
        
        console.log("Correct!");
        return number;
        
    } else {
        
        console.log("INCORRECT! Please try again!");
        return false;
        
    }
    
};

var checkCase = function(myString) {
    
    var words = myString.split(' ');
    
    for(var i = 1 ; i < words.length ; i++){
        
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
        
    }
    
    words = words.join();
    words = words.split(',').join(' ');
    words.charAt(0).toUpperCase() + words.slice(1);
    console.log(words);
    
    return words;
    
};

var checkEmail = function(argEmail) {
    
    var atSign = email.charAt(3);
    var period = email.charAt(7);
    
    if (atSign == "@" && period == ".") {
        
        console.log("Correct!");
        return argEmail;
        
    } else {
        
        console.log("INCORRECT!");
        return false;
        
    }
    
};


// Main Code
// Check number pattern
var number = checkNumber(phoneNumber);

if (number != false) {
    
    console.log("var number() equals: " + number);

}

// Case correction
var caseCorrection = checkCase(sentenceCase);

// Check Email
var emailCheck = checkEmail(email);
if (emailCheck != false) {
    
    console.log("var emailCheck() equals: " + emailCheck);

}

