//第一部分的轮播图
var num = 0;
var timer,timer1;
var Timer,Timer1;


  function fn(){
    timer = setInterval(function() {
      num++;
      if (num >= 7) {
        num = 0;
      }
      $('#pic').css('left',-1920*num+'px')
  
  //圆圈颜色随图片变化
      $('.circle').children('li').eq(num).addClass('current').siblings().removeClass('current');
    },2000)
  
  
  //点击圆圈，图片随之变化
    $('.circle').children('li').click(function(){
      $(this).addClass('current').siblings().removeClass('current');
      $('#pic').css('left',-1920*$(this).index()+'px');
      num=$(this).index();
    })
  
 
  }

  //点击左边按钮，图片往左滑动
  $('#left').click(function(){
    clearTimeout(Timer);
      Timer = setTimeout(function(){
      num++;
      if (num > 7) {
        num = 0;
      }
      $('#pic').css('left',-1920*num+'px')
      $('.circle').children('li').eq(num).addClass('current').siblings().removeClass('current');
  
    },200)

  })

//点击右边按钮，图片往右滑动
$('#right').click(function(){
  clearTimeout(Timer1)
  Timer1 = setTimeout(function(){
    num--;
    if(num<0){
      num=7;
    }
    $('#pic').css('left',-1920*num+'px')
    $('.circle').children('li').eq(num).addClass('current').siblings().removeClass('current');
  
  },200)

})
  $('#big').hover(function(){
    clearInterval(timer);
  },function(){
    fn();
  })

 


//nav1导航栏的动态显示效果
$('.li1').children('a').css('color','#b4a078')
$('.nav1 ul').eq(0).children('li').hover(function(){
   if($(this).children('span'));
  $(this).children('a').css('color','#b4a078');
  $(this).siblings().children('a').css('color','#333');
  $('.li1').children('a').css('color','#b4a078')
  $(this).children('a').addClass('current1').siblings().removeClass('current1')
  $(this).children('span').addClass('sjx').siblings().removeClass('sjx')
  $(this).children('div').fadeIn();
},function(){
  $(this).children('a').removeClass('current1')
  $(this).children('span').removeClass('sjx')
  $(this).children('div').fadeOut()
  $(this).children('a').css('color','#333');
$('.li1').children('a').css('color','#b4a078')

})

$('.yx1_2 ul li').hover(function(){
  $(this).children('img').eq(1).show();
},function(){
    $(this).children('img').eq(1).hide()
})



//nav2导航栏的动态效果
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


//滚动屏幕出现nav2
$(window).scroll(function (event) {
  if ($(window).scrollTop()>177){
    $('.Nav').slideDown();
  }
  if ($(window).scrollTop()<=177){
    $('.Nav').css('display','none');
  }
  })


//.yx2_3倒计时
var date1=new Date(); //开始时间
var temper="2019-09-23 00:00:00";
var date2 = new Date(temper.replace(/-/,"/")); //结束时间
var date3=date2.getTime()-date1.getTime(); //时间差的毫秒数
var intDiff = parseInt(date3/1000);//倒计时总秒数量
function timer(intDiff){
window.setInterval(function(){
var day=0,
hour=0,
minute=0,
second=0;//时间默认值 
if(intDiff > 0){
day = Math.floor(intDiff / (60 * 60 * 24));
hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
}
if (hour <= 9) hour = '0' + hour;
if (minute <= 9) minute = '0' + minute;
if (second <= 9) second = '0' + second;
$('.time').children('span').eq(0).html(hour);
$('.time').children('span').eq(2).html(minute);
$('.time').children('span').eq(4).html(second);
// console.log($('.time').children('span').eq(0).html(hour))

intDiff--;
}, 1000);
} 
$(function(){
  timer(intDiff);
  });

//section2类似轮播图的点击事件
var m=0;
//点击右边按钮
	$('#right2').click(function(){
	m++;
	if(m>=3){
		m=3;
	}else
	$('.yx1_2 ul').stop().animate({'left':-1090*m+'px'},900);
})	

//点击左边按钮
$('#left2').click(function(){
		m--;
	if(m<0){
		m=0;
	}else
		$('.yx1_2 ul').stop().animate({'left':-1090*m+'px'},900);
})


//鼠标移入，切换图片
$('.yx1_2 ul li').hover(function(){
	$(this).children('img').eq(1).show();
},function(){
		$(this).children('img').eq(1).hide();

})

//section3“人气推荐”字体变化效果
$('.section3 .tb1').children('span').click(function(){
	$(this).children('a').addClass('current2');
	$(this).siblings().children('a').removeClass('current2')
})

var num1=0;


//section5倒计时轮播图
fn1();
function fn1(){
  timer1 = setInterval(function(){
    num1++;
    if(num1 >=2 ){
      num1=0;
    }
    
    $('#Pic').css('left',-224*num1+'px')
    $('.circle1').children('li').eq(num1).addClass('current').siblings().removeClass('current');
  },4000)
}

$('#Pic').hover(function(){
  clearInterval(timer1);
},function(){
  fn1();
})

//鼠标移到第一个圆点
$('.circle1').children('li').eq(0).hover(function(){
  clearInterval(timer1);
  $('#Pic').css('left','0')
  $('.circle1').children('li').eq(0).addClass('current').siblings().removeClass('current');
},fn1())

//鼠标移到第二个圆点
$('.circle1').children('li').eq(1).hover(function(){
 clearInterval(timer1);
  $('#Pic').css('left',-224+'px')
  $('.circle1').children('li').eq(1).addClass('current').siblings().removeClass('current');
},fn1())

$('#left3').click(function(){
  clearInterval(timer1);
  num1++;
    if(num1 >1 ){
      num1=0;
    }
    
    $('#Pic').css('left',-224*num1+'px')
    $('.circle1').children('li').eq(num1).addClass('current').siblings().removeClass('current');
})

$('#right3').click(function(){
  clearInterval(timer1);
  num1--;
    if(num1 <0 ){
      num1=1;
    }
    
    $('#Pic').css('left',-224*num1+'px')
    $('.circle1').children('li').eq(num1).addClass('current').siblings().removeClass('current');
})

$('.timeLeft2').hover(function(){
  $('.btn').show();
},function(){
  $('.btn').hide();
})




//section8评论区
		$('#Comment div').hover(function(){
	$('.xm-sjx').hide();
$('.comment').animate({'top':'185px'});
},function(){
$('.comment').animate({'top':'311px'}); 
$('.xm-sjx').show();
})







//section8轮播图
var img_timer;
var num2=0;

fn1();
function fn1(){
	clearInterval(img_timer);
	img_timer=setInterval(function(){
	num2++;
	if(num2>9){
		num2=0;
			$('.yx2_6 ul').stop().css('left',-370*num2+13+'px');
			num2=1;

	}
	$('.yx2_6 ul').stop().animate({'left':-370*num2-13+'px'},500);
},2000)
}

//点击轮播图左键
$('.left8').click(function(){
  num2--;
	if(num2<0){
		num2=9;
			 $('.yx2_6 ul').css('left',-370*num2+13+'px');
			 num2=8;

	}
  $('.yx2_6 ul').stop().animate({'left':-370*num2-13+'px'},500);
})


$('.right8').click(function(){
  
  num2++;
	if(num2>9){
		num2=0;
			$('.yx2_6 ul').css('left',-370*num2+13+'px');
			num2=1;

	}
	$('.yx2_6 ul').stop().animate({'left':-370*num2+'px'},500);
})

$('.out').hover(function(){
  clearInterval(img_timer);
},function(){
  fn1();
})




//footer联系方式qq
$('.foot1_2').children('span').hover(function(){
  $(this).children('img').show()
  $(this).children('span').addClass('.sjx1')
},function(){
  $(this).children('img').hide()
  $(this).children('span').removeClass('.sjx1')
})

