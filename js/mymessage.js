$('.header-right>ul').children('li').eq(14).hover(function(){
    $('.header-ercode').show();
},function(){
    $('.header-ercode').hide();
})
// nav dropdown
// $('.navigator ul li').mouseenter(function(){
//     $(this).children('div').show();
// })
$('.navigator ul li').mouseleave(function(){
    $(this).children('div').hide();
})
//fasten-top dropdown
$('.fasten-top-list ul li').mouseenter(function(){
    $(this).children('div').show();
})
$('.fasten-top-list ul li').mouseleave(function(){
    $(this).children('div').hide();
})


$('section>ul>li').click(function(){
    if($(this).index()<5){
        $(this).addClass('current2');
        $(this).siblings().removeClass('current2')
        $(this).children('a').css('color','#b2a277' )
        $(this).siblings().children('a').css('color','black' )
    }
    $('section>.content').children('div').eq($(this).index()).show();
    $('section>.content').children('div').eq($(this).index()).siblings().hide();
    if($(this).index()==0){
        $('body').css('height','3159px')
        $('.footer').css('top','2660px')
    }else{
        $('body').css('height','1650px')
        $('.footer').css('top','1200px')
    }
    // $('body').css('height',$(document).height()+'px')
    console.log($(document).height())
})


//footer js
$('.service-box1').mouseenter(function(){
    $('.service-box1 svg').css('color','#b2a277');
    $('.service-box1 p').css('color','#b2a277')
})
$('.service-box1').mouseleave(function(){
    $('.service-box1 svg').css('color','black');
    $('.service-box1 p').css('color','black')
})
$('.service-box2').mouseenter(function(){
    $('.service-box2 svg').css('color','#b2a277');
    $('.service-box2 p').css('color','#b2a277')
})
$('.service-box2').mouseleave(function(){
    $('.service-box2 svg').css('color','black');
    $('.service-box2 p').css('color','black')
})
$('.yichat').mouseenter(function(){
    $('.yixinercode').show();
    $('.weixinercode').hide();x
})
$('.weichat').mouseenter(function(){
    $('.weixinercode').show();
    $('.yixinercode').hide();
})

$('.yichat').mouseleave(function(){
    $('.yixinercode').hide();
})
$('.weichat').mouseleave(function(){
    $('.weixinercode').hide();
})



$(window).scroll(function(){
   if($(window).scrollTop()>$(window).height()){
       $('.ad-backtop').fadeIn();
   }else{
       $('.ad-backtop').fadeOut();
   }
    if($(window).scrollTop()>$('section').offset().top){
        $('.fasten-top').slideDown()
    }else{
        $('.fasten-top').hide();
    }
})

$('.ad-backtop').click(function(){
    $('html,body').animate({'scrollTop': '0px'})
})