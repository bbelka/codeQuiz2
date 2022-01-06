const titleH1 = document.getElementById('title')
const timerSpan = document.getElementById('timer');
const startBtn = document.getElementById('start');
const questionH2 = document.getElementById('question');
const answersOl = document.getElementById('answers');
const gameOverImg = document.getElementById('gameOver')

var questionArr = [
    { question: "What is the HTML tag under which one can write the JavaScript code?", options: ["<javascript>", "<scripted>", "<script>", "<js>"], answer: 2 },
    { question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?", options: ["alertbox(“GeeksforGeeks”);", "msg(“GeeksforGeeks”);", "msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"], answer: 3 },
    { question: "What is the correct syntax for referring to an external script called “geek.js”?", options: ["<script src=”geek.js”>", "<script url=”geek.js”>", "<script ref=”geek.js”>", "<script name=”geek.js”>"], answer: 0 },
    { question: "The external JavaScript file must contain <script> tag. True or False?", options: ["True", "False"], answer: 1 },
    { question: "Which of the following is not a reserved word in JavaScript?", options: ["interface", "throws", "program", "short"], answer: 2 },
    { question: "What is the syntax for creating a function in JavaScript named as Geekfunc?", options: ["function = Geekfunc()", "function Geekfunc()", "function := Geekfunc()", "function : Geekfunc()"], answer: 1 },
    { question: "How is the function called in JavaScript?", options: ["call Geekfunc();", "call function GeekFunc();", "Geekfunc();", "function Geekfunc();"], answer: 2 },
    { question: "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 8?", options: ["if(i<>5)", "if i<>5", "if(i!=5)", "if i!=5"], answer: 2 },
    { question: "What is the correct syntax for adding comments in JavaScript?", options: ["<!–This is a comment–&gt", "//This is a comment", "–This is a comment", "**This is a comment**"], answer: 1 },
    { question: "What is the JavaScript syntax for printing values in Console?", options: ["print(5)", "console.log(5);", "console.print(5);", "print.console(5);"], answer: 1 },
];

let timeLeft;
let currentQuestion = 0;
let score;

const init = () => {
    startBtn.classList.remove('hidden');
};

const gameOverFade = () => {

    setTimeout()
}

const gameOver = () => {
    currentQuestion = 0;
    questionH2.textContent = '';
    timerSpan.textContent = '';
    gameOverImg.classList.remove('hidden');
    titleH1.classList.add('hidden')
    const startOverTimeout = setTimeout(() => {
        gameOverImg.classList.add('hidden');
        titleH1.classList.remove('hidden');
        init();
    }, 2000)
    gameOverImg.addEventListener('click', init)

};

const displayQuestion = () => {

    if (currentQuestion < questionArr.length) {
        questionH2.textContent = questionArr[currentQuestion].question;
        questionArr[currentQuestion].options.forEach((option, i) => {
            const li = document.createElement('li');
            li.setAttribute('data-index', `${i}`)
            li.textContent = option;
            answersOl.appendChild(li);
        })
    } else {
        score += timeLeft;
        timeLeft = 0;
        questionH2.textContent = '';
        timerSpan.textContent = '';
    }
};

const playGame = () => {
    startBtn.classList.add('hidden');
    questionH2.classList.remove('hidden');
    answersOl.classList.remove('hidden');
    timerSpan.classList.remove('hidden')
    timeLeft = 90;
    const timeInterval = setInterval(() => {

        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            gameOver();
        } else {
            --timeLeft;
            timer.textContent = `Time left: ${timeLeft} seconds.`
        };
    }, 1000);
    displayQuestion();
}

const checkAnswer = (event) => {
    if (event.target.dataset.index == questionArr[currentQuestion].answer) {
        ++score;
        console.log("correct");
    } else {
        console.log("wrong");
        ++score;
        timeLeft -= 5;
        displayQuestion();
    }
    while (answersOl.firstChild) answersOl.removeChild(answersOl.firstChild);
    ++currentQuestion;
    displayQuestion();
}

startBtn.addEventListener('click', playGame);
answersOl.addEventListener('click', checkAnswer);

init();