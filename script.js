$('document').ready(function() {
    $('.btnDark').on('click', function() {
        $('.a1').toggleClass('dark');
        $('nav img, .btnDark, .question, .s span, .s, .time p, .time img, .text-1, .activeBtn, .titleP, .darkVleft, .mob-a').toggleClass('inverse');
        $('.time').toggleClass('time-dark');
        $('nav').toggleClass('darkNav');
        $('.bg-other').toggleClass('bgBlack');
        $('.bigbtn a').toggleClass('bigbtnDark');
        $('body').toggleClass('darkBg');
        var src = ($('.bg').attr('src') === 'backgroundFixed.png')
            ? 'backgroundDark.png'
            : 'backgroundFixed.png';
        $('.bg').attr('src', src);
    });
    
    $('.menu-toggle').on('click',function(){
        $('.menu-toggle').toggleClass('active');
        $('.mob-a').toggleClass('d-none');
    });
})