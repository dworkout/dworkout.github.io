$('document').ready(function() {
    $('.btnDark').on('click', function() {
        $('.a1').toggleClass('dark');
        $('nav img, .btnDark, .question, .s span, .s, .time p, .time img, .text-1, .activeBtn').toggleClass('inverse');
        $('.time').toggleClass('time-dark')
        $('nav').toggleClass('darkNav');
        $('.bigbtn a').toggleClass('bigbtnDark')
        $('body').toggleClass('darkBg');
        var src = ($('.bg').attr('src') === 'backgroundFixed.png')
            ? 'backgroundDark.png'
            : 'backgroundFixed.png';
        $('.bg').attr('src', src);
    })
})