$('document').ready(function() {
    $('.btnDark').on('click', function() {
        $('.a1').toggleClass('dark');
        $('nav img, .btnDark, .question, .s span, .s, .time p, .time img, .text-1, .activeBtn, .titleP').toggleClass('inverse');
        $('.time').toggleClass('time-dark');
        $('nav').toggleClass('darkNav');
        $('.bigbtn a').toggleClass('bigbtnDark');
        $('body').toggleClass('darkBg');
        var src = ($('.bg').attr('src') === 'backgroundFixed.png')
            ? 'backgroundDark.png'
            : 'backgroundFixed.png';
        $('.bg').attr('src', src);
    })
    $(window).on("load, resize", function() {
        var viewportWidth = $(window).width();
        if (viewportWidth < 768) {
                $(".img").removeClass("col-6").addClass("col-12");
                $(".btnDark").attr('src', 'https://png.icons8.com/ios/43/000000/black-tie-filled.png');
        } else {
                $(".img").removeClass("col-12").addClass("col-6");
                $(".btnDark").attr('src', 'https://png.icons8.com/ios/65/000000/black-tie-filled.png');
        }
    });
})