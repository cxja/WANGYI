
var n=0;
var timer;
$(window).mousewheel(function(e,d){
	clearTimeout(timer);
	timer=setTimeout(function(){
		n=n-d;
		console.log(d);
		console.log(n)
	if(d==-1){
		$('.nav-right ul li').eq(n).addClass('active');
	}
	if(d==1){
		$('.nav-right ul li').eq(n+1).removeClass('active');
	}
	if(n<0){
		n=0;	
		$('.nav-right ul li').eq(0).addClass('active');

	}
	if(n==0){
		$('.circle1').css('display', 'none');
		$('.circle2').css('display', 'none');
	}
	if(n==1){
		$('.circle1').show();
		$('.circle2').show();
	}

	if(n==2){	
		$('.mcontent1').children('div').eq('0').removeClass('left-in');
		$('.mcontent1').children('div').eq('1').removeClass('right-in')
		$('.circle1').css('display', 'none');
		$('.circle2').css('display', 'none');
	}
	else{
		$('.mcontent1').children('div').eq('0').addClass('left-in');
		$('.mcontent1').children('div').eq('1').addClass('right-in')
		
	}

	if(n>3){
		
		n=3;   //四屏滚三次
	}
	
	$('.container').stop().css({'top':-100*n+'%'},500)  

	},300)

	
})

//圆圈


$(function(){
	$("#circle1").circleChart({
		size: 260,
		color: "#DDBA74",
		backgroundColor: "rgba(255,255,255,.2)",
		value: -95,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.03,
		startAngle:25,
		lineCap: "butt",
		
	});

	$("#circle2").circleChart({
		size: 260,
		color: "#DDBA74",
		backgroundColor: "rgba(255,255,255,.2)",
		value: -98,
		speed:5000,
		counterclockwise:true,
		widthRatio: 0.03,
		startAngle:25,
		lineCap: "butt",
		
	});
});

$('.counter-demo-2').lemCounter({
	value_to: 5,
	value_from:99
	});						
		
	$('.counter-demo-3').lemCounter({
		value_to: 1,
		value_from:99
		});	
