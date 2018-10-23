
var vnum=0;
var index=0;
var timer;


//nav dropdown
$('.navigator-foot>ul>li').mouseenter(function(){
    $(this).children('div').show();
})
$('.navigator-foot>ul>li').mouseleave(function(){
    $(this).children('div').hide();
})
//fasten-top dropdown
$('.fasten-top-list ul li').mouseenter(function(){
    $(this).children('div').show();
})
$('.fasten-top-list ul li').mouseleave(function(){
    $(this).children('div').hide();
})
//轮播图
function go(){
    timer=setInterval(function(){
        index++;
        if(index==5){
            index=0;
            $('.slideshow>ul').css('left',index*-1090+'px');
            index=1;
        }
        $('.slideshow>ul').animate({'left':index*-1090+'px'});
        if(index==4){
            $('.slideshow>ol>li').eq(0).addClass('current1');
            $('.slideshow>ol>li').eq(0).siblings().removeClass('current1')
        }
        $('.slideshow>ol>li').eq(index).addClass('current1');
        $('.slideshow>ol>li').eq(index).siblings().removeClass('current1')
    },3000)
}
go();

$('.slideshow').hover(function(){
    clearInterval(timer)
},function(){
   go();
})

$('.slideshow>ol>li').click(function(){
    index=$(this).index();
    $(this).addClass('current1');
    $(this).siblings().removeClass('current1');
    $('.slideshow>ul').animate({'left':index*-1090+'px'})
})


$('.slideshow>.left').click(function(){
    index--;
    if(index==-1){
        index=4;
        $('.slideshow>ul').css('left',index*-1090+'px');
        index=3
    }
    $('.slideshow>ul').animate({'left':index*-1090+'px'})
    if(index==4){
        $('.slideshow>ol>li').eq(0).addClass('current1');
        $('.slideshow>ol>li').eq(0).siblings().removeClass('current1')
    }
    $('.slideshow>ol>li').eq(index).addClass('current1');
    $('.slideshow>ol>li').eq(index).siblings().removeClass('current1')
})

$('.slideshow>.right').click(function(){
    index++;
    if(index==5){
        index=0;
        $('.slideshow>ul').css('left',index*-1090+'px');
        index=1
    }
    $('.slideshow>ul').animate({'left':index*-1090+'px'})
    if(index==4){
        $('.slideshow>ol>li').eq(0).addClass('current1');
        $('.slideshow>ol>li').eq(0).siblings().removeClass('current1')
    }
    $('.slideshow>ol>li').eq(index).addClass('current1');
    $('.slideshow>ol>li').eq(index).siblings().removeClass('current1')
})

//特色系列
$('.special-content-left').hover(function(){
    $('.special-content-left').children('img').css('transform','scale(1.1)');
},function(){
    $('.special-content-left').children('img').css('transform','scale(1)');
});
$('.special-content-right').hover(function(){
    $('.special-content-right').children('img').css('transform','scale(1.1)');
},function(){
    $('.special-content-right' +
        '').children('img').css('transform','scale(1)');
});
//严选空间
$('.yanxuan-zoom-content1>ul>li').click(function(){
    $(this).addClass('current2');
    $(this).siblings().removeClass('current2');
    $('.yanxuan-zoom-content').eq($(this).index()).addClass('current3')
    $('.yanxuan-zoom-content').eq($(this).index()).siblings().removeClass('current3')
})

$('.yanxuan-zoom-content-img').hover(function(){
    $('.yanxuan-zoom-content-img-look').stop().fadeIn();
},function(){
    $('.yanxuan-zoom-content-img-look').stop().fadeOut();
})
//严选时刻
//视频
$('.yanxuan-time-content-video img').mouseenter(function(){
    $('.play-icon').show();
})

$('.yanxuan-time-content-video img').mouseleave(function(){
    $('.play-icon').hide();
})
$('.play-icon').click(function(){
    // $('.play-icon').hide();
    $('.yanxuan-time-content-video img').hide();
    $('.yanxuan-time-content-video video').css('autoplay','autoplay')
})

//视频列表
$('.yanxuan-time-content-scroll').mouseenter(function(){
    $('.arrow-down').show();
    $('.arrow-up').show();
})
$('.yanxuan-time-content-scroll').mouseleave(function(){
    $('.arrow-down').hide();
    $('.arrow-up').hide();
})
//严选时刻向下点击
$('.arrow-down').click(function(){

    if(vnum==-504){
        vnum=-504;
    }else{
        vnum-=252;
    }
    $('.yanxuan-time-content-scroll>ul').css('top',vnum+'px')
})
//严选时刻向上点击
$('.arrow-up').click(function(){
    if(vnum==0 ) {
        vnum =0;
    }else{
       vnum+=252;
    }
    $('.yanxuan-time-content-scroll>ul').css('top',vnum+'px')
})

//
$('.service-box1').mouseenter(function(){
    $('.service-box1 img').attr('src','../images/kefu1.png');
    $('.service-box1 p').css('color','#b2a277')
})
$('.service-box1').mouseleave(function(){
    $('.service-box1 img').attr('src','../images/kefu.png');
    $('.service-box1 p').css('color','black')
})
$('.service-box2').mouseenter(function(){
    $('.service-box2 img').attr('src','../images/xiaoxi1.png');
    $('.service-box2 p').css('color','#b2a277')
})
$('.service-box2').mouseleave(function(){
    $('.service-box2 img').attr('src','../images/xiaoxi.png');
    $('.service-box2 p').css('color','black')
})
$('.yichat').mouseenter(function(){
    $('.yixinercode').show();
    $('.weixinercode').hide();
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
    //侧边
    if($(window).scrollTop()>$(window).height()){
        $('.ad-backtop').fadeIn();
    }else{
        $('.ad-backtop').fadeOut();
    }
    //顶部
    if($(window).scrollTop()>$('.slideshow').offset().top){
        $('.fasten-top').slideDown()
    }else{
        $('.fasten-top').hide();
    }
})

$('.ad-backtop').click(function(){
    $('html,body').animate({'scrollTop': '0px'})
})