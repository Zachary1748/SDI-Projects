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
    
    return address;
    
};

var upperCase = function(){
    
    var caseWord = "hello! my name is zachary.";
    
    var caseWord = caseWord.toUpperCase();
    
    console.log(caseWord);
    
    return caseWord;
    
};

var replaceSeperator = function (){
    
    var sentenceReplace = "We are going to replace some stuff, how about commas and question marks? That would be cool, can we do it?";
    var replaceOne = '/';
    var replaceTwo = '!';
    var sentenceReplace = sentenceReplace.split(',').join(replaceOne);
    var sentenceReplace = sentenceReplace.split('?').join(replaceTwo);
    
    console.log(sentenceReplace);
    
    return sentenceReplace;
    
};

webAddress();
replaceSeperator();
upperCase();







