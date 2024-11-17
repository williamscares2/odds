const questions = [
    {
        question: "1.What is the basic unit of life?",
        choices: ["Atom", "Cell", "Molecule", "Organ"],
        correctAnswer: 1
    },
    {
        question: "2.What is the SI unit of force?",
        choices: ["Joule", "Newton", "Watt", "Pascal"],
        correctAnswer: 1
    },
    {
        question: "3.When did Uganda get independence?",
        choices: ["1963", "1962", "1900", "1992"],
        correctAnswer: 1
    },
    {
        question: "4.What is the largest country in Africa by land area?",
        choices: ["Egypt", "Nigeria", "Algeria", "South Africa"],
        correctAnswer: 2
    },
    {
        question: "5.What is the chemical symbol for gold?",
        choices: ["Ag", "Au", "Fe", "Hg"],
        correctAnswer: 1
    },
    {
        question: "6.What is the square root of 144?",
        choices: ["10", "12", "14", "16"],
        correctAnswer: 1
    },
    {
        question: "7.Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 0
    },
    {
        question: "8.What is the holy book of Islam?",
        choices: ["Bible", "Torah", "Quran", "Vedas"],
        correctAnswer: 2
    },
    {
        question: "9.What is the capital of Uganda?",
        choices: ["Kampala", "Entebbe", "Gulu", "Mbarara"],
        correctAnswer: 0
    },
    {
        question: "10.Which African country is known as the 'Pearl of Africa'?",
        choices: ["Kenya", "Tanzania", "Uganda", "South Africa"],
        correctAnswer: 2
    
},

    {
        question: "11.What is the process of converting sunlight into energy by plants?",
        choices: ["Photosynthesis", "Respiration", "Chemosynthesis", "Fermentation"],
        correctAnswer: 0
    },
    {
        question: "12.What is the formula for the area of a circle?",
        choices: ["πr²", "2πr", "4πr²", "πr³"],
        correctAnswer: 0
    },
    {
        question: "13What is the chemical symbol for sodium?",
        choices: ["Na", "Cl", "K", "Ca"],
        correctAnswer: 0
    },
    {
        question: "14.What is the largest continent on Earth?",
        choices: ["Asia", "Africa", "North America", "South America"],
        correctAnswer: 0
    },
    {
        question: "15.What is the process of breaking down food into simpler substances?",
        choices: ["Photosynthesis", "Respiration", "Digestion", "Excretion"],
        correctAnswer: 2
    },
    {
        question: "16.What is the Pythagorean Theorem?",
        choices: ["a² + b² = c²", "a² - b² = c²", "a + b = c", "a - b = c"],
        correctAnswer: 0
    },
    {
        question: "17.What is the chemical formula for water?",
        choices: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: 0
    },
    {
        question: "18.What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: 1
    },
    {
        question: "19What is the process of cell division that produces two identical daughter cells?",
        choices: ["Meiosis", "Mitosis", "Fertilization", "Transpiration"],
        correctAnswer: 1
    },
    {
        question: "20.What is the study of the Earth's atmosphere?",
        choices: ["Meteorology", "Geology", "Oceanography", "Astronomy"],
        correctAnswer: 0
    }

];

// ... rest of the JavaScript code

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const resultElement = document.getElementById('result');

    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => {
            if (index === currentQuestion.correctAnswer) {
                li.classList.add('correct');
                score++;
            } else {
                li.classList.add('incorrect');
            }

            // Mark the correct answer regardless of the user's choice
            const correctAnswerElement = choicesElement.children[currentQuestion.correctAnswer];
            correctAnswerElement.classList.add('correct-answer');

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(() => {
                    displayQuestion();
                }, 1200); // Delay before showing the next question
            } else {
                resultElement.textContent = `Your Score is: ${score}/${questions.length}`;
            }
        });
        choicesElement.appendChild(li); // Add the li to the choices element
    });
}

displayQuestion();