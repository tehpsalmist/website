const backs = document.getElementsByClassName('back')
const cardContainers = document.getElementsByClassName('card-container')
let cardImg = document.querySelector('.card-side')

function flipperFixup() {
    const newHeight = window.getComputedStyle(cardImg).getPropertyValue('height')

    Array.from(cardContainers).forEach(el => {
        el.style.height = newHeight
    })

    Array.from(backs).forEach(el => {
        el.style.height = newHeight
    })
}

window.addEventListener('load', flipperFixup)

window.onresize = flipperFixup

Array.from(backs).forEach(el => {
    el.addEventListener('keypress', function (e) {
        if (e.which === 13) {
            let name = this.getAttribute('name')
            window.open(`./${name}.pdf`, '_self')
        }
    })
    el.addEventListener('focus', function (e) {
        el.parentElement.classList.add('flipped')
    })

    el.addEventListener('focusout', function (e) {
        el.parentElement.classList.remove('flipped')
    })
})