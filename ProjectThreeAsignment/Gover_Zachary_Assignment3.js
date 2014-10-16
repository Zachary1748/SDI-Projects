// Project: Project 3
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 16th, 2014
// Term Number: 1410
// Course: SDI

var acceptedOffer = true;
var hirePeople = true;
var hireAmmount;

var jobOffer = prompt("We have an offer from Freelancer.com to build a big eCommerce website, do you want to accept it?", "Yes or No?");

// Procedure
var requestAnswer = function() {
    
    var codingCMS = "Joomla";
    
    if (jobOffer === "Yes" || jobOffer === "yes") {
        
        console.log("Awesome! Let's get started on the project.");
        console.log("Next we need to find out how many people we need to hire for this project.");
        console.log("Also we have decided that we are going to build this eCommerce website with " + codingCMS);
        
        return codingCMS;
        
    } else {
        
        console.log("Oop\'s something went wrong.");
        
        return jobOffer;
        
    }
    
};

// Function is called when user just can't the hireAmmount just right
var hireIncorrect = function () {
    
    console.log("Alright well you couldn't get the hire ammount just right so we will hire 3 PHP expert\'s and 2 JavaScript expert\'s people");
        
    var jsExpert = 2;
    
    var phpExpert = 3;
    
    var hireAmmount = jsExpert + phpExpert;
    
    return hireAmmount;
    
}

if (jobOffer === "Yes" || jobOffer === "yes") {
    
    console.log("Hello " + requestAnswer());

    hireAmmount = prompt("How many people would you like to hire for this project?", "1-10");
    
    while (hireAmmount < 1 || hireAmmount > 10) {
        
        for (hireAmmount = hireAmmount; hireAmmount > 10; hireAmmount--) {
            
            hireAmmount = prompt("Too high! Try again, how many people would you like to hire for this project?", "1-10");
            
        }
        
        for (hireAmmount = hireAmmount; hireAmmount < 1; hireAmmount++) {
            
            hireAmmount = prompt("Too low! Try again, how many people would you like to hire for this project?", "1-10");
            
        }
        
        hireIncorrect();
        
        hireAmmount = 5;
        
        break;
        
    }
    
    
    console.log(hireAmmount);
    
    
} else {
    
    console.log("Dang! We\'ll find another job boss.");
    
}





