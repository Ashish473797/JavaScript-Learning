# Projects

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

for (let i = 0; i < document.querySelectorAll('.button').length; i++) {
  document.querySelectorAll('.button')[i].addEventListener('click', (event) => {
    if (event.target.id == 'grey') {
      document.querySelector('body').style.backgroundColor = 'grey';
    } else if (event.target.id == 'blue') {
      document.querySelector('body').style.backgroundColor = 'blue';
    } else if (event.target.id == 'yellow') {
      document.querySelector('body').style.backgroundColor = 'yellow';
    } else {
      document.querySelector('body').style.backgroundColor = 'white';
    }
  });
}


```

## project 2

```javascript

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height == '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'Invalid Height!';
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'Invalid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `BMI is ${bmi}`;
  }
});

```

## project 3

```javascript

const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4

```javascript

let randomNum = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const summit = document.querySelector('#subt');
const previousGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const status = document.querySelector('.lowOrHi');
const resultPara = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 10;

let playGame = true;

if (playGame) {
  summit.addEventListener('click', (event) => {
    event.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (numGuess === 0) {
    displayMsg(`Game Over Acctual Number is ${randomNum}`);
    endGame();
  } else if (guess == '' || isNaN(guess) || guess < 1 || guess > 100) {
    alert('Invalid Input!');
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === 100) {
    displayMsg(`You Guess Right In ${10 - numGuess} Attempt`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg('Less then Acctual Number');
  } else {
    displayMsg('Greater then Acctual Number');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  previousGuess.innerHTML += `${guess}, `;
  numGuess--;
  remaining.innerHTML = `${numGuess}`;
}

function displayMsg(msg) {
  status.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  summit.setAttribute('disabled', '');
  resultPara.appendChild(p);
  p.innerHTML = `<h5>New Game</h5>`;
  p.classList.add('button');
  playGame = false;
  newGame();
}

function newGame() {
  const newbtn = document.querySelector('.button');
  newbtn.addEventListener('click', (event) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    previousGuess.innerHTML = '';
    remaining.innerHTML = `${numGuess}`;
    status.innerHTML = '';
    resultPara.removeChild(p);
    summit.removeAttribute('disabled');
    playGame = true;
  });
}

```

## project 6

```javascript

let randomColour = () => {
  const hexRang = '0123456789abcdef';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += hexRang[parseInt(Math.random() * 16)];
  }
  return colour;
};

const changeColour = () => {
  document.querySelector('body').style.backgroundColor = randomColour();
};

document.querySelector('#start').addEventListener('click', (event) => {
  const colourInterval = setInterval(changeColour, 500);

  document.querySelector('#stop').addEventListener('click', (event) => {
    clearInterval(colourInterval);
  });
});


```