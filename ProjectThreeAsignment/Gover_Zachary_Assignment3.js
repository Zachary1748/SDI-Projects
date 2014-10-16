// Project: Project 3
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 16th, 2014
// Term Number: 1410
// Course: SDI

var acceptedOffer = true;
var hirePeople = true;
var hireAmmount = 4;

var jobOffer = prompt("We have an offer from Freelancer.com to build a big eCommerce website, do you want to accept it?", "Yes or No?");

// Procedure
var codingLangauge = function() {
    
    // Local Variables
    var codingCMS = "Joomla";
    
    // Conditional Statement
    if (jobOffer === "Yes" || jobOffer === "yes") {
        
        // Nested Conditional Statement
        if (codingCMS == "Joomla") {
            
            console.log("Awesome! Let's get started on the project.");
            console.log("Next we need to find out how many people we need to hire for this project.");
            console.log("Also we have decided that we are going to build this eCommerce website with " + codingCMS);
            
            return codingCMS
            
        } else {
            
            console.log("Oop's there was an error. We were supposed to be building this website using Joomla.");
            
        }
        
    } else {
        
        alert("Dang! We\'ll find another offer and let you know boss.");
        
    }
    
    return codingCMS;
    
}

codingLangauge();

if (jobOffer === "Yes" || jobOffer === "yes") {
    
    confirm("We have accepted the project offer and we are going to build it using " + codingCMS);
    
}

