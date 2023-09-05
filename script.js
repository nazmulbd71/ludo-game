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
let playing, currentScore, activePlayer,scores;

const reset = () => {
    score0El.textContent=0;
    score1El.innerText=0;
    currentScore = 0;
    activePlayer = 0;
    scores = [0,0];
    playing = true;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

reset();

const switchPlayer =  ()=>{
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

rollDice.addEventListener('click',function(){
    if(playing){
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src= `dice-${randomDice}.png`
    if(randomDice !== 1){
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
    }
    else{
       switchPlayer();  
    }
    }
});

holdGame.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
     
    if(scores[activePlayer] >= 20){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }  else{
        switchPlayer();
    }
    } 
});


newGame.addEventListener('click', function(){
 reset();
})