document.addEventListener('click', () => {
    console.log('Click')
})
const menuButton = document.querySelector('.menu_button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close_button');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('menu-open')
})

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open')
})