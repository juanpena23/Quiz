const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)

const questionContainerElemet = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const anwerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

function startGame () {
console.log('Started')
startButton.classList.add('hide')
questionContainerElemet.classList.remove('hide')
shuffledQuestions = questions.sort (() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.Text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        anwerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (anwerButtonsElement.firstChild){
        anwerButtonsElement.removeChild(anwerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {

}

const questions = [
    {
        question: 'Commonly used data types DO NOT inculde' ,
        answers: [
            { Text:'1. strings', correct: true },
            { Text:'2. booleans', correct: false },
            { Text:'3. alerts', correct: false },
            { Text:'4. numbers', correct:false }
        ]
    }
]