// Project: Project 4
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 23rd, 2014
// Term Number: 1410
// Course: SDI

var webAddress = function (){
    
    var address = "http://goverdevelopment.com";
    var end = address.indexOf("g");
    var withHttp = address.substring(0, end);
    
    if (withHttp == "http://" || withHttp == "https://") {
        
        console.log("var address is " + address + "." + " That is the correct format.");
        
    } else {
        
        console.log("var address is " + address + " which is not correct, the correct format would start out with https://.");
        
    }
    
    console.log(" ");
    
    return address;
    
};

var upperCase = function(){
    
    var caseWord = "hello! my name is zachary.";
    
    var caseWord = caseWord.toUpperCase();
    
    console.log(caseWord);
    
    console.log(" ");
    
    return caseWord;
    
};

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

webAddress();
upperCase();
replaceSeperator();
itemCost();







