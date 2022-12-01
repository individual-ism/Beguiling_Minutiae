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
    question: 'Moonlight Sonata is one of the most well-known works of Ludwig van Beethoven, but few recall the opus in its official name. Provide the opus number to Piano Sonata No. 14 in words.',
    answer: 'twenty-seven',
    points: 5},
    {number: 5,
    question: `Immanuel Kant, the Seventeenth Century German philosopher, famously wrote a collection of three philosophical critiques, with The Critique of Pure Reason and The Critique of Practical Reason being far more recognized. What was the subject matter of The Critique of Judgment? Choices: ${q5.innerHTML}`,
    answer: 'aesthetics',
    points: 3},
    {number: 6,
    question: 'Each number represents a letter in the English alphabet. What is the full phrase of the abbreviation represented by XVII V IV?',
    answer: 'quod erat demonstrandum',
    points: 5}
];

let playerAnswer = document.querySelector('#answer');
let fullQuestion = document.querySelector('.question');
let declarations = document.querySelector('.declarations');
let endGame = document.querySelector('#endgame');
let scoreboard = document.querySelector('.scoreboard');
let playAgain = document.querySelector('#reset');
let questionPosed = document.querySelector('.question');
let submitButton = document.querySelector('#submit');
let nextQButton = document.querySelector('#nextQuestion');
let startGame = document.querySelector('.startGame')
let player1Score = 0;
let player2Score = 0;
let player;
let utilizedQuestions = [];
let primaryTurn;
let questionIndex = Math.floor(Math.random() * questionAnswerPairs.length);
let playerTurn = document.querySelector('.playerTurn');
let lcPlayerAnswer = playerAnswer.innerHTML.toLowerCase();
let submittingButton = document.querySelector('#submitting');
let subBu = document.querySelector('#subBu');



primaryTurn ? player = 'Player 1' : player = 'Player 2';
playerTurn.innerHTML = `${player}, here is your challenge for contemplation`;



function selectQuestion() {
    let questionIndex = Math.floor(Math.random() * questionAnswerPairs.length);
    questionPosed.innerHTML = questionAnswerPairs[questionIndex].question;
};

function evaluateAnswer() {
    // let questionIndex = Math.floor(Math.random() * questionAnswerPairs.length);
    // selectQuestion();
    // while (player1Score < 150 && player2Score < 150) {
    if (lcPlayerAnswer === questionAnswerPairs[questionIndex].answer) {
        if (player === 'Player 1') {
            player1Score += questionAnswerPairs[questionIndex].points;
            primaryTurn = false;
            player = 'Player 2';
        } else if (player = 'Player 2') {
            player2Score += questionAnswerPairs[questionIndex].points;
            primaryTurn = true;
            player = 'Player 1';
        };
    } else if (lcPlayerAnswer !== questionAnswerPairs[questionIndex].answer) {
        declarations.innerHTML = 'Incorrect';
        if (player === 'Player 1') {
            player1Score -= Math.ceil(questionAnswerPairs[questionIndex].points / 2);
            primaryTurn = false;
            player = 'Player 2';
        } else if (player === 'Player 2') {
            player2Score -= Math.ceil(questionAnswerPairs[questionIndex].points / 2);
            primaryTurn = true;
            player = 'Player 1';
        };
    };
    playerTurn.innerHTML = `${player}, here is your challenge for contemplation`;
    utilizedQuestions.push(questionPosed);
    questionAnswerPairs.slice(questionAnswerPairs[questionIndex]);
    scoreboard.innerHTML = `Player 1 Points: ${player1Score} | Player 2 Points: ${player2Score}`;
};


function winCondition() {
    let conditions = [player1Score > player2Score, player2Score > player1Score];
    conditions.forEach(condition => {
        if (conditions[0]) {
            declarations.innerHTML = 'Congratulations, Player 1. You reign victorious.';
        } else if (conditions[1]) {
            declarations.innerHTML = 'Kudos to you, Player 2, on your success this game.';
        };
    });
};

function conclude() {
    if (player1Score === player2Score) {
        declarations.innerHTML = 'You are too evenly matched in intellect. Till next your minds compete, pursue your curiosity, lest it kill your cat.';
    } else {
        winCondition();
    };
};

function reset() {
    player1Score = 0;
    player2Score = 0;
    playerAnswer.reset();
    // player = 'Player 1';
    scoreboard.innerHTML = `Player 1 Points: ${player1Score} | Player 2 Points: ${player2Score}`;
};



function playGame() {
    while (player1Score < 150 && player2Score < 150) {
        selectQuestion();
        evaluateAnswer();
        playerAnswer.reset();
        if (player === 'Player 1') {
            player = 'Player 2';
        } else {
            player = 'Player 1';
        };
    };
    conclude();
};

nextQButton.addEventListener('click', selectQuestion);
submitButton.addEventListener('click', evaluateAnswer);
playAgain.addEventListener('click', reset);
endGame.addEventListener('click', conclude);
startGame.addEventListener('click', selectQuestion);
// submittingButton.addEventListener('click', evaluateAnswer);


// playGame();

// console.log(lcPlayerAnswer);