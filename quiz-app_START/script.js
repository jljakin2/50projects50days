const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// 1. grab all elements
// 2. define variables to track which question is showing and what the user's score is
// 3. load quiz
//  - deselect all inputs
//  - change current quiz that is showing
//  - show the quiz data and update the innerHTML for all relevant elements
// 4. track user's answer and submit in order to track score
// 5. once all questions are answered, show score and offer reload button

const container = document.getElementById("quiz");
const question = document.querySelector("#question");
const answers = document.querySelectorAll(".answer");
const submitBtn = document.querySelector("#submit");
const labelA = document.querySelector("#a_text");
const labelB = document.querySelector("#b_text");
const labelC = document.querySelector("#c_text");
const labelD = document.querySelector("#d_text");

let score = 0;
let currentQuestion = 0;

showQuestion();

function showQuestion() {
  // deselect all answers
  answers.forEach(answer => {
    answer.checked = false;
  });

  // update text for question
  question.innerText = quizData[currentQuestion].question;
  labelA.innerText = quizData[currentQuestion].a;
  labelB.innerText = quizData[currentQuestion].b;
  labelC.innerText = quizData[currentQuestion].c;
  labelD.innerText = quizData[currentQuestion].d;
}

function getAnswer() {
  let userAnswer;

  answers.forEach(answer => {
    if (answer.checked) {
      userAnswer = answer.id;
    }
  });

  return userAnswer;
}

function nextQuestion() {
  const answer = getAnswer();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      container.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
    `;
    }
  }
}

submitBtn.addEventListener("click", nextQuestion);
