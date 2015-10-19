console.log('...loaded, homie');





function flipPage(scroll){
  console.log('flipping');
  if(scroll > 50){
    $('#slide-one').addClass('hide-div');
    $('#slide-two').removeClass('hide-div');
  }
}

function changePage(){
  console.log('changing');

}



function firstGearVertical(scroll){
  var scroll = scroll;
  $firstGear = $('.gear');

  if (scroll > 50){
    $firstGear.css({'top': ( scroll + 100)});
  }

}

function firstGearSpin(scroll){
  var scroll = scroll;
  var degrees = (scroll/5);
  var negativeDegrees = (degrees * -1)
  $leftGear = $('.left-gear');
  $rightGear = $('.right-gear');

  $leftGear.css({
    '-webkit-transform' : 'rotate('+ degrees +'deg)',
    '-moz-transform' : 'rotate('+ degrees +'deg)',
    '-ms-transform' : 'rotate('+ degrees +'deg)',
    'transform' : 'rotate('+ degrees +'deg)'
              });
  $rightGear.css({
    '-webkit-transform' : 'rotate('+ negativeDegrees +'deg)',
    '-moz-transform' : 'rotate('+ negativeDegrees +'deg)',
    '-ms-transform' : 'rotate('+ negativeDegrees +'deg)',
    'transform' : 'rotate('+ negativeDegrees +'deg)'
  });


}



function nameVertical(scroll){
  var scroll = scroll;
    $header = $('.page-header');
    $header.css({'top': ( scroll + 100)});

}


$( document ).ready(function() {
  $('.change-page').on("click", function(){
    console.log('clicked');
    $( "#slide-one" ).fadeOut( "slow", function() {
  // Animation complete.
  });

  });

    // $('body').css({'height': '1000px'})
    // $('#slide-two').removeClass('hide-div');

    $('.website-hover').on("mouseover", function(){
      console.log('clicked');
      // $('.website-hover').html('Wanna See?');
    });



  $('.change-page').on("click", function(){
    console.log('clicked');
    $( "#slide-one" ).fadeOut( "slow", function() {
  // Animation complete.
    });
  });

  $('#project-one').on("mouseover", function(){
    console.log('clicked');
    $('.technology-box').removeClass('hide-div');
  });

  $('.parallax').parallax();

  // $('.change-page-up').on("click", function(){
  //   console.log('clicked');
  //   $('#slide-one').removeClass('hide-div');
  //   $('#slide-two').addClass('hide-div');
  // });



  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();

    // if (scroll > 507) {
    //   $('.title-section').addClass('fixed-menu');
    // } else if (scroll < 507) {
    //   $('.title-section').removeClass('fixed-menu');
    // }
    console.log(scroll);
    // flipPage(scroll);
    // changePage();
  });

});
