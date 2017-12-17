function flipperFixup() {
    $('.card-container').height($('img.card-side').height())
    $('.back').height($('img.card-side').height())
}
flipperFixup()
window.onresize = flipperFixup