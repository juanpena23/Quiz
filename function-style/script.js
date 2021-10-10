const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const questionContainerElemet = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const anwerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

function startGame () {
console.log('Started')
stratTimer.classList.remove('hide')
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
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(anwerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct )
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
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
    },
    {
        question: 'The condition in an if / else statemet is enclosed with ______.' ,
        answers: [
            {text:' 1. quotes', correct: false},
            {text:' 2. curly brackets', correct: false},
            {text:' 3. parenthesis', correct: true},
            {text:' 4. square brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers:[
            {text: '1. numbers and settings', correct: false},
            {text: '2. other arrays', corect:false},
            {text: '3. booleans', correct: false},
            {text: '4. all of the above',correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: [
            {text: '1. commas', corect: false},
            {text: '2. curly brackets', corect: false},
            {text: '3. quotes', corect: true},
            {text: '4. parenthesis', corect: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debuging fro printig content to the debugger is:',
        answers: [
            {text:'1. JavaScript', corect: false},
            {text:'2. terminal/bash', corect: false},
            {text:'3. for loops', corect: false},
            {text:'4. console log', corect: true}
        ]
    }
    
]