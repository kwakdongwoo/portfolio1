var ww = $(window).width()
if (ww > 1024) {
  $('html').addClass('pc')
} else {
  $('html').addClass('mobile')
}




if ($('html').hasClass('pc')) {

  $('.slide_group').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    vertical: true,
    prevArrow: '<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-up"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-down"></i></button>',
    pauseOnHover: false,
  })

  $('.slide_group2').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    centerMode: true,
    arrows: false,
    dots: false,
    draggable:true,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        centerPadding: '100px',
      }
    }]
  })

} else if ($('html').hasClass('mobile')) {

  $('.slide_group').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows:false,
    vertical: false,
    pauseOnHover: false,
  })

  $('.slide_group2').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    centerMode: true,
    arrows: false,
    dots: false,
    draggable:true,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        centerPadding: '10px',
      }
    }]
  })


}


$('#article7 .qna .open').on('click', function () {

  $(this).next().stop().slideToggle()

  $(this).parent().siblings().find('i').removeClass('fa-minus').addClass('fa-plus')
  $(this).parent().siblings().find('span').slideUp()

  if ($(this).find('i').hasClass('fa-plus')) {
    $(this).find('i').removeClass('fa-plus').addClass('fa-minus')
  } else {
    $(this).find('i').removeClass('fa-minus').addClass('fa-plus')
  }

})

