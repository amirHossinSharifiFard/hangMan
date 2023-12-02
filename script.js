let secretName = ['amir'],
  randomName = '',
  clicked = [],
  mistakes = 0,
  result;

function selectRandomName() {
  randomName = secretName[Math.floor(Math.random() * secretName.length)];
  document.getElementById('letters').addEventListener('click', buttonHandler);
  window.addEventListener("keydown",keyHandler)
}

function letterHandler(letter) {
  letter = letter.toLowerCase();
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
  document.getElementById(letter.toUpperCase()).className = 'used';
  if (randomName.indexOf(letter) >= 0) {
    setUnderScores();
    checkIfWon();
  } else if (randomName.indexOf(letter) == -1) {
    mistakes++;
    checkIflost();
    console.log(mistakes);
  }
}

function setUnderScores() {
  let splitedWord = randomName.split('');
  let mappedWord = splitedWord.map((letter) =>
    clicked.indexOf(letter) === -1 ? '-' : letter
  );
  result = mappedWord.join('');
  document.getElementById('clue').querySelector('p').innerHTML = result;
}

function checkIfWon() {
  if (randomName === result) {
    console.log('end');
    document.querySelector('img').src = '/assets/winner.png';
  }
}
function checkIflost() {
  if (mistakes <= 6) {
    document.querySelector('img').src = `/assets/hangman${mistakes}.png`;
    console.log(mistakes);
  }
}
function buttonHandler(event) {
  letterHandler(event.target.id);
}
function keyHandler(event) {
  letterHandler(event.key)
  }

selectRandomName();
setUnderScores();
