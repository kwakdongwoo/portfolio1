var ww = $(window).width()
if (ww > 1024) {
  $('html').addClass('pc')
} else {
  $('html').addClass('mobile')
}


var headerOffset = $('#nav').offset();

if ($('html').hasClass('pc')) {

  $(window).scroll(function () {
    if ($(document).scrollTop() > headerOffset.top) {
      $('#nav').addClass('hscroll');
      $('#nav .logo').attr('src', './img/logo1.png')
    } else {
      $('#nav').removeClass('hscroll');
      $('#nav .logo').attr('src', './img/logo_white.png')
    }
  })

}

if ($('html').hasClass('mobile')) {

  $('#nav .logo').attr('src', './img/logo.png')

  $('#header .open').on('click', function () {

    $(this).next().stop().slideToggle()

    if ($(this).find('i').hasClass('fa-bars-staggered') ) {
      
      $(this).find('i').removeClass('fa-bars-staggered').addClass('fa-x')
    } else {
      $(this).find('i').removeClass('fa-x').addClass('fa-bars-staggered')
    }

  })

}

$('#scroll_btn_group .main').on('click',function(){

  if ( $(this).parents().hasClass('on') ) {
    $(this).parents().removeClass('on')
  } else {
    $(this).parents().addClass('on')
  }

  if ($(this).find('i').hasClass('fa-bars-staggered') ) {
    $(this).find('i').removeClass('fa-bars-staggered').addClass('fa-x')
  } else {
    $(this).find('i').removeClass('fa-x').addClass('fa-bars-staggered')
  }
  

})


$('#scroll_btn_group').hide()

$(window).scroll(function(){

	if ($(this).scrollTop() > 300){
		$('#scroll_btn_group').show();
	} else{
		$('#scroll_btn_group').hide().removeClass('on');
    $('#scroll_btn_group .main').find('i').removeClass('fa-x').addClass('fa-bars-staggered')
	}

})

$('#scroll_btn_group .sub1').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
})
