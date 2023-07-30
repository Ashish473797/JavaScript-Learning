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



```