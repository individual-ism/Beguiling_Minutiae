// Sets forth all questions, answers, and points values
const qA = [
    {
        number: 0,
        question: 'In declaring that "American blood has been shed on American soil", President James Polk sought congressional approval to retaliate against British-controlled Canada. True or False?',
        answer: 'false',
        points: 1
    },
    {
        number: 1,
        question: 'After President Woodrow Wilson fell ill in the latter half of his second term, this person is rumored to have taken unofficial control of the presidency. What is the first and last name of this person?',
        answer: 'edith wilson',
        points: 4
    },
    {
        number: 2,
        question: 'Italy recently elected and installed its most right-wing government since Mussolini. This new coalition government, led by Giorgia Meloni, includes support from which former prime minister? (1. Matteo Salvini; 2. Silvio Berlusconi; 3. Matteo Renzi; 4. Giuseppe Conte)',
        answer: 'silvio berlusconi',
        points: 3
    },
    {
        number: 3,
        question: 'Moonlight Sonata is one of the most well-known works of Ludwig van Beethoven, but few recall the opus in its official name. Provide the opus number to Piano Sonata No. 14 in Arabic numerals.',
        answer: '27',
        points: 2
    },
    {
        number: 4,
        question: 'Immanuel Kant, the Seventeenth Century German philosopher, famously wrote a collection of three philosophical critiques, with The Critique of Pure Reason and The Critique of Practical Reason being far more recognized. What was the primary subject matter of The Critique of Judgment? (1. Metaethics; 2. Legal ethics; 3. Asceticism; 4. Aesthetics)',
        answer: 'aesthetics',
        points: 3
    },
    {
        number: 5,
        question: 'Each number chronologically represents a letter in the English alphabet. What is the full phrase of the abbreviation represented by XVII V IV?',
        answer: 'quod erat demonstrandum',
        points: 5
    },
    {
        number: 6,
        question: 'In light of the military invasion of Ukraine by Russia, this Russian has emerged as one of the prime sources of the ideology justifying the war. Nicknamed "Putin\'s Rasputin", what is the first and last name of this person?',
        answer: 'aleksandr dugin',
        points: 5
    },
    {
        number: 7,
        question: 'In Pirkei Avos, Rabbi Hillel famously debates which other rabbi?',
        answer: 'shamai',
        points: 2
    },
    {
        number: 8,
        question: 'In the book of Bereshis (Genesis), many recall the children of Adam and Chava (Eve) as Cain and Abel. What was the name of their third child?',
        answer: 'seth',
        points: 2
    },
    {
        number: 9,
        question: 'President Ronald Reagan was nicknamed "The Great Communicator", but which American president begun the tradition of addressing American families through a mass media in their respective homes? Provide the first, middle, and last name.',
        answer: 'franklin delano roosevelt',
        points: 2
    },
    {
        number: 10,
        question: 'To address the COVID-19 pandemic, several pharmaceutical companies developed vaccines. What is the commercial brand name under which the Johnson & Johnson vaccine was sold?',
        answer: 'janssen',
        points: 1
    },
    {
        number: 11,
        question: 'Immanuel Kant and Jean-Jacques Rousseau - 18th century philosophers - endorsed versions of republican government in their works of political philosophy. Which philosopher of the preceding century argued in favor of a single Sovereign instead?',
        answer: 'thomas hobbes',
        points: 4
    },
    {
        number: 12,
        question: 'The United States Declaration of Independence declares that man is "endowed with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness." Though derived from the philosophy of John Locke, for what did Locke advocate in place of the pursuit of Happiness?',
        answer: 'property',
        points: 2
    },
    {
        number: 13,
        question: 'John F. Kennedy served as the first Catholic president of the United States, but who was the first Catholic nominee of a major political party? Provide the full first and last name.',
        answer: 'alfred smith',
        points: 2
    },
    {
        number: 14,
        question: 'Due to octopi having previously been discussed, what animal did Chris say was his second favorite?',
        answer: 'owl',
        points: 1
    },
    {
        number: 15,
        question: 'The quote, "Heav\'n has no rage, like love to hatred turn\'d,/Nor Hell a fury, like a woman scorn\'d.", is often misattributed. Who was the playwright responsible for this line?',
        answer: 'william congreve',
        points: 4
    },
    {
        number: 16,
        question: 'Ayn Rand wrote two well-known novels in the mid-twentieth century, promoting a form of individualism. Cited by advocates of the free market economy, who is the character she deemed most representative of her philosophy? Provide the first and last name.',
        answer: 'john galt',
        points: 2,
    },
    {
        number: 17,
        question: 'Had Britain fallen to the rule of the Nazis during the second world war, a plan had been laid out to reinstate George V as king, overthrowing the existent monarch and constitutional government. True or false?',
        answer: 'false',
        points: 1
    },
    {
        number: 18,
        question: 'More than fifty percent of American presidents were born in one of four states, or their preceding colonial entities.',
        answer: 'true',
        points: 1
    },
    {
        number: 19,
        question: 'This Saturday Night Live alumnus went on to serve as a United States Senator from the state of Minnesota. What is his last name?',
        answer: 'franken',
        points: 1
    },
    {
        number: 20,
        question: 'The Lower East Side of New York has historically strong Jewish roots. Yonah Schimmel is one such business representative of those ties. What is the primary product sold there? Pluralize your response.',
        answer: 'knishes',
        points: 2
    },
    {
        number: 21,
        question: 'This president of the United States was the first to apologize for the internment of Japanese Americans during World War II. Who was he? Provide the first and last name.',
        answer: 'ronald reagan',
        points: 2
    },
    {
        number: 22,
        question: 'Prior to the abolition of the death penalty, France last used the guillotine in which year? (1. 1942; 2. 1977; 3. 1789; 4. 1812)',
        answer: '1977',
        points: 3
    },
    {
        number: 23,
        question: 'Shinzo Abe, the former Japanese prime minister, was assassinated due to his association with the Unification Church. What was the name of the founder of said church? Provide the full name.',
        answer: 'sun myung moon',
        points: 4
    },
    {
        number: 24,
        question: 'The phrase, "Drinking the Kool-Aid", was made famous in the aftermath of the mass suicide event propogated by this man. Who is he? Provide the first and last name by which he was known.',
        answer: 'jim jones',
        points: 2
    },
    {
        number: 25,
        question: 'This former Missouri congressman became prominent in the national news for a claim made during a 2012 Senate campaign that "If it\'s a legitimate rape, the female body has ways to try to shut that whole thing down." What was his  name? Provide the first and last name by which he was known.',
        answer: 'todd akin',
        points: 4
    },
    {
        number: 26,
        question: 'The number of Supreme Court justices is explicitly set forth by the Constitution of the United States. True or false?',
        answer: 'false',
        points: 1
    },
    {
        number: 27,
        question: 'In 1972, eleven Israelis were abducted by a terrorist group at the Munich Olympic Games. What was the name of this terrorist group?',
        answer: 'black september',
        points: 2
    },
    {
        number: 28,
        question: 'The state of Virginia enacted the Racial Integrity Act - an anti-miscegenation law - and the Virginia Sterilization Act - a eugenics law - in 1924. Only one of these laws was overturned by the Supreme Court. What is the name of the case that did not overturn a law? Provide your response as "party 1 v. party 2".',
        answer: 'buck v. bell',
        points: 4
    },
    {
        number: 29,
        question: 'The signature song of Frank Sinatra, "My Way", was musically based on the French song, "Comme D\'habitude". What is the first and last name of the composer of "Comme D\'habitude"?',
        answer: 'jacques revaux',
        points: 5
    },
    {
        number: 30,
        question: 'President George Washington, in his farewell address, affirmed his commitment to the established, though new, constitutional republican government. The letter most famously warned against the formation of what?',
        answer: 'political parties',
        points: 4
    },
    {
        number: 31,
        question: 'The case of Marbury v. Madison established the supremacy of the Supreme Court in interpreting the Constitution. It was brought forth because which president refused to deliver those judicial commissions approved but not delivered under his predecessor? Provide the first and last name.',
        answer: 'thomas jefferson',
        points: 2
    },
    {
        number: 32,
        question: 'President Ronald Reagan had the opportunity to appoint a third new justice to the Supreme Court in 1987. His initial nominee, Robert Bork was rejected by the Senate. Who did the President appoint and was subsequently confirmed? Provide the first and last name.',
        answer: 'anthony kennedy',
        points: 2
    },
    {
        number: 33,
        question: 'Dean Martin hosted a roast show from the MGM Grand Hotel in Las Vegas during the mid- to late-1900s. Who served as roast master when Dean Martin was the guest of honor?',
        answer: 'don rickles',
        points: 4
    },
    {
        number: 34,
        question: 'The Gulag system was established by Czar Nicholas II and perpetuated by the succeeding Soviet regime. True or false?',
        answer: 'false',
        points: 1
    },
    {
        number: 35,
        question: 'Euler\'s number begins with 2.718281828. What are the following six digits?',
        answer: '459045',
        points: 5
    },
    {
        number: 36,
        question: 'New Zealand has a robust wine industry. With which American state is the climate similar, such that the wine grape varietals grown are largely of overlapping? Provide the full state name.',
        answer: 'oregon',
        points: 4
    },
    {
        number: 37,
        question: 'Within the first few months of his first term, Abraham Lincoln suspended what kind of writ in the name of suppressing the rebellion of the Confederate States?',
        answer: 'habeas corpus',
        points: 2
    },
    {
        number: 38,
        question: 'In the seventy five years since the passage of the National Security Act of 1947, only three secretaries of defense have required congressional waivers. Most recently, James Mattis and Lloyd Austin - the first defense secretaries for their respective presidents - were granted such waivers, but who was the first? Provide the first and last name.',
        answer: 'george marshall',
        points: 5
    },
    {
        number: 39,
        question: 'The square root of -1 is an imaginary number. By what variable name is it referred?',
        answer: 'i',
        points: 4
    },
    {
        number: 40,
        question: 'An _____ is an atom or collection of atoms bearing the same atomic number as its periodic table base element but with a different mass number, whilst an _____ is an atom or collection of atoms that has either gained or lost electrons, consequently generating either a positive or negative charge. (1. ion/isotope; 2. isotope/ion; 3. amorphism/isotope; 4. ion/amorphism)',
        answer: 'isotope/ion',
        points: 2
    }
];

// Aligns JavaScript variables with HTML elements
let playerAnswer = document.querySelector('#input_id');
let declarations = document.querySelector('.declarations');
let endGame = document.querySelector('#endGame');
let scoreboard = document.querySelector('.scoreboard');
let playAgain = document.querySelector('#reset');
let questionPosed = document.querySelector('.question');
let submitButton = document.querySelector('#submit');
let nextQButton = document.querySelector('#nextQuestion');
let startGame = document.querySelector('.startGame');
let directions = document.querySelector('.directions');
let playerTurn = document.querySelector('.playerTurn');
document.getElementById('submit').disabled = true;
document.getElementById('nextQuestion').disabled = true;
document.getElementById('endGame').disabled = true;
document.getElementById('reset').disabled = true;

// Creates variables for functional usage
let player1Score = 0;
let player2Score = 0;
let player = 'Player 1';
let utilizedQuestions = [];
let userInput = playerAnswer.innerHTML;
let primaryTurn;
let indexNum = Math.floor(Math.random() * qA.length);
let directionsOn = true;

// Determines turn order and message for each turn
primaryTurn ? player = 'Player 1' : player = 'Player 2';
playerTurn.innerHTML = 'Players 1 & 2: Prepare for the battle of your wits. First to 50 points wins.';


// Determines random index for questions
function determineIndex() {
    indexNum = Math.floor(Math.random() * qA.length);
}

// Utilizes index to return a question and display it on the screen
function selectQuestion() {
    qA.forEach(q => {
        determineIndex();
        questionPosed.innerHTML = qA[indexNum].question;
        document.getElementById('submit').disabled = false;
        document.getElementById('nextQuestion').disabled = true;
    })
    return indexNum;
};

// Determines whether the answer is correct and adds points accordingly
function evaluateAnswer() {
    document.getElementById('submit').disabled = true;
    document.getElementById('nextQuestion').disabled = false;
    const userInput = document.getElementById('input_id').value;
    if (userInput.toLowerCase() === qA[indexNum].answer) {
        declarations.innerHTML = 'Correct';
        if (player === 'Player 1') {
            player1Score += qA[indexNum].points;
            primaryTurn = false;
            player = 'Player 2';
        } else if (player = 'Player 2') {
            player2Score += qA[indexNum].points;
            primaryTurn = true;
            player = 'Player 1';
        };
        utilizedQuestions.push(questionPosed);
        qA.splice(indexNum, 1);
    } else if (userInput !== qA[indexNum].answer) {
        declarations.innerHTML = 'Incorrect';
        if (player === 'Player 1') {
            player1Score -= Math.ceil(qA[indexNum].points / 2);
            primaryTurn = false;
            player = 'Player 2';
        } else if (player === 'Player 2') {
            player2Score -= Math.ceil(qA[indexNum].points / 2);
            primaryTurn = true;
            player = 'Player 1';
        };
    };
    playerTurn.innerHTML = `${player}, here is your challenge for contemplation`;
    console.log(utilizedQuestions);
    console.log(qA);
        scoreboard.innerHTML = `Player 1 Points: ${player1Score} | Player 2 Points: ${player2Score}`;
    if (player1Score >= 50 || player2Score >= 50) {
        winCondition();
        document.getElementById('submit').disabled = true;
    }
    // if (qA === []) {
    //     conclude();
    // }
    document.getElementsByClassName('question').value = '';
    document.getElementById('input_id').value = '';
};

// Sets forth conditions to win the game
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

// Action if the End Game button is pushed 
function conclude() {
    document.getElementById('nextQuestion').disabled = true;
    document.getElementById('submit').disabled = true;
    document.getElementById('endGame').disabled = true;
    if (player1Score === player2Score) {
        declarations.innerHTML = 'You are too evenly matched in intellect. Till next your minds compete, pursue your curiosity, lest it kill your cat.';
    } else {
        winCondition();
    };
};

// Resets the game to allow for a new game to be begun
function reset() {
    document.getElementById('endGame').disabled = true;
    player1Score = 0;
    player2Score = 0;
    userInput.value = "";
    player = 'Player 1';
    scoreboard.innerHTML = `Player 1 Points: ${player1Score} | Player 2 Points: ${player2Score}`;
    document.getElementById('startGame').disabled = false;
    document.getElementById('input_id').value = '';
};

// Start Game button action
function startsGame() {
    player = 'Player 1';
    primaryTurn = true;
    playerTurn.innerHTML = `${player}, here is your challenge for contemplation`;
    selectQuestion();
    document.getElementById('startGame').disabled = true;
    document.getElementById('nextQuestion').disabled = true;
    document.getElementById('endGame').disabled = false;
    document.getElementById('reset').disabled = false;
}