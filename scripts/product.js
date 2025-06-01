// DETAILS OPEN/CLOSE LOGIC
const detailsGroup = document.querySelectorAll('.details_group .detail');

const youMayLike = document.querySelector('.you_may_like');
const youMayLikeMaxWidth = youMayLike.offsetWidth;
const youMayLikeSlider = document.querySelector('.you_may_like .slider');
const scrollAmount = 300;

const openCloseDetail = (pressedElement) => {
    const hasOpen = pressedElement.classList.contains('open')

    if (hasOpen) {
        pressedElement.childNodes[3].style.height = '0px'
        pressedElement.childNodes[1].childNodes[2].textContent = '+'
        pressedElement.classList.remove('open')
    }

    if (!hasOpen) {
        // Return to default
        detailsGroup.forEach(detail => {
            detail.childNodes[3].style.height = '0px'
            detail.childNodes[1].childNodes[2].textContent = '+'
            detail.classList.remove('open')
        })


        // change to open
        pressedElement.childNodes[3].style.height = pressedElement.childNodes[3].scrollHeight + 'px'
        pressedElement.childNodes[1].childNodes[2].textContent = '-'
        pressedElement.classList.add('open')
    }
};

const moveLeft = () => {
    if (youMayLikeSlider.scrollLeft === 0) {
        youMayLikeSlider.scrollLeft = youMayLikeSlider.scrollWidth;
    } else {
        youMayLikeSlider.scrollLeft = youMayLikeSlider.scrollLeft - scrollAmount;
    }
}

const moveRight = () => {
    if (Math.ceil(youMayLikeSlider.scrollLeft + youMayLikeSlider.clientWidth) >= youMayLikeSlider.scrollWidth - 1) {
        youMayLikeSlider.scrollLeft = 0;
    } else {
        youMayLikeSlider.scrollLeft = youMayLikeSlider.scrollLeft + scrollAmount;
    }
}

const addToCart = (event, element) => {
    event.preventDefault()

    const orderType = element.querySelector('input[name="order_type"]:checked').value;

    const amount = element.querySelector('#amount_input').value;

    console.log('Added to cart:', { orderType, amount })
}