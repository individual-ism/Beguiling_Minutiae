// Setting base for multiple choice answers
class multipleChoiceOptions {
    constructor(a, b, c, d, e) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
}

// Defining multiple choice answers
const q3 = new multipleChoiceOptions('Matteo Salvini', 'Mario Draghi', 'Matteo Renzi', 'Silvio Berlusconi', 'Carlo Azeglio Ciampi');
const q5 = new multipleChoiceOptions('Meta Ethics', 'Aesthetics', 'Asceticism', 'Religion', 'Practical Ethics');
const q7 = new multipleChoiceOptions('Isomorphic', 'Catamorphic', 'Anthropomorphic', )

// Listing all question/answer pairs with respective numbers and point values
const questionAnswerPairs = [
    {number: 1,
    question: 'In declaring that "American blood has been shed on American soil", President James Polk sought congressional approval to retaliate against British-controlled Canada.',
    answer: 'false',
    points: 1},
    {number: 2,
    question: 'After President Woodrow Wilson fell ill in the latter half of his second term, this person is rumored to have taken unofficial control of the presidency. What is the first and last name of this person?',
    answer: 'edith wilson',
    points: 5},
    {number: 3,
    question: `Italy recently elected and installed its most right-wing government since Mussolini. This new coalition government, led by Giorgia Meloni, includes support from which former prime minister? Choices (Type full name in the response box): ${q3.innerHTML}`,
    answer: 'silvio berlusconi',
    points: 3},
    {number: 4,
    question: 'Moonlight Sonata is one of the most well-known works of Ludwig van Beethoven, but few recall the opus in its official name. Provide the opus number to Piano Sonata No. 14 in Arabic numerals.',
    answer: 27,
    points: 5},
    {number: 5,
    question: `Immanuel Kant, the Seventeenth Century German philosopher, famously wrote a collection of three philosophical critiques, with The Critique of Pure Reason and The Critique of Practical Reason being far more recognized. What was the subject matter of The Critique of Judgment? Choices: ${q5.innerHTML}`,
    answer: 'aesthetics',
    points: 3},
    {number: 6,
    question: 'Each number represents a letter in the English alphabet. What is the full phrase of the abbreviation represented by XVII V IV?',
    answer: 'quod erat demonstrandum',
    points: 5},
    {number: 7,
    question: ''}
];

let playerAnswer = document.querySelector('#answer');
let fullQuestion = document.querySelector('.questionFullText');
let declarations = document.querySelector('.declarations');
let endGame = document.querySelector('#endgame');
let scoreboard = document.querySelector('.scoreboard');
let playAgain = document.querySelector('#reset');
let questionPosed = document.querySelector('.questionFullText');
let submitButton = document.querySelector('#submit');
let nextQButton = document.querySelector('#nextQuestion');
let player1Score = 0;
let player2Score = 0;
let player = 'Player 1';
let utilizedQuestions = [];
let primaryTurn;
let questionIndex = Math.floor(Math.random() * questionAnswerPairs.length);



primaryTurn ? 'Player 1' : 'Player 2';
declarations.innerHTML = `${player}, here is your challenge for contemplation`;

function selectQuestion() {
    questionPosed.innerHTML = questionAnswerPairs[questionIndex].question;
    return questionPosed.innerHTML;
}

function evaluateAnswer() {
    if (playerAnswer.innerHTML.toLowerCase() === questionAnswerPairs[questionIndex].answer) {
        if (primaryTurn === true) {
            player1Score += questionAnswerPairs[questionIndex].points;
        } else if (primaryTurn = false) {
            player2Score += questionAnswerPairs[questionIndex].points;
        }
    } else {
        declarations.innerHTML = 'Unaccepted answer';
        if (primaryTurn === true) {
            player1Score -= Math.ceil(questionAnswerPairs[questionIndex].points / 2);
        } else if (primaryTurn = false) {
            player2Score -= Math.ceil(questionAnswerPairs[questionIndex].points / 2);
        }
    }
    scoreboard.innerHTML = `Player 1 Points: ${player1Score} | Player 2 Points: ${player2Score}`;
}

function winCondition() {
    let conditions = [player1Score > player2Score, player2Score > player1Score];
    conditions.forEach(condition => {
        if (conditions[0]) {
            declarations.innerHTML = 'Congratulations, Player 1. You reign victorious.';
            // return declarations.innerHTML;
        } else if (conditions[1]) {
            declarations.innerHTML = 'Kudos to you, Player 2, on your success this game.';
            // return declarations.innerHTML;
        };
    });
}

function conclude() {
    if (player1Score === player2Score) {
        declarations.innerHTML = 'You are too evenly matched in intellect. Till next your minds compete, pursue your curiosity, lest it kill your cat.';
        // return declarations.innerHTML;
    } else {
        winCondition();
    }
}

function reset() {
    player1Score = 0;
    player2Score = 0;
    // playerAnswer.innerHTML.reset();
    primaryTurn = true;
    document.getElementByClass('scoreboard').reset();
}

nextQButton.addEventListener('click', selectQuestion);
submitButton.addEventListener('click', evaluateAnswer);
playAgain.addEventListener('click', reset);
endGame.addEventListener('click', conclude);

function playGame() {
//     // for (let i = 0; i < questionAnswerPairs.length; i++) {
//         if (endGame.addEventListener('click', winCondition));
//         else {

//             selectQuestion();

//             if (player1Score >= 150 || player2Score >= 150) {
//                 winCondition();
//             } else {
//                 if (player = 'Player 1') {
//                     player = 'Player 2';
//                 } else if (player = 'Player 2') {
//                     player = 'Player 1';
//                 }
//             }
//         }
//     // }
// // }
while (player1Score < 150 && player2Score < 150){
        selectQuestion();
        evaluateAnswer();
        playerAnswer.innerHTML = '';
        primaryTurn ? player = 'Player 1' : player = 'Player 2'
    }
        conclude();
}



// playGame();

// function playingGame() {
//     while (player1Score < 150 && player2Score < 150){
//         selectQuestion();
//         evaluateAnswer();
//     }
//     isDraw();
//     winCondition();
// }

// playingGame();

