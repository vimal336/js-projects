roundSelect = document.querySelector('#roundsSelect');
console.log(roundsSelect)
roundsSelectContainer = document.querySelector('#roundsSelectContainer')

errorMessagePara = document.querySelector("#errorMessagePara");

popup = document.querySelector('#popup');
closeButton = document.querySelector("#closeButton");

playButton = document.querySelector('#playButton');

nextRoundButton = document.querySelector('#nextRoundButton');

initButton = document.querySelector('#initButton');

gameControls = document.querySelectorAll('.gameControls');
userControls = document.querySelectorAll('.userControls');
computerControls = document.querySelectorAll('.computerControls');

roundID = document.querySelector('#roundID');
roundsSpan = roundID.querySelector('span');

countDown = roundID.querySelector('#countDown');
userFireWork = document.querySelector('#userFireWork');
userScore = document.querySelector('#userScore');

computerScore = document.querySelector('#computerScore');
console.log(computerScore);

computerFireWork = document.querySelector('#computerFireWork');

isGameStarted = false;

numberOfRounds = undefined;

currentRound = undefined;

isGameControlKeysEnabled = false;

LONG_DELAY = 300;

DELAY = 1000;

SHORT_DELAY = 300;

init();

setUP