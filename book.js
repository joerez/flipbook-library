function newPage(element) {

  $(this).css("z-index", "19");

  $(element).on("click", function() {
    $(this).css('transform', 'rotateY(-180deg)');

  })
}


$('.cover').on("click", function() {

  $('.book').css("transform", "rotateY(-30deg) rotateX(-0deg) scale(1)");
  $('.book').removeClass('hoveit');
   $('.cover').css('transform', 'rotateY(-180deg)');
   $('.cover').css("color", "brown");
   $(this).css('z-index', '20');
})

$('.firstPage').on("click", function() {

  $(this).css('transform', 'rotateY(-180deg)');

})

$('.bookBack').on("click", function() {
  $('.fifthPage').css('transform', 'rotateY(0deg)');
  $('.fourthPage').css('transform', 'rotateY(0deg)');
  $('.thirdPage').css('transform', 'rotateY(0deg)');
  $('.secondPage').css('transform', 'rotateY(0deg)');
  $('.firstPage').css('transform', 'rotateY(0deg)');
  $('.cover').css('transform', 'rotateY(0deg)');
  $('.cover').css("color", "white");
  $('.book').addClass("hoveit");
  $('.book').css("transform", "rotateY(25deg)")
})

newPage('.secondPage');

newPage('.thirdPage');

newPage('.signature');

newPage('.fourthPage');

// newPage('.fifthPage');


$('.signbutton').on("click", function() {
  $('.signBook').show();
  $('.signBook').addClass('woah blazingStar');
})
