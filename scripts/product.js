// DETAILS OPEN/CLOSE LOGIC
const detailsGroup = document.querySelectorAll('.details_group .detail');


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