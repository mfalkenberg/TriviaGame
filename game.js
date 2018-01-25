var allQuestions = [
{
    question: 'Champagne is a sparkling wine made from grapes grown in the Champagne region of which country?',
    choices: ['France', 'Germany', 'Poland', 'Canada'],
    correctAnswer: 0
},
{
    question: 'In which country did cheddar cheese originate?',
    choices: ['England', 'USA', 'Russia', 'Spain'],
    correctAnswer: 2
},
{
    question: 'Arby\'s is a fast-food restaurant chain specializing in sandwiches made with what main ingredient?',
    choices: ['Roast beef', 'Lettuce', 'Cheese', 'Tomato'],
    correctAnswer: 3
},
{   
    question: 'What is the main ingredient in thousand island dressing?',
    choices: ['Mayonnaise', 'Mustard', 'Wipping cream', 'Milk'],
    correctAnswer: 1
},
{   
    question: 'Sushi is a type of cuisine that originated in what country?',
    choices: ['Japan', 'China', 'India', 'Thailand'],
    correctAnswer: 1
}];

$( "#start" ).click(function() {

    var html = "<form id=\"formQuestion\">";
    for (var i = 0; i < allQuestions.length; i++) {
        var questionObject = allQuestions[i];
        var questionString = questionObject.question;

        html = html + "<h2>" + questionString + "</h2>";

        var choicesArray = questionObject.choices;
        for (var j = 0; j < choicesArray.length; j++) {
            //html = html +
            // html += "<h3>" + choicesArray[j] + "</h3>";
            html += "<input type=\"radio\" name=\"question_" + i + "\" value=\"" + j + "\">" + choicesArray[j] + " "; 
        }
    } 
    html += "</form>";

    $("#content").html(html);
    startTimer();
});
var i = 10;
var timer;
function startTimer() {
    timer = setInterval(function(){ 
        $("#timer").html(i--);
        if (i<0) {
            clearInterval(timer);
            alert("End");
        }
    }, 1000);

}

   