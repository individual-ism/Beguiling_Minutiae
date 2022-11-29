class multipleChoiceOptions {
    constructor(a, b, c, d, e) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
}

const q3 = new multipleChoiceOptions('Matteo Salvini', 'Mario Draghi', 'Matteo Renzi', 'Silvio Berlusconi', 'Carlo Azeglio Ciampi')

const questionAnswerPairs = [
    {number: 1,
    question: 'In declaring that "American blood has been shed on American soil", President James Polk sought congressional approval to retaliate against British-controlled Canada.',
    answer: 'false',
    points: 1},
    {number: 2,
    question: 'After President Woodrow Wilson fell ill in the latter half of his second term, this person is rumored to have taken unofficial control of the presidency. What is the first and last name of this person?',
    answer: 'Edith Wilson',
    points: 3},
    {number: 3,
    question: `Italy recently elected and installed its most right-wing government since Mussolini. This new coalition government, led by Giorgia Meloni, includes which former prime minister? Choices (Type full name in the response box): ${q3}`,
    points: 2},
    {number: 4,
    question: ''}
];

let playerAnswer = document.querySelector('#answer');
let fullQuestion = document.querySelector('.questionFullText');
let declarations = document.querySelector('.declarations');
let player1Score = 0;
let player2Score = 0;
let primaryTurn = true;

function evaluateAnswer() {
    if (playerAnswer === questionAnswerPairs[i].answer.toLowerCase) {
        if (primaryTurn === true) {
            player1Score += questionAnswerPairs[i].points;
        } else if (primaryTurn = false) {
            player2Score += questionAnswerPairs[i].points;
        }
    } else {
        declarations = 'Unaccepted answer'
    }
}