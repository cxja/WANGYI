/*轮播图*/
var zxnum = 0;
var zxtimer;
function runto(){
	clearInterval(zxtimer);
	zxtimer = setInterval(function(){
		zxnum++;
		if(zxnum > 5){
			zxnum = 0;
		}
        $('.zx-bg-carousel ul').css('left', -zxnum*$(window).outerWidth()+ 'px');
		$('.zxdot').children().eq(zxnum).siblings().removeClass('active');
		$('.zxdot').children().eq(zxnum).addClass('active');
    },2000); 
}
runto();
$('.zx-bg').hover(function(){
	clearInterval(zxtimer);	
},function(){
	runto();
});
$('.zxdot').children().hover(function(){
	$('.zx-bg-carousel ul').css('left',-$(this).index()*$(window).outerWidth()+'px');
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});
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