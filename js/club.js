/*头部信息轮播*/
var a=0
setInterval(function(){
	a++;
	if(a>4){
		a=0;
		$('.toplist').css({'top': -a*37 + 'px'});
		a=1;
	}
	$('.toplist').animate({'top': -a*37 + 'px'});
},4000)
/*会员信息轮播*/
$('.rightprev').click(function(){
	$('.rightsList').animate({'left': 0 + 'px'});
	$('.rightnext').css('display','block');
	$('.rightprev').css('display','none');
})
$('.rightnext').click(function(){
	$('.rightsList').animate({'left': -386 + 'px'});
	$('.rightprev').css('display','block');
	$('.rightnext').css('display','none');
})
/*轮播图*/
var num = 0;
var timer;
function run(){
	clearInterval(timer);
	timer = setInterval(function(){
		num++;
		if(num > 3){
			num = 0;
		}
        $('.carslide').css('left', -num*1090 + 'px');
		$('.dot').children().eq(num).siblings().removeClass('active');
		$('.dot').children().eq(num).addClass('active');
    },2000); 
}
run();
$('.container').hover(function(){
	clearInterval(timer);	
},function(){
	run();
});

$('.dot').children().hover(function(){
	$('.carslide').css('left',-$(this).index()*1090 +'px');
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});
/*底部轮播图*/
var par=0;
$('.prevbtn').click(function(){
	par--;
	if(par<0){
		par=0;
	}
	$('.activities').animate({'left': -par*376 + 'px'})
})
$('.nextbtn').click(function(){
	par++;
	console.log(par);
	if(par>2){
		par=2;
	}
	$('.activities').animate({'left': -par*376 + 'px'})
})
/*topbar下拉菜单*/
$('.member-hide').hover(function(){
	$('.dropdown-menu').removeClass('member-none');
},function(){
	$('.dropdown-menu').addClass('member-none');
})
$('.client-ser-hide').hover(function(){
	$('.dropdown-clientmenu').removeClass('member-none');
},function(){
	$('.dropdown-clientmenu').addClass('member-none');
})
$('.APP-hide').hover(function(){
	$('.appDropdown').removeClass('member-none');
},function(){
	$('.appDropdown').addClass('member-none');
})
/*底部hover*/
$('.foot .online-ser').hover(function(){
	$(this).children('p').css('color','#b4a078');
	$(this).children('span').css('background-position','0 -196px');
},function(){
	$(this).children('p').css('color','#333');
	$(this).children('span').css('background-position','0 -232px');
})
$('.foot .customer-reback').hover(function(){
	$(this).children('p').css('color','#b4a078');
	$(this).children('span').css('background-position','0 -61px');
},function(){
	$(this).children('p').css('color','#333');
	$(this).children('span').css('background-position','0 -98px');
})
/*购物车hover*/
$('.cartbox').hover(function(){
	if($('.cartnum').html()>0){
		$('.carthover').show();
	}
},function(){
	$('.carthover').hide();
})
$('.minishopcar').hover(function(){
	if($('.cartnum').html()>0){
		$('.carthover2').show();
	}
},function(){
	$('.carthover2').hide();
})
/*导航条hover*/
$('nav>ul>li').hover(function(){
$(this).children('div').fadeIn(300);
$(this).children('span').show();
},function(){
$(this).children('div').hide();
$(this).children('span').hide();
})

//滚动屏幕出现nav2
$(window).scroll(function (event){
  if ($(window).scrollTop()>177){
    $('.Nav').stop().slideDown();
  }else{
    $('.Nav').hide();
  }
})