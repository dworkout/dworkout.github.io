$('document').ready(function() {
    $('.btnDark').on('click', function() {
        $('.a1, .a1main').toggleClass('dark');
        $('nav img, .btnDark, .question, .s span, .s, .time p, .time img, .text-1, .activeBtn, .titleP, .darkVleft, .mob-a').toggleClass('inverse');
        $('.time').toggleClass('time-dark');
        $('nav').toggleClass('darkNav');
        $('.mob-nav').toggleClass('bgBlack');
        $('.bigbtn a').toggleClass('bigbtnDark');
        $('body').toggleClass('darkBg');
        var src = ($('.bg').attr('src') === 'backgroundFixed.png')
            ? 'backgroundDark.png'
            : 'backgroundFixed.png';
        $('.bg').attr('src', src);
    });
    $('.mob-nav').hide();
    $('.menu-toggle').on('click',function(){
        $('.menu-toggle').toggleClass('active');
        $('.mob-nav').slideToggle('slow');
    });
})