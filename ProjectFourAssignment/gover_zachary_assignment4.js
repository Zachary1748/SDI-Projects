// Project: Project 4
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 23rd, 2014
// Term Number: 1410
// Course: SDI

// Check to see if URL is in the correct format.
var webAddress = function (){
    
    var address = "http://goverdevelopment.com";
    var end = address.indexOf("g"); // Determine where to stop checking for accuracy.
    var withHttp = address.substring(0, end); 
    
    if (withHttp == "http://" || withHttp == "https://") {
        
        console.log("var address is " + address + "." + " That is the correct format.");
        
    } else {
        
        console.log("var address is " + address + " which is not correct, the correct format would start out with https://.");
        
    }
    
    console.log(" ");
    
    return address;
    
};

// Change sentence to have the first letter of every word capitalized.
var upperCase = function(){
    
    var caseWord = "hello! my name is zachary.";
    
    var caseWord = caseWord.toUpperCase();
    
    console.log(caseWord);
    
    console.log(" ");
    
    return caseWord;
    
};

// Replace values within the string
var replaceSeperator = function (){
    
    var sentenceReplace = "We are going to replace some stuff, how about commas and question marks? That would be cool, can we do it?";
    var replaceOne = '/';
    var replaceTwo = '!';
    var sentenceReplace = sentenceReplace.split(',').join(replaceOne);
    var sentenceReplace = sentenceReplace.split('?').join(replaceTwo);
    
    console.log(sentenceReplace);
    
    console.log(" ");
    
    return sentenceReplace;
    
};

// Add cost from sales tax and determine which state is cheaper.
var itemCost = function (){
    
    console.log("We are moving to Texas and we need to figure out the price difference for a couch we are going to buy. " +
                "We would like to know if it will be cheaper to by it here in Oregon rather then Texas.");
    
    var costInOregon = 335.84;
    var costInTexas = 310.21;
    var texasSalesTax = 0.0625;
    
    var costTexasAfterTaxes = (costInTexas * texasSalesTax) + costInTexas;
    
    costTexasAfterTaxes = costTexasAfterTaxes.toFixed(2);
    
    console.log("Okay the cost in Oregon is $" + costInOregon + ". " + "The cost in Texas after sales tax is $" + costTexasAfterTaxes + ".");
    
    if (costTexasAfterTaxes >= costInOregon) {
        
        var finalDecision = console.log("Since the cost is more expensive in Texas, so let\'s buy it in Oregon.");
        
    } else {
        
        var finalDecision = console.log("Since the cost is more expensive in Oregon, let\'s buy it in Texas.");
        
    }
    
    console.log(" ");
    
    return finalDecision
    
};

// Determine how many hours are in 18 days. As well as weeks.
var dateDifference = function(){
    
    var hoursInDay = 24;
    var days = 18;
    var daysInWeek = 7;
    
    var totalHours = hoursInDay * days;
    var totalWeeks = days / daysInWeek;
    
    console.log("There are " + totalHours + " hours between now and when we move or " +
                totalWeeks.toFixed(1) + " weeks before we move.");
    
    console.log(" ");
    
    return totalHours;
    
};

// Convert a string to a number.
var stringToNumer = function (){
    
    var myNumberString = "24";
    
    if (myNumberString == "24") {
        
        myNumberString = parseInt(myNumberString);
        
    } else {
        
        console.log("var myNumberString is already a number no need to convert it. See look: " + myNumberString);
        
    }
    
    console.log(myNumberString);
    
    console.log(" ");
    
    return myNumberString
    
};

// Total cost of bills; Adding string values.
var totalItems = function (){
    
    var costOfBills = ["Electric:", 89.52, "Rent: ", 865.50, "Internet: ", 29.99];
    var totalResult = costOfBills[1] + costOfBills[3] + costOfBills[5];
    
    console.log("Total amount due this month: " + totalResult);
    
    return totalResult;
    
};

webAddress();
upperCase();
replaceSeperator();
itemCost();
dateDifference();
stringToNumer();
totalItems();





