'use strict';

// all element access here
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// score element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

// current score element
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// image element access
const diceEl = document.querySelector('.dice');

// all btn access
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdGame = document.querySelector('.btn--hold');

// by default
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  const randomDice = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

holdGame.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.add('hidden');
  }

  switchPlayer();
});
