/*选项卡*/
$('.maincontent .main-top-left ul li').click(function(){
	$(this).siblings().removeClass('current');
	$(this).addClass('current');
	$('.maincontent .orderbox>div').eq($(this).index()).siblings().removeClass('current');
	$('.maincontent .orderbox>div').eq($(this).index()).addClass('current');
})
/*侧边选项卡*/
$('.sidebar .sideItem ul li').click(function(){
	$(this).siblings().removeClass('current');
	$(this).parents().parents().siblings().children('ul').children('li').removeClass('current');
	$(this).addClass('current');
})
/*轮播*/
$('.arrowleft').click(function(){
	$('.likecontainer ul').animate({'left':'0'});
	$('.arrowleft').css({'background-position':'0 -2356px'});
	$('.arrowright').css({'background-position':'0 -4377px'});
})
$('.arrowright').click(function(){
	$('.likecontainer ul').animate({'left':'-930px'});
	$('.arrowright').css({'background-position':'0 -4297px'});
	$('.arrowleft').css({'background-position':'0 -2436px'});
})

