// $(function () {
// 	subHeader();
// 	gnbmenu();
// 	fileupload();//파일 업로드
// });


// function subHeader(){
// 	$("#fullpage").prev().children().addClass("main");
// }

// function gnbmenu(){
// 	var gnbmenuLi = $(".header .pc .gnb>li ");
// 	var gnbmenuA = gnbmenuLi.children();
// 	var gnbmenuUl = gnbmenuA.next();


// 	// gnbmenuA.hover(function () {
// 	// 	$(this).addClass("on");
// 	// 	$(this).next().addClass("open");
// 	// }, function () {
// 	// 	$(this).removeClass("on");
// 	// 	$(this).next().removeClass("open");
// 	// });

// 	gnbmenuA.mouseover(function(){
// 		$(this).addClass("on");
// 		$(this).next().addClass("open");
// 		$(this).parent().siblings().children().removeClass("on");
// 		$(this).parent().siblings().children().next().removeClass("open");
// 	});

// 	gnbmenuUl.mouseleave(function(){
// 		$(this).removeClass("open");
// 		$(this).prev().removeClass("on");
// 	});
	
// 	$(".gnb").mouseleave(function(){
// 		$(gnbmenuUl).removeClass("open");
// 		$(gnbmenuA).removeClass("on");
// 	});


	



// }

// function fileupload(){
// 	var fileTarget = $('.filebox .upload-hidden');

//     fileTarget.on('change', function(){
//         if(window.FileReader){
//             var filename = $(this)[0].files[0].name;
//         } else {
//             var filename = $(this).val().split('/').pop().split('\\').pop();
//         }

//         $(this).siblings('.upload-name').val(filename);
//     });
// }




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
                $(this).addClass("button-close");
			});
			$(".button-close, .gnb-box__bg").click(function(){
				$("html, body").removeClass("overflow-hidden");
				$(".gnb").removeClass("open");
			});
			
			
		} 
		//else if (width>=768 && width<992) { 
		//} else if (width>768) {
		//}
	});

	$(window).trigger("resize"); //강제로 호출하는 함수



});
