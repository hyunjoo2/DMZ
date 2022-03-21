$(function () {
	common.headerEvt();
	site_map();
    
});



common = {


	headerEvt: function () {
		$(window).scroll(function () {
			var ck = $(this).scrollTop();
			if (ck > 0) {
				$(".header").addClass("on");
			} else {
				$(".header").removeClass("on");
			}
		});
		$(window).scroll(function () {
			var ck = $(this).scrollTop();
			if (ck > 400) {
				$(".productInfo").addClass("on");
			} else {
				$(".productInfo").removeClass("on");
			}
		});
		$("body").on("mouseenter focus", ".header .gnb>li>a", function () {
			$(".header").addClass("active");
		});
		$("body").on("mouseleave", ".header", function () {
			$(".header, body").removeClass("active");
			$(".total-menu").removeClass("on");
		});
		$(".side-cont-logo").focus(function () {
			$(".header").removeClass("active");
		});



	},

}


function site_map() {
	var site_map = $(".header .tnb li.etc a.total-menu");
	var bnb_siteMap = $(".bnb_siteMap");

	bnb_siteMap.click(function () {
		$(".site_map_wrap").slideDown();
		$(".site_map_wrap").addClass("on");
		/*$(".gnb-box").addClass("on");*/
		/*$(".gnb-box").fadeIn();*/
		$("body").css("overflow", "hidden");
		$(".site_head a").focus();
        
	});
	$("#mo-menu-close").click(function () {
		$(".site_map_wrap").slideUp();
		$(".site_map_wrap").removeClass("on");
		$(".gnb-box").removeClass("on");
		$("body").css("overflow", "visible");
		$(".bnb_siteMap").focus();
		/*$(".bnb-list").find('a').eq(4).focus();*/
	});
	/* bnb_siteMap.keydown(function(key){
	  if(key.keyCode == 13){
		  $('.site_head a').focusin();
	  }
  });*/

	site_map.click(function () {
		$("#site_map_wrap").slideDown();
		$("#site_map_wrap").addClass("on");
		$(".gnb-box").addClass("on");
		$(".gnb-box").fadeIn();
		//$("body").css("overflow", "hidden");
		$(".site_head a").focus();
        $(".header").toggleClass("active");
	});
	$(".mo-menu-close").click(function () {
		$("#site_map_wrap").slideUp();
		$("#site_map_wrap").removeClass("on");
		$(".gnb-box").removeClass("on");
		$("body").css(" overflow", "visible");
		$("a.total-menu").focus();
	});

}



//



//0324 tab sub메뉴 되도록 추가  ---> 안됨
jQuery(document).ready(function () {
	// 함수실행
	dropdown_keyboard_access('.gnb li');
});

function dropdown_keyboard_access(nav) {
	$(nav + ' a').each(function () {
		$(this).focus(function () {
			var menuParent = $(this).parents(nav);
			$(".header").addClass('active');
		});
	});
	$(".link>a").focus(function () {
		$(".header").removeClass("active");
	})
}



function familySite(_target){
	window.open(_target,'','');
}
