let navHamBtnElement = document.querySelector('.nav__toggler');
let dropRightElement = document.querySelector('.dropright__list');

navHamBtnElement.addEventListener('click', (e) => {
    e.preventDefault();

    dropRightElement.classList.add('dropright__list--active');
})

let closeToggler = document.querySelector('.dropright-closer');

closeToggler.addEventListener('click', (e) => {
    e.preventDefault();

    dropRightElement.classList.remove('dropright__list--active');
})