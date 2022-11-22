// set initial count
let count = 0;

// Select value
const value = document.querySelector('#value');

//Select Buttons
const btns = document.querySelectorAll('.btn');
const ballons = document.querySelector('.ballons');

// Console :
// NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]
// 0: button.btn.decrease
// 1: button.btn.reset
// 2: button.btn.increase
// length: 3
// [[Prototype]]: NodeList

// NodeList is an array like ,where some methods that you can perform on the node list . Cannot run on nodeList, need to transform it in to array.
// We can do with forEach

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    console.log;
    if (styles.contains('decrease')) {
      count--;

      if (count === 0) {
        console.log('no ballons');
      } else if (count < -1) {
        console.log('no more ballons');
      } else {
        document.querySelector('img').remove('.ballons');
      }
    } else if (styles.contains('increase')) {
      count++;

      const box1 = document.querySelector('.container');
      const newElement1 = document.createElement('img');
      newElement1.setAttribute('src', './balloon.png');
      newElement1.setAttribute('class', 'ballons js-show hidden-append');
      newElement1.setAttribute('id', 'img');
      const newContent = document.createTextNode('');
      newElement1.appendChild(newContent);
      box1.appendChild(newElement1);

      btn.addEventListener('click', function randomSheet() {
        for (let i = 0; i < count; i++) {
          console.log(count);

          const box1 = document.querySelector('.container');
          const square = document.querySelector('img');

          square.style.top = Math.floor(Math.random() * 10 + 1) + 'px';

          square.style.left = Math.floor(Math.random() * 2500 + 1) + 'px';

          box1.appendChild(square);
          console.log(box1);
        }
      });
    } else if (styles.contains('reset')) {
      count = 0;
      btn.addEventListener('click', function removeClass() {
        let allElements = document.querySelectorAll('img');
        for (i = 0; i < allElements.length; i++) {
          allElements[i].remove('.ballons');
          allElements[i].remove('.js-show');
        }
      });
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;

    // if(count > 0 ){
    // // let toggleFalse= document.querySelector(".ballons").classList.toggle('js-hidden')
    // console.log(toggleFalse)
  });
});
