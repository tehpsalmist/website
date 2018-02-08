function flipperFixup() {
    $('.card-container').height($('img.card-side').height())
    $('.back').height($('img.card-side').height())
}

window.addEventListener('load', flipperFixup)

window.onresize = flipperFixup

$('.back').on('keypress', function(e) {
    if (e.which === 13) {
        let name = this.getAttribute('name')
        window.open(`./${name}.pdf`,'_self')
    }
})

$('.back').on('focus', function(e) {
    $(this).parent().addClass('flipped')
})
$('.back').on('focusout', function(e) {
    $(this).parent().removeClass('flipped')
})