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

var map;
      function initMap() {
        Nmap = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -7.9455353, lng: 112.6191439},
          zoom: 14,
          disableDefaultUI: true,
          scrollwheel: false,
          styles: [
  {
    "stylers": [
      {
        "lightness": -5
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
      {
        "saturation": -75
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
        });
        var marker = new google.maps.Marker({
        	position: {lat: -7.9508206, lng: 112.6178678},
        	map: Nmap,
            icon: ('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
        });
      };


Vue.component('user-info', {
    props:{
        worker: {
            type: Object
        },
        classes: {
            type: Object
        }
    },
    template:`
    <div class="ba-slider2__element">
        <div class="ba-slider2__images">
            <img class="ba-slider2__foto ba-slider2__foto--center" v-bind:src="worker.image" v-bind:class="worker.newPic" alt="">
        </div>
        <div class="ba-slider2__info">
            <h3 class="ba-slider2__info--name">{{worker.name}}</h3>
            <p class="ba-slider2__info--position">{{worker.position}}</p>
        </div>
        <div class="ba-slider2__icons">
           <div class="ba-slider2__icons--center">
             <img v-for="social in worker.workerSocial" v-bind:src="social" alt="">
            </div>
        </div>
    </div>
    `,
    data: function(){
        return {
            background: "./images/Our-Team-Bg.png",
        }
    }
}
);


var vm = new Vue ({
    el:'#slider2',
    data: function() {
        return {
           workers: [
               {
                   workerId:1,
                   image: './images/Layer-1.png',
                   name: 'Miguel Obrien',
                   position: 'CEO & Founder',
                   workerSocial: ['./images/linked-in.png', './images/google+.png', './images/facebook.png', './images/twitter.png'],
                   additional: false
               },
               {
                  workerId:2,
                  image: './images/Layer-4.png',
                  name: 'Jackie Carroll',
                  position: 'Art Director',
                  workerSocial: ['./images/behance.png','./images/linked-in.png', './images/google+.png', './images/facebook.png', './images/twitter.png'],
                  additional: false
               },
               {
                  workerId:3,
                  image: './images/Layer-5.png',
                  name: 'Ida Morrison',
                  position: 'Designer',
                  workerSocial: ['./images/behance.png','./images/linked-in.png', './images/google+.png', './images/facebook.png', './images/twitter.png'],
                  additional: false
               },
               {
                  workerId:4,
                  image: './images/Layer-6.jpg',
                  name: 'Yavorovych Maksym',
                  position: 'Front-End Developer',
                  workerSocial: ['./images/behance.png','./images/linked-in.png', './images/google+.png', './images/facebook.png', './images/twitter.png'],
                  newPic: 'slider-second__image--change'
               },

           ]
        }
    }
});
$(document).ready(function(){
  $('#ba-slider2').slick({
  	    dots: false,
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

new Vue({
  el: '#icons1',
  data: {
    show: false
  }
})
new Vue({
  el: '#icons2',
  data: {
    show: false
  }
})

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
    return false;
});
