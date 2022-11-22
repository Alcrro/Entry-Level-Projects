const colors = ['green', 'red', 'rgba(133,122,200)', '#F15025', '#15b5dd'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let switchCheck = true;
//MY vision
const flexSwitch = document.getElementById('flexSwitchCheckDefault');
const links = document.querySelectorAll('.nav-link a');
const label = document.querySelector('.form-check-label');
const navBar = document.querySelector('.navbar-color');
const jsBgC = document.querySelector('.js-h2');
const navbarBorder = document.querySelector('.js-border');
const navbarBrand = document.querySelector('.navbar-brand');
const btnColorChange = document.querySelector('.color-change');

flexSwitch.addEventListener('click', function () {
  if (switchCheck === false) {
    document.body.style.backgroundColor = 'white';
    flexSwitch.style.backgroundColor = 'white';
    navBar.style.backgroundColor = '';
    label.style.color = 'black';
    navbarBrand.style.color = 'black';
    label.innerHTML = 'Now you see me!';
    btn.style.color = 'black';
    btn.disabled = false;
    btnColorChange.textContent = 'Touch This';
    console.log(switchCheck);
    let arrayLinks = links.length;
    for (let i = 0; i < arrayLinks; i++) {}

    switchCheck = true;
  } else if (switchCheck === true) {
    console.log(switchCheck);
    document.body.style.backgroundColor = 'black';
    flexSwitch.style.backgroundColor = 'black';

    //navbarBorder.style.border = 'white'

    navBar.style.backgroundColor = 'black';
    navbarBrand.style.color = 'white';
    jsBgC.style.color = 'black';

    label.innerHTML = "Now you don't!";
    label.style.color = 'white';
    label.style.border = 'black';
    btn.style.color = 'red';
    btn.disabled = true;
    btnColorChange.textContent = "Can't Touch This";

    let arrayLinks = links.length;
    for (let i = 0; i < arrayLinks; i++) {}

    switchCheck = false;
  }
});

btn.addEventListener('click', function () {
  // Get random number between 0 - 5 colors[0]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
