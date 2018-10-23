$('.header-right>ul').children('li').eq(14).hover(function(){
    $('.header-ercode').show();
},function(){
    $('.header-ercode').hide();
})
//navigator dropdown
$('.navigator ul li').mouseenter(function(){
    $(this).children('div').show();
})
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

//优惠可选可领取
$('.coupon-bottom-take ul li').click(function(){
    $(this).addClass('current1').siblings().removeClass('current1');
    $('.coupon-bottom-desc>div').eq($(this).index()).css('display','block');
    $('.coupon-bottom-desc>div').eq($(this).index()).siblings().css('display','none')
})
//查看优惠券
$('.checkcoupon').click(function(){
    if($('.checkcoupon>svg>use').attr('xlink:href')=='#icon-icon-arrow-bottom2'){
        $('.checkcoupon>svg>use').attr('xlink:href','#icon-shang');
        $('.coupon').css('height','190px')
        $('.coupon-bottom').show();
    }else{
        $('.checkcoupon>svg>use').attr('xlink:href','#icon-icon-arrow-bottom2');
        $('.coupon').css('height','38px')
        $('.coupon-bottom').hide();
    }

})
//全选点击
$('.shopping-head label').click(function(){
    //坑！！！ 给label点击事件，获取checkbox是改变前的状态，和给input点击事件是不一样的
    console.log($(".shopping-head input[type='checkbox']").prop('checked'))
    if($(".shopping-head input[type='checkbox']").prop('checked')){
        $('.shopping-head label').css('background-image','none');
        $('.shopping-operate-checkbox label').css('background-image','none');
        $('.shopping-operate-checkbox input').prop('checked',false);
        $('.good').eq(0).children('.good-checkbox').children('label').css('background','none');
        $('.good').eq(1).children('.good-checkbox').children('label').css('background','none');
        $('.good').eq(2).children('.good-checkbox').children('label').css('background','none');
        $('.good').eq(0).children('.good-checkbox').children('input').prop('checked',false);
        $('.good').eq(1).children('.good-checkbox').children('input').prop('checked',false);
        $('.good').eq(2).children('.good-checkbox').children('input').prop('checked',false);
        $('.present').css('height','43px');
        $('.present-desc').hide();
        $('.present-head-desc').html('再购<span class="present-head-price">&nbsp;409&nbsp;</span>元立享【满409元领取赠品】')
        $('.present-head-check').html('查看赠品');
        wantnum=0;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    }else{
        $('.shopping-head label').css('background-image','url(\'../images/checkboxbg.png\')');
        $('.shopping-operate-checkbox label').css('background-image','url(\'../images/checkboxbg.png\')');
        $('.shopping-operate-checkbox input').prop('checked',true);
        $('.good').eq(0).children('.good-checkbox').children('label').css('background','url(\'../images/checkboxbg.png\')');
        $('.good').eq(1).children('.good-checkbox').children('label').css('background','url(\'../images/checkboxbg.png\')');
        $('.good').eq(2).children('.good-checkbox').children('label').css('background','url(\'../images/checkboxbg.png\')');
        $('.good').eq(0).children('.good-checkbox').children('input').prop('checked',true);
        $('.good').eq(1).children('.good-checkbox').children('input').prop('checked',true);
        $('.good').eq(2).children('.good-checkbox').children('input').prop('checked',true);
        $('.present').css('height','143px');
        $('.present-desc').show();
        $('.present-head-desc').html('已满足【满409元领取赠品】, 再购<span class="present-head-price">&nbsp;64.00&nbsp;</span> 元立享【赠品升级】');
        $('.present-head-check').html('更换赠品');
        wantnum=3;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    }
    console.log(wantnum);
})

//购物车商品打钩数量
var wantnum=3;
//购物车checkbox事件
$('.good>.good-checkbox label').click(function(){
    // console.log($(this).css('background-image'))
    if($(this).siblings().prop('checked')){
        $(this).css('background','none');
        $('.shopping-head label').css('background-image','none');
        $('.shopping-operate-checkbox label').css('background','none');
        $('.shopping-head input').prop('checked',false);
        $('.shopping-operate-checkbox input').prop('checked',false);
        $('.present').css('height','43px');
        $('.present-desc').hide();
        wantnum--;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    }else{
        wantnum++;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
        if(wantnum==3){
            $('.shopping-operate-checkbox label').css('background','url(\'../images/checkboxbg.png\')');
            $('.shopping-head label').css('background-image','url(\'../images/checkboxbg.png\')');
            $('.shopping-head input').prop('checked',true);
            $('.shopping-operate-checkbox input').prop('checked',true);
            $('.present').css('height','143px');
            $('.present-desc').show();
        }
        $(this).css('background','url(../images/checkboxbg.png)');
    }
    calallcouont();
    console.log(wantnum)
})
//商品数量点击事件
var num;

for(var i=0;i<3;i++){
    $('.good-desc-num').eq(i).children('input').val('1');
    $('.good-desc-num').eq(i).children('span').eq(0).click(function(){
        if($(this).siblings('input').val()==1){
            $(this).css({'cursor':'not-allowed','color':'#999'});
        }else{
            num=$(this).siblings('input').val()-1;
            $(this).siblings('input').val(num);
            $(this).css('cursor','pointer');
        }
        calallcouont();
        count=parseFloat($(this).siblings('input').val())*parseFloat($(this).parent().siblings('.good-desc-price').html().substr(1));
        // count=parseFloat($(this).siblings('input').val())*parseFloat($('.good-desc-price').html().substr(1));
        $(this).parent().siblings('.good-desc-count').html('￥'+count+'.00')
    })
    $('.good-desc-num').eq(i).children('span').eq(1).click(function(){
        if($(this).siblings('input').val()==100){
            $(this).css({'cursor':'not-allowed','color':'#999'})
        }else{
            num=parseInt($(this).siblings('input').val())+1;
            $(this).siblings('input').val(num);
            $(this).siblings('span').css({'cursor':'pointer','color':'#333'});
            count=parseFloat($(this).siblings('input').val())*parseFloat($(this).parent().siblings('.good-desc-price').html().substr(1));
            $(this).parent().siblings('.good-desc-count').html('￥'+count+'.00')
        }
        calallcouont();
    })
}
//数量修改事件
for(var i=0;i<$('.shopping-desc>div').length;i++){
    $('.shopping-desc>div').eq(i).children('.good-desc').children('.good-desc-num').children('input').blur(function(){
        $(this).parent().siblings('.good-desc-count').html('￥'+$(this).parent().siblings('.good-desc-price').html().substr(1)*$(this).val()+'.00');
        calallcouont();
    })
}

//已选点击
$('.shopping-operate-checkbox label').click(function(){
    if($('.shopping-operate-checkbox input[type="checkbox"]').prop('checked')){
        $('.shopping-operate-checkbox label').css('background','none');
        $('.shopping-head label').css('background-image','none');
        $('.good').eq(0).children('.good-checkbox').children('label').css('background','none');
        $('.good').eq(1).children('.good-checkbox').children('label').css('background','none');
        $('.good').eq(2).children('.good-checkbox').children('label').css('background','none');
        $('.good').eq(0).children('.good-checkbox').children('input').prop('checked',false);
        $('.good').eq(1).children('.good-checkbox').children('input').prop('checked',false);
        $('.good').eq(2).children('.good-checkbox').children('input').prop('checked',false);
        $('.shopping-head input').prop('checked',false);
        $('.present').css('height','43px');
        $('.present-desc').hide();
        wantnum=0;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    }else{
        $('.shopping-operate-checkbox label').css('background','url(\'../images/checkboxbg.png\')');
        $('.shopping-head label').css('background-image','url(\'../images/checkboxbg.png\')');
        $('.good').eq(0).children('.good-checkbox').children('label').css('background','url(\'../images/checkboxbg.png\')');
        $('.good').eq(1).children('.good-checkbox').children('label').css('background','url(\'../images/checkboxbg.png\')');
        $('.good').eq(2).children('.good-checkbox').children('label').css('background','url(\'../images/checkboxbg.png\')');
        $('.good').eq(0).children('.good-checkbox').children('input').prop('checked',true);
        $('.good').eq(1).children('.good-checkbox').children('input').prop('checked',true);
        $('.good').eq(2).children('.good-checkbox').children('input').prop('checked',true);
        $('.shopping-head input').prop('checked',true);
        $('.present').css('height','143px');
        $('.present-desc').show();
        wantnum=3;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    }
    console.log(wantnum);
})

// $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
//单点删除
for(var j=0;j<$('.shopping-desc>div').length;j++){
    $('.shopping-desc>div').eq(j).children('.good-desc').children('.good-desc-operate').children('p:nth-of-type(2)').click(function(){
        $(this).parent().parent().parent().remove();
        calallcouont();
        if($('.shopping-desc>div').length==0){
            $('.shopping-desc-empty').show();
            $('.shopping-head').hide();
            $('.present').hide();
        }
        wantnum--;
        $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    })
}
//总价格
var allcount=0;
//背景图片的获取
function calallcouont(){
        allcount=0;
        for(var k=0;k<$('.shopping-desc>div').length;k++){
            // console.log($('.shopping-desc>div').eq(k).children('.good-desc').children('.good-desc-count').html().substr(1))
            if($('.shopping-desc>div').eq(k).children('.good-checkbox').children('label').css('background-image').replace('url(','').replace(')','')!='none'){
                allcount+=parseInt($('.shopping-desc>div').eq(k).children('.good-desc').children('.good-desc-count').html().substr(1));
            }else{
                console.log(k);
            }
            console.log($('.shopping-desc>div').eq(k).children('.good-checkbox').children('label').css('background-image'))
            // console.log($('.shopping-desc>div').eq(k).children('.good-checkbox').children('input').prop('checked'))
        }
        // console.log(allcount)
        $('.shopping-operate-paymoney').children('span').html('￥'+allcount+'.00')
}
//批量删除
$('.shopping-operate').children('.shopping-operate-del').click(function(){
    $('.confirmbox').show();
})
//确认框
$('.shopping-operate').children('.confirmbox').children('.confirmbox-desc').children('.confirmbox-desc-cancal').children('svg').click(function(){
    $('.confirmbox').hide();
})
$('.shopping-operate').children('.confirmbox').children('.confirmbox-desc').children('.confirmbox-desc-btn').children('button:nth-of-type(2)').click(function(){
    $('.confirmbox').hide();
})
$('.shopping-operate').children('.confirmbox').children('.confirmbox-desc').children('.confirmbox-desc-btn').children('button:nth-of-type(1)').click(function(){
    for(var x=0;x<$('.shopping-desc>div').length;x++){
        if($('.shopping-desc>div').eq(x).children('.good-checkbox').children('input').prop('checked')){
            $('.shopping-desc>div').eq(x).remove();
            $('.confirmbox').hide();
            wantnum--;
            x=-1;
        }else{
            $('.confirmbox').hide();
        }
    }
    $('.confirmbox').hide();
    $('.shopping-operate-choosenum').children('p').children('span').html(wantnum);
    calallcouont();
    console.log($('.shopping-desc>div').length)
    if($('.shopping-desc>div').length==0){
        $('.shopping-desc-empty').show();
        $('.shopping-head').hide();
        $('.present').hide();
    }
})

if($('.shopping-desc>div').length==0){
    $('.shopping-desc-empty').show();
}

//猜你喜欢
$('.maybelike-content-left>svg').click(function(){
    $('.maybelike-content-slide ul').animate({'left':'0px'});
})
$('.maybelike-content-right>svg').click(function(){
    $('.maybelike-content-slide ul').animate({'left':'-960px'});
})

//
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