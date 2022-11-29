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
    answer: 'Edith Wilson',
    points: 5},
    {number: 3,
    question: `Italy recently elected and installed its most right-wing government since Mussolini. This new coalition government, led by Giorgia Meloni, includes support from which former prime minister? Choices (Type full name in the response box): ${q3}`,
    answer: 'Silvio Berlusconi',
    points: 3},
    {number: 4,
    question: 'Moonlight Sonata is one of the most well-known works of Ludwig van Beethoven, but few recall the opus in its official name. Provide the opus number to Piano Sonata No. 14 in Arabic numerals.',
    answer: 27,
    points: 5},
    {number: 5,
    question: `Immanuel Kant, the Seventeenth Century German philosopher, famously wrote a collection of three philosophical critiques, with The Critique of Pure Reason and The Critique of Practical Reason being far more recognized. What was the subject matter of The Critique of Judgment? Choices: ${q5}`,
    answer: 'Aesthetics',
    points: 3},
    {number: 6,
    question: 'Each number represents a letter in the English alphabet. What is the full phrase of the abbreviation represented by XVII V IV?',
    answer: 'Quod erat demonstrandum',
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
let player1Score = 0;
let player2Score = 0;
let primaryTurn;
let questionIndex;
let player;

if (primaryTurn) player = 'Player 1';
else player = 'Player 2';

declarations.innerHTML = `${player}, here is your challenge for contemplation`;

function selectQuestion() {
    questionIndex = Math.floor(Math.random() * questionAnswerPairs.length);
    questionPosed = questionAnswerPairs[questionIndex].question;
}

function playGame() {
    for (let i = 0; i < questionAnswerPairs.length; i++) {
        if (endGame.addEventListener('click', () => {
            if (player1Score > player2Score) {
                declarations = 'Congratulations, Player 1. You reign victorious.';
            } else if (player1Score < player2Score) {
                declarations = 'Kudos to you, Player 2, on your success this game.';
            } else {
                declarations = 'You are too evenly matched in intellect. Till next your minds compete, pursue your curiosity, lest it kill your cat.';
            }
        }));

    };
}

function evaluateAnswer() {
    if (playerAnswer.toLowerCase() === questionAnswerPairs[i].answer.toLowerCase()) {
        if (primaryTurn === true) {
            player1Score += questionAnswerPairs[i].points;
        } else if (primaryTurn = false) {
            player2Score += questionAnswerPairs[i].points;
        }
    } else {
        declarations = 'Unaccepted answer';
        if (primaryTurn === true) {
            player1Score -= Math.ceil(questionAnswerPairs[i].points / 2);
        } else if (primaryTurn = false) {
            player2Score -= Math.ceil(questionAnswerPairs[i].points / 2);
        }
    }
    scoreboard = `Player 1 Points: ${player1Score} | Player 2 Points: ${player2Score}`;
}

playAgain.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    primaryTurn = true;
})

selectQuestion();