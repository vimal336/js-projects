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

setUpKeyDownEvents();

function init(){
isGameStarted = false;
userScore.innerText = "0";
computerScore.innerText = "0";

show([roundsSelectContainer, playButton]);
hide([countDown, roundID, nextRoundButton, initButon]);

rounsSelect.value = "5";
}

function startGame() {
    if (roundsSelect.value === "") {
        displayError("Choose number of rounds above");
        return;
    }
    numberOfRounds = +roundsSelect.value;
    isGameStarted = true;

    hide([roundsSelectContainer, playButton]);
    hide([countDown, playButon]);

    currentRound = 1;
    resetCountDown();
    triggerCountDown();
}

function resetcountDown(){
    countDown.innerText = "4";
    addClasses([countDown,] ["animate-[bounce_1s_ease-in-out_infinite]"]);
}

function triggerCountDown(){
 if(+countDown.innerText > 1){
  countDown.innerText = +countDown.innerText - 1;
  setTimeout(() =>{
    triggerCountDown();
  }, DELAY)
 }else{

    countDown.innerText = "Go!!!";
    removeClasses([countDown], ["animate-[bounce_1s_ease-in-out]"])

    enable(gameControls);
    isGameControlKeysEnabled = true;
 }
}

function select(userInput){
  showSelection(userControls[userInput - 1])
  let computerInput = math.floor(math.random()*3) + 1;
  showSelection(computerControls[computerInput-1])

  disable(gameControls, SHORT_DELAY)
  isGameControlKeysEnabled = false;

  if(userInput === computerInput ){
     countDown.innerText = "Draw!";
  }else if(
    (userInput === 1 & computerInput === 2) ||
    (userInput === 2 & computerInput === 1) ||
    (userInput === 3 & computerInput === 2)
  ) {
    updateScore(userScore);
  }

}