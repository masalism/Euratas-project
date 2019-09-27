$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change')
    })

    $(window).scroll(function () {
        let position = $(this).scrollTop()
        if (position >= 400) {
            $('.euratas-nav__brand').addClass('euratas-nav__brand--hidden')
        } else {
            $('.euratas-nav__brand').removeClass('euratas-nav__brand--hidden')
        }
    })
})

// document.querySelector('.nav-button').addEventListener('click', function(e) {
//     // const change = document.createElement('.change')
//     console.log(e)
// })