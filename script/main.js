 $(document).ready(function(){
  $('#slider').slick({
  	    dots: true,
  	    infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1500,
        prevArrow: '.ba-slider--left',
        nextArrow: '.ba-slider--right'
  });
});
 $(document).ready(function(){
  $('#ba-slider2').slick({
  	    dots: true,
  	    infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1500,
        variableWidth: true,
        prevArrow: '.ba-slider2--left',
        nextArrow: '.ba-slider2--right'
  });
});
var map;
      function initMap() {
        Nmap = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -7.9455353, lng: 112.6191439},
          zoom: 14,
          disableDefaultUI: true,
          scrollwheel: false
        });
        var marker = new google.maps.Marker({
        	position: {lat: -7.9508206, lng: 112.6178678},
        	map: Nmap,
            icon: ('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
        });
      };

