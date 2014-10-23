// Project: Project 2
// Name: Zachary Gover
// Student Number: 0003013517
// Date: October 9th, 2014
// Term Number: 1410
// Course: SDI

// Declaring the variables
//var recievedProject = prompt("Should we accept the project from Freelancer.com", "Yes or No");
//var hirePeople = true;
//var hireAmmount = 4;
//
//function answerPrompt() {
//    
//    var myPrompt = parseInt(prompt("This is my prompt question?", ""));
//    
//    if (myPrompt == 4) {
//        
//        console.log("Right on the mark!");
//        
//    } else {
//        
//        console.log("Okay, well maybe not the right number" +
//                    " But that is okay!");
//        
//    }
//    
//    var isCorrect = confirm("You chose " + myPrompt + ", is this correct?");
//    
//    if (isCorrect == true) {
//        
//        if (hirePeople == true) {
//            
//            var myVar = confirm("Are you old?");
//            
//            while(myVar == true) {
//                
//                var myVar = confirm("Are you sure?");
//                
//                if (myVar == false) {
//                    
//                    return myVar;
//                    
//                }
//                
//                return myVar;
//                
//            }
//            
//            console.log("Awesome! " + mayVar + ":" + " go to the next step!");
//            
//        }
//        
//        if (hireAmmount == 4) {
//            
//            howMany = prompt("pick a number between 1 and 4?", "");
//            
//            for (howMany; howMany < 4; howMany++) {
//                
//                console.log("Incorrect! Let's try again!");
//                
//                howMany = prompt("pick a number between 1 and 4?", "");
//                
//                return howMany;
//            }
//            
//        }
//        
//        if (recievedProject == true) {
//            
//            
//            
//        } else {
//            
//            
//            
//        }
//        
//    } else {
//        
//        console.log("Better luck next time!");
//        
//    }
//    
//    console.log("Try Again!");
//    
//};
//
//var p = true;
//var q = false;
//var r = false;
//
//if (p && !(q || r)) {
//    console.log("True");
//} else {
//    
//    console.log("False");
//    
//}

var ExamScores = [20,98,99,50,80,100,90];

var addScore = function (score, data) {
    var TotalOfScores = 0;
    console.log ("Before adding all of your reviews, you recieved " +
        (data.length) + " reviews and ratings were " + ExamScores);
    console.log ("We have also added your last review of " + score +
        " to your review history.  Here are your itemized averages.");
    console.log (" ");
    for (var i = 0; i < data.length; i++) {
        TotalOfScores = TotalOfScores + data [ i ];
        console.log ("Total reviews: " + ( i + 1 ) + ".  Average = " +
            (TotalOfScores / (i + 1)));
        if (i === 4) {
            console.log("   And with todays' review: Average = " +
                ((TotalOfScores + score) / (i + 2)));
        };
    };
    console.log (" ");
    return data;
};

console.log ("All of your ratings have been entered.  Please take a " +
    "moment and review them.  The complete list of your " +
    "reviews are: " + addScore(90,ExamScores));