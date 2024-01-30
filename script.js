const notification = document.querySelector('.notification-amount span');
const envelopes = document.querySelector('.envelopes');
const open = document.querySelector('.opened');
const initNumber = notification.innerHTML;

envelopes.addEventListener('click', ()=> {
    document.querySelector('.closed').classList.toggle('active');
    open.classList.toggle('active');
    document.querySelector('.no').classList.toggle('active');
    document.querySelector('.s').classList.toggle('active');
    document.querySelector('main').classList.toggle('active');
    open.classList.contains('active') ? notification.innerHTML = "0" : notification.innerHTML = initNumber;
});