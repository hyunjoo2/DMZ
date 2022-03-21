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

            $('#staticImg').toggleClass('active', (index == 4 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 6);
            $('#staticImg').toggleClass('moveUp', index == 6 && direction == 'up');
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
