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
        $("#sel" + num).html("<input id='chbox" + num +"' type='radio' name='1'/>" + questions[page].choices[num])
    }

    $("#question").text(questions[page].question);
    allSels(0);
    allSels(1);
    allSels(2);
}
$(document).ready(function () {

    $("#final").hide();
    $("#error").hide();

    $(".next").click(function (event) {

        if (!$("input:radio:checked").val()) {
            $("#error").show();
            $(".close").click(function () {
                $("#error").hide();
            });
        } else {
            if (currentPage < 2) {
                if (currentPage == 0) {
                    if ($('#chbox2').prop("checked")) {
                        score += 1;
                    }
                } else if (currentPage == 1) {
                    if ($('#chbox1').prop("checked")) {
                        score += 1;
                    }
                }
                nextPage();
                currentPage += 1;
            }
            else if (currentPage == 2) {
                if ($('#chbox0').prop("checked")) {
                    score += 1;
                }
                $('#container').hide();
                $('#final').show();
                $('#finalScore').html("Congratulations! You hit " + score + " out of 3 proper answers!");
            }
        }
    })
});
