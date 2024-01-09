$(function(){
    
    floatDiv();
		

//마우스 휠 이벤트
function floatDiv(){
    var contents=$('#contents>div');

    //스크롤이동시 컨텐츠 영역들이 탑으로 이동하도록
    $(window).scroll(function(){
        var sct=$(window).scrollTop();

        contents.each(function(){
            var tg=$(this);
            var i=tg.index();

            //scrollTop()의 위치가 top보다 크거나 같다면 tg를 특정좌표로 이동
            if(tg.offset().top<=sct){
                switch(i){
                    case 0:
                        skillsPogressbar();
                        break; //종료문

                }
            }
        });
        var mWrap =$('#menuWrap');
				if(scrollY>700){
        mWrap.stop().animate({
	      opacity:1
        },500);
				}else{
					mWrap.stop().animate({
						opacity:0
					},500);
				}
    });
    //마우스 휠 이벤트
    $("div.mn").each(function () { 
		$(this).on("mousewheel DOMMouseScroll", function (e) { 
			var delta = 0;
			if (!event) event = window.event; 
					
			if (event.wheelDelta) { 
			
				delta = event.wheelDelta / 120;  

			} else if (event.detail) delta = -event.detail / 3;  
			
			
			var moveTop = null;
			
			//마우스휠을 위에서 아래로
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
				
			//마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}
			
			//화면이동0.5초
			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration: 500
			});
		});
	});	





};

//skill부분
function skillsPogressbar(){
	var htmlNum=90;
	var cssNum=90;
	var javaScriptNum=75;
	var jqueryNum=75;
	var photoShopNum=90;
	var illustratorNum=80;
	var reactNum=75;
	var figmaNum=80;
	var max=100;
	var duration=1500;

	//progressbar 초기위치
	$('.bar').css('right','100%');

	// html
	
	$('#html_bar').stop().animate({
		'right':100-(htmlNum/max*100)+'%',
	},{
		'duration':duration,
		'easing':'easeInOutQuart',
		'progress':function(anumation,progress,msRemanining){
			$('#html_cnt').text(Math.round(htmlNum*progress));
		}
	})
	
	// css
	
	$('#css_bar').stop().animate({
		'right':100-(cssNum/max*100)+'%',
	},{
		'duration':duration,
		'easing':'easeInOutQuart',
		'progress':function(anumation,progress,msRemanining){
			$('#css_cnt').text(Math.round(cssNum*progress));
		}
	})

	// javascript
	
	$('#javascript_bar').stop().animate({
		'right':100-(javaScriptNum/max*100)+'%',
	},{
		'duration':duration,
		'easing':'easeInOutQuart',
		'progress':function(anumation,progress,msRemanining){
			$('#javascript_cnt').text(Math.round(javaScriptNum*progress));
		}
	})

	//jquery
	$('#jquery_bar').stop().animate({
		'right':100-(jqueryNum/max*100)+'%',
	},{
		'duration':duration,
		'easing':'easeInOutQuart',
		'progress':function(anumation,progress,msRemanining){
			$('#jquery_cnt').text(Math.round(jqueryNum*progress));
		}
	})
	//photoshop
	$('#photoshop_bar').stop().animate({
		'right':100-(photoShopNum/max*100)+'%',
	},{
		'duration':duration,
		'easing':'easeInOutQuart',
		'progress':function(anumation,progress,msRemanining){
			$('#photoshop_cnt').text(Math.round(photoShopNum*progress));
		}
	})
	//illustrator
	$('#illustrator_bar').stop().animate({
		'right':100-(htmlNum/max*100)+'%',
	},{
		'duration':duration,
		'easing':'easeInOutQuart',
		'progress':function(anumation,progress,msRemanining){
			$('#illustrator_cnt').text(Math.round(illustratorNum*progress));
		}
	})
		//react
		$('#react_bar').stop().animate({
			'right':100-(htmlNum/max*100)+'%',
		},{
			'duration':duration,
			'easing':'easeInOutQuart',
			'progress':function(anumation,progress,msRemanining){
				$('#react_cnt').text(Math.round(reactNum*progress));
			}
		})
				//figma
				$('#figma_bar').stop().animate({
					'right':100-(htmlNum/max*100)+'%',
				},{
					'duration':duration,
					'easing':'easeInOutQuart',
					'progress':function(anumation,progress,msRemanining){
						$('#figma_cnt').text(Math.round(figmaNum*progress));
					}
				})
	







}


/* 텍스트 효과 */

$('.type').typed({
	strings:['Thank You For Watching  ; &gt; ♥'],
	typeSpeed:100, //타이밍속도
	backDelay:200,
	loop:true  //false는 한번만 실행
})

/* 이미지 둥실둥실 뜨는 */

$('#skills img').DB_springMove({
	//둥실둥실 좌우로 움직임 가로방향으로
	dir:'y',
	mirror:1, //움직이는 반경반전
	radius:8, //움직이는 반경 지름
	motionSpeed:0.07 //속도
})

$('#skills img');


//pc화면에 스크롤 되도록  css

$('.css_img .main_page').hover(function(){

	var ah=$(this).find('a').innerHeight(); //a요소의 높이+padding포함한 크기로 잡을수 있음.
	var img=$(this).find('img');
	var imgh=$(this).find('img').innerHeight();

	img.stop().animate({top:ah-imgh},3000);




},function(){
	var img=$(this).find('img');
	img.stop().animate({top:0},3000); 
})

//pc화면에 스크롤 되도록  jquery

$('.css_img01 .main_page01').hover(function(){

	var ah=$(this).find('a').innerHeight(); //a요소의 높이+padding포함한 크기로 잡을수 있음.
	var img=$(this).find('img');
	var imgh=$(this).find('img').innerHeight();

	img.stop().animate({top:ah-imgh},3000);




},function(){
	var img=$(this).find('img');
	img.stop().animate({top:0},3000); 
})

//pc화면에 스크롤 되도록  반응형

$('.css_img02 .main_page02').hover(function(){

	var ah=$(this).find('a').innerHeight(); //a요소의 높이+padding포함한 크기로 잡을수 있음.
	var img=$(this).find('img');
	var imgh=$(this).find('img').innerHeight();

	img.stop().animate({top:ah-imgh},2000);




},function(){
	var img=$(this).find('img');
	img.stop().animate({top:0},3000); 
})

//iphone 스크롤
$('#iphone .iphoneMain').hover(function(){

	var ah=$(this).find('a').innerHeight(); //a요소의 높이+padding포함한 크기로 잡을수 있음.
	var img=$(this).find('img');
	var imgh=$(this).find('img').innerHeight();

	img.stop().animate({top:ah-imgh},2000);




},function(){
	var img=$(this).find('img');
	img.stop().animate({top:0},2000); 
})

//ipad 스크롤
$('#ipad .ipadMain').hover(function(){

	var ah=$(this).find('a').innerHeight(); //a요소의 높이+padding포함한 크기로 잡을수 있음.
	var img=$(this).find('img');
	var imgh=$(this).find('img').innerHeight();

	img.stop().animate({top:ah-imgh},2000);




},function(){
	var img=$(this).find('img');
	img.stop().animate({top:0},2000); 
})


//pc화면에 스크롤 되도록  리액트앱

$('.css_img .app_page').hover(function(){

	var ah=$(this).find('a').innerHeight(); //a요소의 높이+padding포함한 크기로 잡을수 있음.
	var img=$(this).find('img');
	var imgh=$(this).find('img').innerHeight();

	img.stop().animate({top:ah-imgh},3000);




},function(){
	var img=$(this).find('img');
	img.stop().animate({top:0},3000); 
})

//메뉴 버튼



$('#menu_open').click(function(){
	$('#nav').stop().animate({left:0},500);
	$('#header>#menu_btn').stop().animate({right:280},700);
	$('#menu_close').fadeIn(100);
	$('#menu_open').fadeOut(100);
})
$('#menu_close').click(function(){
	$('#nav').stop().animate({left:"130%"},500);
	$('#header>#menu_btn').stop().animate({right:20},500);
	$('#menu_close').fadeOut(100);
	$('#menu_open').fadeIn(100);
})

/*  헤더 클릭하면 이동 */

$('#menuWrap>ul>li').mouseover(function(){
	$(this).find('.mn').stop().slideDown(300);   
});
$('#menuWrap>ul>li').mouseout(function(){
	$(this).find('.mn').stop().slideUp(300);
});

$('.Button01').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});    
$('.Button02').click(function(){$('html, body').animate({scrollTop:$('#about1').offset().top},800);});
$('Button03').click(function(){$('html, body').animate({scrollTop:$('#about2').offset().top},800);});

/*  nav 클릭하면 이동 */

$('#nav>#navwrap>#navmenu>li').mouseover(function(){
	$(this).find('.mn').stop().slideDown(300);   
});
$('#nav>#navwrap>#navmenu>li').mouseout(function(){
	$(this).find('.mn').stop().slideUp(300);
});

$('.Button03').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});
$('.Button01').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});
$('.Button02').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});
$('.Button04').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});
$('.Button05').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});
$('.Button06').click(function(){$('html, body').animate({scrollTop:$('#main').offset().top},800);});
 




$('.type2-2').typed({
	strings:["REACT APP"],  
	typeSpeed:120,
	backDelay:2000, 
	loop:true, 
	showCursor: false 
})
$('.type2-3').typed({
	strings:["반응형 웹"],  
	typeSpeed:120,
	backDelay:2000, 
	loop:true, 
	showCursor: false 
})
 $('.type2-4').typed({
	strings:["HTML,CSS"],  
	typeSpeed:120,
	backDelay:2000, 
	loop:true, 
	showCursor: false 
})
 $('.type2-5').typed({
	strings:["CSS, JQUERY"],  
	typeSpeed:120,
	backDelay:2000, 
	loop:true, 
	showCursor: false 
}) 






});