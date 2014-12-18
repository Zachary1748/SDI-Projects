// SDI Week 4 1412
// Project 4
// Zachary Gover
// 0003013517
// December 17th, 2014

// Global Variables
var phoneNumber = "000-000-0000";
var sentenceCase = "hello, my name is zachary gover.";
var email = "abc@abc.abc";

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
    
    var inCorrect = myString.charAt(" ").toUpperCase();
    
    console.log(inCorrect);
    
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
    
    console.log("var checkNumber() equals: " + number);

}

// Case correction
//var caseCorrection = checkCase(sentenceCase);

// Check Email
var emailCheck = checkEmail(email);