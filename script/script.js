// starting variables
let p1Score = 0;
let p2Score = 0;
let p1Turn = true;

// references to player names
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

// references to buttons
const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");

// references to score boxes
const p1Points = document.getElementById("p1-points");
const p2Points = document.getElementById("p2-points");

// references to dice images
const p1Dice = document.getElementById("p1-dice");
const p2Dice = document.getElementById("p2-dice");

// references to dice container boxes
const p1DiceShadow = document.getElementById("dice1-container");
const p2DiceShadow = document.getElementById("dice2-container");

// references to modal display content
const modal = document.getElementById("modal");
const winner = document.getElementById("winner");

// event listeners
rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", playAgain);

// functions

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    // update dices and scores
    if(p1Turn) {
        p1Score += randomNumber;
        p1Points.textContent = p1Score;
        p1Dice.src = `./images/dice${randomNumber}.svg`
    } else {
        p2Score += randomNumber;
        p2Points.textContent = p2Score;
        p2Dice.src = `./images/dice${randomNumber}.svg`
    }
    // check for winning condition
    if(p1Score >= 20) {someoneWins(1);} else if(p2Score >= 20) {someoneWins(2);}
    // change player turn and turn indicators
    p1Turn = !p1Turn;
    if(p1Turn) {
        p2.classList.remove("active-name");
        p2DiceShadow.classList.remove("active-dice");
        p1.classList.add("active-name");
        p1DiceShadow.classList.add("active-dice");
    } else {
        p1.classList.remove("active-name");
        p1DiceShadow.classList.remove("active-dice");
        p2.classList.add("active-name");
        p2DiceShadow.classList.add("active-dice");
    }
}

function someoneWins(won) {
    modal.style.display = "block";
    winner.textContent = won;
}

function playAgain() {
    modal.style.display = "none";
    p1Score = 0;
    p2Score = 0;
    p1Points.textContent = 0;
    p2Points.textContent = 0;
    p1Dice.src = './images/dice0.svg';
    p2Dice.src = './images/dice0.svg';
    p1Turn = true;
    p2.classList.remove("active-name");
    p2DiceShadow.classList.remove("active-dice");
    p1.classList.add("active-name");
    p1DiceShadow.classList.add("active-dice");
}