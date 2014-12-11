// Project: Project 3
// Name: Zachary Gover
// Student Number: 0003013517
// Date: December 11th, 2014
// Term Number: 1412
// Course: SDI

//-------------- Global Variables ------------------//
var offer = "We\'ve accepted to the offer from freelancer";
var acceptedOffer = true;
var hiring = "Yes, we are going to hire more people";
var hireAmmount = 2;
var companyName = "Gover Development";

//-------------- Functions ------------------//




//-------------- Main Code ------------------//

console.log("Welcome, my name is Zachary Gover I am a Co-Founder of Gover Development.");

var acceptOffer = prompt("Would you like to accept a project offer from Freelancer.com?", "Yes or No");
acceptOffer = acceptOffer.charAt(0).toUpperCase() + acceptOffer.slice(1);

if (acceptOffer === "Yes") {
	
	
	
	console.log("\n \n *PROJECT COMPLETED!*");

	
} else {
	
	// Prompt user to see if they really didn't want the project and capitalize the first letter in the string
	var whyNot = prompt("Did you not want the project?", "Yes or No");
	whyNot = whyNot.charAt(0).toUpperCase() + whyNot.slice(1);
	
	// String Conditional
	if (whyNot === "Yes") {
		
		console.log("Wow, it amazes me that people don\'t read before they click." +
			    " Because if you wanted the job like you just said, then you would have said it the first time." +
			    " Oh well, better luck next time.");
		
	} else {
		
		console.log("Okay, I\'ll keep looking for another project.");
		
	}
	
}


















