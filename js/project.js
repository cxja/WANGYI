/*
* @Author: admin
* @Date:   2018-09-27 14:14:58
* @Last Modified by:   admin
* @Last Modified time: 2018-10-08 13:58:38
*/


//导航栏动态效果
$('.nav1 ul').eq(0).children('li').hover(function(){
   if($(this).children('span'));
  $(this).children('a').css('color','#b4a078');
  $(this).siblings().children('a').css('color','#333');
  $(this).children('a').addClass('current1').siblings().removeClass('current1')
  $(this).children('span').addClass('sjx').siblings().removeClass('sjx')
  $(this).children('div').fadeIn()
},function(){
  $(this).children('a').removeClass('current1')
  $(this).children('span').removeClass('sjx')
  $(this).children('div').fadeOut()
  $(this).children('a').css('color','#333');

})

$('.yx1_2 ul li').hover(function(){
	$(this).children('img').eq(1).show();
},function(){
		$(this).children('img').eq(1).hide()
})


//固定导航栏1的动态效果
$('.nav2 ul').eq(0).children('li').hover(function(){
  if($(this).children('span'));
  $(this).children('a').css('color','#b4a078');
  $(this).siblings().children('a').css('color','#333');
  $(this).addClass('nav-top').siblings().removeClass('nav-top')
  $(this).children('span').addClass('sjx').siblings().removeClass('sjx')
  $(this).children('div').fadeIn()
},function(){
  $(this).removeClass('nav-top')
  $(this).children('span').removeClass('sjx')
  $(this).children('div').fadeOut()
  $(this).children('a').css('color','#333');

})

//轮播图
//点击左边圆圈
$('.shows-pic .left').click(function(){
  $('.shows2 ul').stop().animate({'left':'0px'},500);
})

//点击右边圆圈
$('.shows-pic .right').click(function(){
  $('.shows2 ul').stop().animate({'left':'-960px'},500);
})


//固定导航栏2
$(window).scroll(function (event) {
  if ($(window).scrollTop()<=177){
    $('.Nav2').css('display','none')
    $('.Nav').css('display','none');
  }
  if ($(window).scrollTop()>177){ 
    if ($(window).scrollTop()<=$('.Comment').offset().top){
      $('.Nav').slideDown();
    }
    if ($(window).scrollTop()>$('.Comment').offset().top){ 
      $('.Nav').css('display','none');
       $('.Nav2').slideDown();
   }
  }
  })


  var timer2;
  var n2=0;

   function scroll(){
    clearInterval(timer2)
  timer2 = setInterval(function(){
    n2--;
    if(n2<-1){
      $('.scroll a').css('top','0px');
      n2=0;

    }
    $('.scroll a').animate({'top':30*n2+'px'},400)
  },5000)
   }

   scroll();