// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
// let answer = document.getElementsByClassName('.choice-text')
// const scoreText = document.querySelector('#score');
// const progressBarFull = document.querySelector('#progressBarFull');
// let currentQuestion = {};
// let acceptingAnswers = true;
// let score = 0;
// let questionCounter = 0;
// let availableQuestion = [];
// let questions = [{
//         question: "What is 2+2?",

//         Choice1: '2',
//         Choice2: '4',
//         Choice3: '5',
//         Choice4: '7',
//         answer: 2,

//     },
//     {

//         question: "What is 7+2?",

//         Choice1: "2",
//         Choice2: "4",
//         Choice3: "5",
//         Choice4: "7",
//         answer: 1,


//     }, {

//         question: "What is 2+9?",

//         Choice1: "2",
//         Choice2: "4",
//         Choice3: "5",
//         Choice4: "7",
//         answer: 3,


//     },
//     {
//         question: "What is 4+2?",

//         Choice1: "2",
//         Choice2: "4",
//         Choice3: "5",
//         Choice4: "7",

//         answer: 5


//     }
// ]
// const SCORE_POINTS = 100;
// const MAX_QUESTIONS = 4;

// startGame = () => {
//     questionCounter = 0
//     score = 0
//     availableQuestion = [...questions]
//     getNewQuestion()

// }
// getNewQuestion = () => {
//     if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('/end.htm')
//     }
//     questionCounter++;

//     const questionsIndex = Math.floor(Math.random() * availableQuestion.length)
//     currentQuestion = availableQuestion[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         const number = choice.dataset['number']
//         choice.innerHTML = currentQuestion['choice' + number]
//     })
//     availableQuestion.splice(questionsIndex, 1)
//     acceptingAnswers = true
// }
// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if (!acceptingAnswers) return
//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']
//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
//         if (classToApply === 'correct') {
//             increamentScore(SCORE_POINTS)
//         }
//         selectedChoice.parentElement.classList.add(classToApply)
//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()
//         }, 1000);

//     })

// })


// increamentScore = num => {
//     score += num
//     scoreText.innerText = score
// }
// startGame()
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull');
let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = []
let questions = [{
        question: "Who is co-founder of AkiraChix?",
        choice1: "Marie Chantal",
        choice2: "Linda Kamau",
        choice3: "Emma Marie",
        choice4: "None of Above",
        answer: 2,
    },
    {
        question: "Which programming language is Frontend?",
        choice1: "Python",
        choice2: "C++",
        choice3: "JavaScript",
        choice4: "Kotlin",
        answer: 3
    }, {
        question: "Which one is a markup Language?",
        choice1: "Javascript",
        choice2: "HTML",
        choice3: "PHP",
        choice4: "Rubay",
        answer: 2
    },
    {
        question: "Which one is true for AkiraChix?",
        choice1: "University",
        choice2: "private College",
        choice3: "Public college",
        choice4: "Non profit Organisation",
        answer: 4
    }
]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4;

startgame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions]
    getNewQuestion()
}
getNewQuestion = () => {
    if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.htm')

    }

    questionCounter++
    // progressText.innerHTML = `Question #{questionCounter} of {MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS)*100}%`
    const questionsIndex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice' + number]
    })
    availableQuestion.splice(questionsIndex, 1)
    acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)

        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000);
    })
})
incrementScore = num => {
    score += num
    scoreText.innerText = score

}

startgame()