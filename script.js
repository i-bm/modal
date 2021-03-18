'use strict';
const modalList = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');


const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
modal.classList.add('hidden');
overlay.classList.add('hidden');
}

const escKeyPress = function (event) {
if(event.key ==='Escape' && !modal.classList.contains('hidden'))closeModal()
}



for(let i = 0; i< modalList.length; i++){
    modalList[i].addEventListener('click', showModal);
}

 document.addEventListener('keydown', escKeyPress);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
