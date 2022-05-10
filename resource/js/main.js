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