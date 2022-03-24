$(function () {
    $("#fullpage").prev().addClass("main");

    var swiper = new Swiper('.banner .swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: ".banner .swiper-pagination",
        },
    });



    // var memberCountConTxt = $(this).data("count");
  
    //     $({ val : 0 }).animate({ val : memberCountConTxt }, {
    //     duration: 2000,
    //     step: function() {
    //     var num = numberWithCommas(Math.floor(this.val));
    //     $("..counter-num p").text(num);
    //     },
    //     complete: function() {
    //     var num = numberWithCommas(Math.floor(this.val));
    //     $("..counter-num p").text(num);
    //     }
    // });
    
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }



})