let slides = Array.from(document.getElementsByClassName('slide'))
let count = 1
const slider = document.querySelector('.slides')

setInterval(() => {
  let pixels = count * 350
  slider.style.transform = `translate(-${pixels}px)`
  if (count === slides.length - 1) {
    count = 0
  } else {
    count++
  }
}, 2000)
