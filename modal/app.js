// select modal-btn, modal-overlay, close-btn
// listen for click event on modal btn and close btn
// when user click modal-btn add .open-modal to modal-overlay
// when user click close-btn remove .open modal from modal overlay

const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
	modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click',function(){
	modalOverlay.classList.remove('open-modal')
})