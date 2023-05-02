const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "Rome",
      c: "Madrid"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest continent?",
    answers: {
      a: "Africa",
      b: "Asia",
      c: "North America"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: {
      a: "Saturn",
      b: "Jupiter",
      c: "Mars"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
         <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;

      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  quizContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct!`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
