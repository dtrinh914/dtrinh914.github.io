//set app height css variable to equal to window height
const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
window.addEventListener('resize', appHeight);
appHeight();

// toggle nav
const navButton = document.querySelector('.navigation__toggle');
const navBar = document.querySelector('.navigation__list');
const navIcons = document.querySelectorAll('.navigation__icon');

const toggleNavBar = () => {
    navBar.classList.toggle('u-hide');
    
    navIcons[1].classList.toggle('u-hide');
    navIcons[0].classList.toggle('u-rot-135-plus');
    navIcons[2].classList.toggle('u-rot-135-min');
}

navButton.addEventListener('click', toggleNavBar);
navBar.addEventListener('click', toggleNavBar);