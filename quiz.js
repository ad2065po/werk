"use strict"
var questionCount = 0
var answerButtons = document.getElementsByClassName('button-q1');
var answerArray = []
var vragen = ["1. Waar staat html voor?", "2.Kies de correcte HTML element voor de grootste heading", "3.Hoe zet je een comment in een CSS file?", "4.Hoe creëer je een functie in Javascript?", "5.Welke van deze elementen zijn allemaal <table> elementen", "6.Welke CSS property bepaald de text size?", "7.Hoe start een FOR loop?", "8.Hoe maak je een genummerde lijst?", "9.Hoe weergeef je een border met deze pixels: Top border: 10 pixels Bottom border = 5 pixels Left border = 20 pixels Right border = 1 pixel", "10.In welke HTML element zetten we de JavaScript?"]
var antwoorden = [["Hypertext Markup Language", "Hypertool Markup Link", "Hypertext Mock Language", "Hypertext Markup Link"], ["<head>", "<h6>", "<h1>", "<heading>"], ["‘Comment", "/*Comment*/", "//Comment//", "//Comment"], ["function myFunction()", "function myFunction[]", "function = myFunction()", "function $myFunction[]"], ["<table> <tr> <tt>", "<thead> <body> <tr>", "<table> <head> <foot>", "<table> <tr> <td>"], ["Text-style", "font-style", "font-size", "text-size"], ["for (i=0; i<=5)", "for (i<=5;i++)", "for (i=0; i<=5; i++)", "for i = 1 to 5"], ["<ul>", "<dl>", "<ol>", "<list>"]["Border-width:10px 5px 20px 1px;", "Border-width:10px 20px 5px 1px;", "Border-width:5px 20px 10px 1px;", "Border-width: 10px 1px 5px 20px;"], ["<javascript>", "<script>", "<scripting>", "<js>"]]
var correcteAntwoorden = [0, 1, 2, 2, 1, 2, 1, 1, 2, 1]
/**
 * Add actions to page buttons 
 */

function addButtonActions() {
    var nextButton = document.getElementById('nextButton');
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function () {
            checkAnswer(i);

        });
    }


    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
    nextButton.addEventListener("click", function () {
        questionCount++
        nextQuestion();
    });
}

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var endPage = document.getElementById("einde");

    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    endPage.style.display = 'none';
}

function checkAnswer(answer) {

    if (answerArray[0] == null) {
        answerArray.push(answer);
        if (correcteAntwoorden[0] == answer) {
            answerButtons[answer].style.backgroundColor = "#54F445";
            document.getElementById("answer-text").innerHTML = "Je hebt het juiste antwoord geselecteerd";
            console.log(answerButtons[answer]);


        } else {
            answerButtons[answer].style.backgroundColor = "#FF0000";
            answerButtons[correcteAntwoorden[0]].style.backgroundColor = "#54F445";
            document.getElementById("answer-text").innerHTML = "Je hebt het onjuiste antwoord geselecteerd";
            console.log(answerButtons[answer]);
            console.log(answerButtons[correcteAntwoorden[0]]);
        }

    }

}
function nextQuestion() {
    var buttons = document.getElementsByClassName("button-q1")
    document.getElementById("vraag").innerText = vragen[questionCount];
    buttons[1].innerText = antwoorden[questionCount][1];
    buttons[2].innerText = antwoorden[questionCount][2];
    buttons[3].innerText = antwoorden[questionCount][3];
    buttons[0].innerText = antwoorden[questionCount][0];
    document.getElementById("button1").style.backgroundColor = "";
    document.getElementById("button2").style.backgroundColor = "";
    document.getElementById("button3").style.backgroundColor = "";
    document.getElementById("button4").style.backgroundColor = "";

}


/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de vragenpagina');
}

/**
 * Show end page
 */
function showendPage() {
    var page = document.getElementById('einde');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de eindpagina');
}


// Initialize
addButtonActions();
showStartPage();
