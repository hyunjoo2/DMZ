$(function () {
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		  },
	  });

	  //팝업존
	  var swiper = new Swiper('.swiper-container.popup', {
		loop: true,
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });



})
