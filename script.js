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
    
    $(window).resize(function(){
        if ($(window).width() <= 768) {  
            $('.img').removeClass('col-6').addClass('col-12');
        } else {
            $('.img').removeClass('col-12').addClass('col-6');
        }         
    });
})