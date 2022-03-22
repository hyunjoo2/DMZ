$(document).ready(function () {
	$('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'anchors': ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'footer'],
        verticalCentered: false,
		responsiveWidth: 720,
        //responsiveHeight: 1920,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['MAIN', '평화생명소식', '교육현황', '뉴스레터 신청' ],
		
        'onLeave': function (index, nextIndex, direction) {
            if (index == 5 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            } else if (index == 5 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }
        },

		onLeave: function(){
			jQuery('.section [data-aos]').removeClass("aos-animate");
		},
		onSlideLeave: function(){
			jQuery('.slide [data-aos]').removeClass("aos-animate");
		},
		afterSlideLoad: function(){
			jQuery('.slide.active [data-aos]').addClass("aos-animate");
			
		},
		afterLoad: function(){
			jQuery('.section.active [data-aos]').addClass("aos-animate");
		   //jQuery('.fp-table.active .aos-init').addClass('aos-animate');

		   $(".counter-num p").each(function(i) {
		
				let max_count = $(this).data("count"); // 카운트 될 값
				var scoreDisplay = this;
				var count = {score:0};
				
				var tween1 = new TimelineMax();
				tween1.to(count, 1, {score:max_count, roundProps:"score", onUpdate:function(){  scoreDisplay.innerHTML = count.score; }, ease:Linear.easeNone});


				//document.writeln(cn1);
			});
			
		
		   
			
		}

    });	
})

$(function () {
	$("#fullpage").prev().addClass("main");

	var swiper = new Swiper('.banner .swiper-container', {
		slidesPerView: 1,
		pagination: {
			el: ".banner .swiper-pagination",
		},
	});



})
