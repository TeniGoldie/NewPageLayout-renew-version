$(document).ready(function() {

//MMENU

var $menu = $("#my-menu").mmenu({
   //   options
});

var $icon = $("#my-icon");
var API = $menu.data( "mmenu" );

$icon.on( "click", function() {
   API.open();
});

API.bind( "opened", function() {
    $icon.addClass( "is-active" );
});

$icon.on("click", function(){
	API.close();
});



//OWL CAROUSEL

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    nav: true,
    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']

  });

//HAMBURGER BUTTON


  var $hamburger = $(".hamburger");

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    
  });

  
// SEARCH FIELD  

	var input = $('.search-input');

  $('.search').on('click', function() {
  	console.log('123');
  	input.toggleClass('hidden');
  });

  


    
});