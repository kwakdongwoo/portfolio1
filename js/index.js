$('.slide_group').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  vertical: true,
  prevArrow: '<button class="slick-prev slick-arrow"><i class="fa-solid fa-chevron-up"></i></button>',
  nextArrow: '<button class="slick-next slick-arrow"><i class="fa-solid fa-chevron-down"></i></button>',
  pauseOnHover: false,
})


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

