// Project: Project 3
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 16th, 2014
// Term Number: 1410
// Course: SDI

var jobOffer = prompt("We have an offer from Freelancer.com to build a big eCommerce website, do you want to accept it?", "Yes or No?");
var acceptedOffer = true;
var hirePeople = true;
var hireAmmount = 4;

var codingLangauge = function() {
    
    var codingCMS = "Joomla";
    
    console.log("We are going to build this eCommerce website with " + codingCMS);
    
    return codingCMS;
    
};


if (jobOffer == "Yes" || jobOffer == "yes") {
    
    console.log("We have accepted the offer from Freelancer.com Let\'s get started!");
    
    codingLangauge();
    
} else {
    
    alert("Dang! We\'ll find another offer and let you know boss.");
    
}