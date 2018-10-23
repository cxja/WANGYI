var num = 0;
var timer,timer1;
var Timer,Timer1;
fn();

  function fn(){
    timer = setInterval(function() {
      num++;
      if (num > 1) {
        num = 0;
      }
      $('#pic').css('left',-1090*num+'px')
  
  //圆圈颜色随图片变化
      $('.circle').children('li').eq(num).addClass('current').siblings().removeClass('current');
    },2000)
  
  
  //点击圆圈，图片随之变化
    $('.circle').children('li').click(function(){
      $(this).addClass('current').siblings().removeClass('current');
      $('#pic').css('left',-1090*$(this).index()+'px');
      num=$(this).index();
    })
  
 
  }

  //点击左边按钮，图片往左滑动
  $('#left').click(function(){
    clearTimeout(Timer);
      Timer = setTimeout(function(){
      num++;
      if (num > 1) {
        num = 0;
      }
      $('#pic').css('left',-1090*num+'px')
      $('.circle').children('li').eq(num).addClass('current').siblings().removeClass('current');
  
    },200)

  })

//点击右边按钮，图片往右滑动
$('#right').click(function(){
  clearTimeout(Timer1)
  Timer1 = setTimeout(function(){
    num--;
    if(num<0){
      num=1;
    }
    $('#pic').css('left',-1090*num+'px')
    $('.circle').children('li').eq(num).addClass('current').siblings().removeClass('current');
  
  },200)

})
  $('#big').hover(function(){
    clearInterval(timer);
  },function(){
    fn();
  })

  //滚动出现固定导航
  $(window).scroll(function (event) {
    if ($(window).scrollTop()>177){
      $('.Nav').slideDown();
    }
    if ($(window).scrollTop()<=177){
      $('.Nav').css('display','none');
    }
    })

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
 

