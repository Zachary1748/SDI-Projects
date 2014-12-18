// SDI Week 4 1412
// Project 4
// Zachary Gover
// 0003013517
// December 17th, 2014

// Global Variables
var phoneNumber = "000-000-0000";

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


// Main Code
// Check number pattern
var number = checkNumber(phoneNumber);

if (number != false) {
    
    console.log("var checkNumber() equals: " + number);

}
