$(function(){
	$(window).scroll(function(e){
		var num = $('.nav-tab').offset().top;
		var distance =  $(window).scrollTop();
		if(distance>=num){
			$('.nav-tab-hide').addClass('scrollnav').stop().slideDown(300);
		}else{
			$('.nav-tab-hide').hide();
		}
	})
	$('.right-icon').hover(function(){
		$('.hotline-hide').show();
	},function(){
		$('.hotline-hide').hide();
	})
	
	$('.list-left').hover(function(){
		$('.listmenu').stop().slideDown();
	},function(){
		$('.listmenu').stop().slideUp();
	},100)	
	$('.listmenu>li').hover(function(){
		$(this).children('div').stop().fadeIn(100);
		$(this).children('div').animate({'width':'351px'},200);
	},function(){	
		$(this).children('div').css({'width':'320px'});
		$(this).children('div').stop().hide();
	})
	$('.listmenu>li').hover(function(){
		$(this).children('a').removeClass('lista').addClass('listo');	
	},function(){
		$(this).children('a').removeClass('listo').addClass('lista');
	})
	//固定条的jq
	$('.list-left-hide').hover(function(){
		$('.listmenu-hide').stop().slideDown();
	},function(){
		$('.listmenu-hide').stop().slideUp();
	},100)
	$('.listmenu-hide>li').hover(function(){
		
		$(this).children('div').stop().fadeIn(100);
		$(this).children('div').animate({'width':'351px'},200);
	},function(){	
		$(this).children('div').css({'width':'320px'});
		$(this).children('div').stop().hide();
		
	})
	$('.listmenu-hide>li').hover(function(){
		$(this).children('a').removeClass('lista').addClass('listo');	
	},function(){
		$(this).children('a').removeClass('listo').addClass('lista');
	})
})