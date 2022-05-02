$(function () {
	//gnbOpen();
	sitemap();
	gnbSubMenu();
});


   
   
function gnbSubMenu(){
	var gnb = $(".gnb-menu");
	var gnbChild = $(".gnb-menu > li");
	var gnbTitle = gnb.find('a');

	gnbChild.on({
		mouseover: function(){
			$(this).addClass('on')			
		},
		mouseleave: function(){
			$(this).removeClass('on');
		}
	});
	gnbTitle.mouseover(function(){
		headerOpen();
	});
	$('.header').mouseleave(function(){
		headerClose();
		//$('body').css('overflow', 'initial')
	});

	function headerOpen() {  //Tweenmax를 이용한 헤더 메뉴 슬라이드 open
		TweenMax.killAll();
		TweenMax.to($(".header"), .5, {
			height : 480,
			ease : 'easeOutExpo'
		});
		$(".header").addClass("open");
	}

	function headerClose() {  //Tweenmax를 이용한 헤더 메뉴 슬라이드 close
		TweenMax.killAll();
		TweenMax.to($(".header"), .5, {
			height : 100,
			ease : 'easeOutExpo',
			onComplete : function() {
				$(".header").removeClass("open");
			}
		});
	}

}

function sitemap(){
	$(".sitemap-button>button").click(function(){
		$(this).parent().parent().addClass("open");
		$("html, body").addClass("overflow-hidden");
		
		$('body').on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();	
			event.stopPropagation();
			return false;
		});
	});
	$(".sitemap-menu .button-close").click(function(){
		$(this).parents().find(".sitemap").removeClass("open");
		$("html, body").removeClass("overflow-hidden");
		$('body').off('scroll touchmove mousewheel');
	})
	
}


// 720이하 sitemap 클릭시 fullpage 스크롤 막기
$(function(){
	//resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
	$(window).resize(function () {
		var width = $(window).width();
		if (width<=720) {
			//gnb sitemap 모바일
			$(".sitemap button").click(function(){
				$("html, body").addClass("overflow-hidden");
				$(".gnb").addClass("open");
                //$(this).addClass("button-close");
			});
			$(".button-close, .gnb-box__bg").click(function(){
				$("html, body").removeClass("overflow-hidden");
				$(".gnb").removeClass("open");
			});	

			//sitemap-menu
			$(".sitemap").addClass("mobile");
			$(".sitemap-menu__inner > ul > li").children().next().slideUp();
			
			
		}  else{
			$(".sitemap").removeClass("mobile");
			$(".sitemap-menu__inner > ul > li").children().next().slideDown();
			
		}
		
	});

	$(window).trigger("resize"); //강제로 호출하는 함수


	var gnbmenuLiMobile = $(".mobile .sitemap-menu__inner > ul > li");
	$(gnbmenuLiMobile).children().next().slideUp();

	$(gnbmenuLiMobile).children().click(function(){	
		$(this).next().slideToggle();
	});
	



});
