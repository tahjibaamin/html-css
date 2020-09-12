$(document).ready(function() {
    $('.top').hide();

    $('.top a').click(function() {

        $('body, html').animate({ scrollTop: 0 }, 1500);

        return false

    });


});

$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top > 100) {
        $('.top').fadeIn(1000);
    } else {
        $('.top').fadeOut(1000);
    }

    if (top > 200) {
        $('.header').css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'right': '0',
            'background': 'rgba(0,0,0,0.8)'
        });
    } else {
        $('.header').css({
            'position': 'inherit',
            'background': '#ecf0f1'
        });
    }
});