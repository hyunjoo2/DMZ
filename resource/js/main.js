//풀페이지 script
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
        'navigationTooltips': ['MAIN', '평화생명소식', '교육현황', '뉴스레터 신청'],

        'onLeave': function (index, nextIndex, direction) {
            if (index == 5 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            } else if (index == 5 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }
        },

        afterLoad: function(index,anchorIndex){
            jQuery('.section.active [data-aos]').addClass("aos-animate");
            if(anchorIndex == '3'){
                $(".counter-num").find("p").each(function (i) {
                    let max_count = $(this).data("count"); // 카운트 될 값
                    var scoreDisplay = this;
                    var count = {
                        score: 0
                    };

                    var tween1 = new TimelineMax();
                    tween1.to(count, 1, {
                        score: max_count,
                        roundProps: "score",
                        onUpdate: function () {
                            scoreDisplay.innerHTML = count.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        },
                        ease: Linear.easeNone
                    });

                    
                });
            }
        },

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



    $(window).resize(function () {
        var width = $(window).width();
        if (width <= 720) {
            $('.section.active [data-aos]').removeClass("aos-animate");
        } else {

        }

    });

    $(window).trigger("resize"); //강제로 호출하는 함수



})


$(function () {
    mobile();
});

function mobile() {

    var w = $(".wrap").width();

    if (w > 721) { //PC
    
    } else { //mobile 
        $('.section.active [data-aos]').removeClass("aos-animate");
    }
}