// Project: Project 3
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 16th, 2014
// Term Number: 1410
// Course: SDI

var jobOffer;
var hirePeople = true;
var hireAmmount;

jobOffer = prompt("We have an offer from Freelancer.com to build a big eCommerce website, do you want to accept it?", "Yes or No?");

// Procedure
var requestAnswer = function() {
    
    var codingCMS = "Joomla";
    
    if (jobOffer === "Yes" || jobOffer === "yes") {
        
        console.log("Awesome! Let's get started on the project.");
        console.log("Also we have decided that we are going to build this eCommerce website with " + codingCMS);
        console.log("Next we need to find out how many people we need to hire for this project.");
        
        return codingCMS;
        
    } else {
        
        console.log("Oop\'s something went wrong.");
        
        return jobOffer;
        
    }
    
};

// Function is called when user just can't the hireAmmount just right
var hireIncorrect = function () {
    
    console.log("Alright well you couldn't get the hire ammount just right so we will hire 3 PHP expert\'s and 2 JavaScript expert\'s");
        
    var jsExpert = 2;
    
    var phpExpert = 3;
    
    var hireAmmount = jsExpert + phpExpert;
    
    return hireAmmount;
    
};

// People we are hiring and their information
var handleJS = function (json) {
    
    console.log("Here is a list of all of the JavaScript experts we know we are going to hiring: ");
    
    for (var i = 0; i < json.jsExpert.length; i++){
        
        var friend = json.jsExpert[i];
        console.log("Position: " + friend.position +
                    " Name: " + friend.name +
                    " Age: " + friend.age);
        
    };
    
};

var handlePHP = function (json) {
    
    console.log("Here is a list of all of the PHP experts we know we are going to hiring: ");
    
    for (var i = 0; i < json.phpExpert.length; i++){
        
        var friend = json.phpExpert[i];
        console.log("Position: " + friend.position +
                    " Name: " + friend.name +
                    " Age: " + friend.age);
        
    };
    
};

// Output all of the value as long as the user typed yes in the jobOffer prompt
if (jobOffer === "Yes" || jobOffer === "yes") {
    
    alert("We are going to build the website using " + requestAnswer());

    hireAmmount = prompt("How many people would you like to hire for this project?", "5-10");
    
    while (hireAmmount < 5 || hireAmmount > 10) {
        
        for (hireAmmount = hireAmmount; hireAmmount > 10; hireAmmount--) {
            
            hireAmmount = prompt("Too high! Try again, how many people would you like to hire for this project?", "5-10");
            
        };
        
        for (hireAmmount = hireAmmount; hireAmmount < 5; hireAmmount++) {
            
            hireAmmount = prompt("Too low! Try again, how many people would you like to hire for this project?", "5-10");
            
        };
        
        hireIncorrect();
        
        hireAmmount = 5;
        
        break;
        
    };
    
    
    console.log("We know for sure that we going to hire " + hireAmmount + " people");
    
    
    handleJS(json1);
    
    handlePHP(json2);
    
    
// If the user types anything other then yes in the jobOffer prompt    
} else {
    
    console.log("Dang! We\'ll find another job boss.");
    
}





