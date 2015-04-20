/**
 * Created by wetcouch on 19.04.2015.
 */
var score = 0;
var currentPage = 0;

var questions = [{
    question: "Is that true, that you can kill basilisk with a mirror?",
    choices: ["Yes", 'No', 'Yes, if you hit him in the head'],
    correctAnswer: 2
}, {
    question: "Nobody expect...?",
    choices: ["Mutated dog", 'Spanish Inquisition', 'Me'],
    correctAnswer: 1
}, {
    question: 'Easy peasy?',
    choices: ['Lemon Squeezy', 'Yes', 'Whaa..?'],
    correctAnswer: 0
}];

function nextPage() {
    page = currentPage + 1;
    function allSels(num) {
        $("#sel" + num).html("<input type='radio' name='1'/>" + questions[page].choices[num])
    }

    $("#question").text(questions[page].question);
    allSels(0);
    allSels(1);
    allSels(2);
}
$(document).ready(function () {

    $("#final").hide();

    $(".next").click(function (event) {
        if (currentPage < 2) {
            nextPage();
            currentPage += 1;
        } else if (currentPage == 2) {
            $('#container').hide();
            $('#final').show();
        }
    })
});
