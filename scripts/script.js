const menuButton = document.querySelector('.menu_button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close_button');
const amountInput = document.querySelector('#amount_input')

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('menu-open')
})

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open')
})

const checkNumber = (e) => {
    if (!(e.key > 0 && e.key < 10)) {
        return false;
    }
}

const subOne = () => {
    if (amountInput.value < 2) {
        return;
    } else {
        amountInput.value -= 1;
    }
}

const addOne = () => {
    amountInput.value = +amountInput.value + 1;
}