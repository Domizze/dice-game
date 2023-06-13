'use strict';

const diceIMG = document.querySelector('.dice');
diceIMG.classList.add('hidden');

const diceImgNumber = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

const playerCurrent = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];
const playerScore = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];

let rolled = 0;
let i = 0;

const userRollsDice = function () {
  rolled = Math.floor(Math.random() * 6) + 1;
  const dice = rolled - 1;
  diceIMG.src = diceImgNumber[dice];
  diceIMG.classList.remove('hidden');
  return rolled;
};

// alternate the turn of active player
const activePlayer = function (i) {
  if (i == 0) {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  } else if (i == 1) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }
};
// roll the dice btn
document.querySelector('.btn--roll').addEventListener('click', function () {
  rolled = userRollsDice();
  console.log(rolled);
  if (rolled === 1) {
    playerCurrent[i].textContent = 0;
    i = 1 - i;
  } else {
    playerCurrent[i].textContent =
      Number(playerCurrent[i].textContent) + rolled;
  }
  activePlayer(i);
});

// hold the score btn
document.querySelector('.btn--hold').addEventListener('click', function () {
  const score = Number(playerScore[i].textContent);
  const current = Number(playerCurrent[i].textContent);
  playerScore[i].textContent = score + current;
  if (playerScore[i].textContent >= 100) {
    // when player gets to 100 change the color of active player and disable roll dice and hold buttons
    document.querySelector('.player--active').classList.add('player--winner');
    document.querySelector('.btn--roll').disabled = true;
    document.querySelector('.btn--hold').disabled = true;
  }
  playerCurrent[i].textContent = 0;
  i = 1 - i;
  activePlayer(i);
});

//new game button
document.querySelector('.btn--new').addEventListener('click', function () {
  diceIMG.classList.add('hidden');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  playerCurrent[0].textContent = 0;
  playerScore[0].textContent = 0;
  playerCurrent[1].textContent = 0;
  playerScore[1].textContent = 0;
});
