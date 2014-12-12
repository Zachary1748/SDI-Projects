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

var stringFunction = function(leadEmp, regularEmp) {
	
	for (var i = 0; i < leadEmp.leadEmployees.length; i++){
	       
		var leadEmployees = json1.leadEmployees[i];
		var regularEmployees = json2.regularEmployees[i];
		
		var leadEmployeeName = "Lead Employee: \n" + leadEmployees.employeename + "\n\n";
		var regularEmployeeName = "Regular Employee: \n" + regularEmployees.employeename + "\n\n";
		
		console.log(leadEmployeeName, regularEmployeeName);
		
	};
	
	var question = prompt("What position is Zachary?", "Lead Developer");
		
	if (question === "Lead Developer") {
		
		console.log("You're Correct!");
		
		return question;
		
	} else {
		
		var answer = console.log("You're incorrect!");
		
		return answer;
		
	}
	
};


//-------------- Main Code ------------------//

console.log("Welcome, my name is Zachary Gover I am a Co-Founder of Gover Development.");

var acceptOffer = prompt("Would you like to accept a project offer from Freelancer.com?", "Yes or No");
acceptOffer = acceptOffer.charAt(0).toUpperCase() + acceptOffer.slice(1);

if (acceptOffer === "Yes") {
	
	var employeeAnswer = stringFunction(json1, json2);
	
	
	
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


















