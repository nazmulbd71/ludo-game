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

rollDice.addEventListener('click', function () {
  const randomDice = Math.floor(Math.random() * 6) + 1;
});
