var allQuestions = [
{
    question: 'Champagne is a sparkling wine made from grapes grown in the Champagne region of which country?',
    choices: ['France', 'Germany', 'Poland', 'Canada'],
    correctAnswer: 'France'
},
{
    question: 'In which country did cheddar cheese originate?',
    choices: ['USA', 'Russia', 'England', 'Spain'],
    correctAnswer: 'England'
},
{
    question: 'Arby\'s is a fast-food restaurant chain specializing in sandwiches made with what main ingredient?',
    choices: ['Roast beef', 'Lettuce', 'Cheese', 'Tomato'],
    correctAnswer: 'Roast beef'
},
{   
    question: 'What is the main ingredient in thousand island dressing?',
    choices: ['Mustard', 'Mayonnaise', 'Wipping cream', 'Milk'],
    correctAnswer: 'Mayonnaise'
},
{   
    question: 'Sushi is a type of cuisine that originated in what country?',
    choices: ['China', 'India', 'Thailand', 'Japan'],
    correctAnswer: 'Japan'
}];

$( "#start" ).click(function() { 

    //( \ ) escape = provides ways to include doublequotes inside a string
    var html = "<form id=\"formQuestion\">";
    for (var i = 0; i < allQuestions.length; i++) {
        var questionString = allQuestions[i].question;

        html += "<h2>" + questionString + "</h2>";
        // var j because it is a for loop in the for loop
        var choicesArray = allQuestions[i].choices;
        for (var j = 0; j < choicesArray.length; j++) {
            //html = html +
            html += "<input type=\"radio\" name=\"question_" + i + "\" value=\"" + choicesArray[j] + "\">" + choicesArray[j] + " "; 
        }
    } 
    html += "</form>";
    $("#content").html(html);

    startTimer();
});

var i = 3;
var timer;
function startTimer() {
    timer = setInterval(function(){ 
        $("#timer").html("Time remaining: " + i-- + " Seconds");
        if (i<0) {
            clearInterval(timer);
            onFinish();
        }
    }, 1000);
}

function onFinish() {
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;

    for (var i = 0; i < allQuestions.length; i++) {
        //http://www.jquerybyexample.net/2012/02/get-radio-button-value-using-jquery.html?m=1
        var radioValue = $("input[name=question_" + i +  "]:checked").val();
        var correctAnswerForQuestion = allQuestions[i].correctAnswer;
        if (typeof radioValue == 'undefined') {
            unanswered++;
        } else if (correctAnswerForQuestion == radioValue) {
            rightAnswer++;
        } else {
            wrongAnswer++;
        }
    }
       
    var allDone = "<h2>All Done!</h2>";
    allDone += "<ul>";
    allDone += "<li>Correct Answers: " + rightAnswer + "</li>";
    allDone += "<li>Incorrect Answers: " + wrongAnswer + "</li>";
    allDone += "<li>Unanswered: " + unanswered + "</li>";
    allDone += "</ul>";               
    $("#content").html(allDone);  
}

















   