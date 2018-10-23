//轮播图
//轮播图下标
var index=0;
setInterval(function(){
    if(index==3){
        index=0;
    }
    $('.slide-img').eq(index).stop().fadeIn().siblings().stop().hide();
    $('.slide-movedot ul li').eq(index).addClass('current1').siblings().removeClass('current1');
    index++;
},3000)

//轮播图左边选购导航
for(var i=0;i<6;i++){
    $('.slide-nav ul li').eq(i).mouseenter(function() {
            $('.slide-movedot').hide();
        $(this).children('.slide-nav-desc-show').show();
    })
    $('.slide-nav ul li').eq(i).mouseleave(function(){
        $(this).children('.slide-nav-desc-show').hide();
        $('.slide-movedot').show();
    })
}
//轮播图长条hover事件
for(var j=0;j<3;j++){
    $('.slide-movedot ul li').eq(j).mouseenter(function(){
        index=$(this).index();
        $(this).addClass('current1').siblings().removeClass('current1');
        $('.slide-img').eq(index).stop().fadeIn().siblings().stop().hide();
    })
}

//热卖hover
for(var k=0;k<12;k++){
    $('.hot-goods-box ul li').eq(k).mouseenter(function(){
        $(this).children('.hot-goods-img').children('img:nth-of-type(1)').hide();
        $(this).children('.hot-goods-img').children('img:nth-of-type(2)').show();
    })
    $('.hot-goods-box ul li').eq(k).mouseleave(function(){
        $(this).children('.hot-goods-img').children('img:nth-of-type(1)').show();
        $(this).children('.hot-goods-img').children('img:nth-of-type(2)').hide();
    })
}
//热卖点击
//点击次数
var f=0;
$('.hot-btnright svg').click(function(){
    ++f;
    if(f==3){
        $(this).css('cursor','not-allowed');
        f=2;
    }else{
        $('.hot-goods-box').children('ul').animate({'left':-f*1090+'px'})
    }
})
$('.hot-btnleft svg').click(function(){
    --f;
    if(f==-1){
        $(this).css('cursor','not-allowed');
        f=0;
    }else{
        $('.hot-goods-box').children('ul').animate({'left':-f*1090+'px'})
    }
})

//底部关注我们二维码显示
$('.footer-top-right-focus>div').eq(0).children('svg').mouseenter(function(){
    $('.yixinercode').show();
})
$('.footer-top-right-focus>div').eq(0).children('svg').mouseleave(function(){
    $('.yixinercode').hide();
})

$('.footer-top-right-focus>div').eq(1).children('svg').mouseenter(function(){
    $('.weixinercode').show();
})
$('.footer-top-right-focus>div').eq(1).children('svg').mouseleave(function(){
    $('.weixinercode').hide();
})
//回到顶部
$('.backtop').click(function(){
    $('html,body').animate({'scrollTop': '0px'});
})
//窗口滚动
$(window).scroll(function(){
    if($(window).scrollTop()>$(window).height()){
        $('.backtop').fadeIn();
    }else{
        $('.backtop').fadeOut();
    }
    if($(window).scrollTop()>$('.slide').offset().top){
        $('.fasten-top').slideDown();
    }else{
        $('.fasten-top').hide();
    }
})

//下拉列表
$('.fasten-top-listdown').mouseenter(function(){
    $('.downlist').stop().slideDown();
})
$('.fasten-top-listdown').mouseleave(function(){
    $('.downlist').stop().slideUp();
})
$('.downlist ul li').mouseenter(function(){
    $(this).children('div').stop().show();
})
$('.downlist ul li').mouseleave(function(){
    $(this).children('div').stop().hide();
})