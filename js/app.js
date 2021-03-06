
// jQuery to collapse the navbar on scroll
//$(window).scroll(function () {
//    if ($(".navbar").offset().top > 50) {
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }
//});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function () {
    // Cloning main navigation for mobile menu
    $(".mobile-navigation").append($(".main-navigation .menu").clone());
    // Mobile menu toggle 
    $(".menu-toggle").click(function () {
        $(".mobile-navigation").slideToggle();
    });
    // Closes the Responsive Menu on Menu Item Click
    $('.mobile-navigation ul li a').click(function () {
        $(".mobile-navigation").slideToggle();
    });
    $('a.loadcontent').click(function () {
        var $anchor = $(this);
        var $menu = $anchor.parent().parent();
        $menu.find(".current-menu-item").removeClass("current-menu-item");
        $anchor.parent().addClass("current-menu-item");

        var toLoad = $(this).attr('href') + '.html';
        $('#content').hide('fast', loadContent);
//        $('#load').remove();
//        $('#wrapper').append('<span id="load">LOADING...</span>');
//        $('#load').fadeIn('normal');
//        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);
        window.scrollTo(0, 0); //scroll to top
        function loadContent() {
            $('#content').load(toLoad, showNewContent());
        }
        function showNewContent() {
            $('#content').show('normal');
        }
//        function hideLoader() {
//            $('#load').fadeOut('normal');
//        }

        return false;
    });
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var $menu = $anchor.parent().parent();
        $menu.find(".current-menu-item").removeClass("current-menu-item");
        $anchor.parent().addClass("current-menu-item");
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 123
        }, 500, 'easeInOutExpo'); // scroll fast
        event.preventDefault();
    });
    $(".hero-slider").flexslider({
        controlNav: false,
        directionNav: true,
        animation: "fade",
        slideshowSpeed: 2500,
        animationSpeed: 500,
//            pausePlay: true,
//            pauseText: 'Pause',
//            playText: 'Play',
        pauseOnHover: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });
    $("#clients").owlCarousel({
        items: 5,
        autoWidth:true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true
    });   
    
    $("#products").owlCarousel({
        items: 5,
        autoWidth:true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 500,
        autoplayHoverPause: true
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.mobile-navigation ul li a').click(function () {
    $('.menu-toggle').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

//function init() {
//    // Basic options for a simple Google Map
//    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//    var mapOptions = {
//        // How zoomed in you want the map to start at (always required)
//        zoom: 15,
//        // The latitude and longitude to center the map (always required)
//        center: new google.maps.LatLng(40.6700, -73.9400), // New York
//
//        // Disables the default Google Maps UI components
//        disableDefaultUI: true,
//        scrollwheel: false,
//        draggable: false,
//        // How you would like to style the map. 
//        // This is where you would paste any style found on Snazzy Maps.
//        styles: [{
//                "featureType": "water",
//                "elementType": "geometry",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 17
//                    }]
//            }, {
//                "featureType": "landscape",
//                "elementType": "geometry",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 20
//                    }]
//            }, {
//                "featureType": "road.highway",
//                "elementType": "geometry.fill",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 17
//                    }]
//            }, {
//                "featureType": "road.highway",
//                "elementType": "geometry.stroke",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 29
//                    }, {
//                        "weight": 0.2
//                    }]
//            }, {
//                "featureType": "road.arterial",
//                "elementType": "geometry",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 18
//                    }]
//            }, {
//                "featureType": "road.local",
//                "elementType": "geometry",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 16
//                    }]
//            }, {
//                "featureType": "poi",
//                "elementType": "geometry",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 21
//                    }]
//            }, {
//                "elementType": "labels.text.stroke",
//                "stylers": [{
//                        "visibility": "on"
//                    }, {
//                        "color": "#000000"
//                    }, {
//                        "lightness": 16
//                    }]
//            }, {
//                "elementType": "labels.text.fill",
//                "stylers": [{
//                        "saturation": 36
//                    }, {
//                        "color": "#000000"
//                    }, {
//                        "lightness": 40
//                    }]
//            }, {
//                "elementType": "labels.icon",
//                "stylers": [{
//                        "visibility": "off"
//                    }]
//            }, {
//                "featureType": "transit",
//                "elementType": "geometry",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 19
//                    }]
//            }, {
//                "featureType": "administrative",
//                "elementType": "geometry.fill",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 20
//                    }]
//            }, {
//                "featureType": "administrative",
//                "elementType": "geometry.stroke",
//                "stylers": [{
//                        "color": "#000000"
//                    }, {
//                        "lightness": 17
//                    }, {
//                        "weight": 1.2
//                    }]
//            }]
//    };
//
//    // Get the HTML DOM element that will contain your map 
//    // We are using a div with id="map" seen below in the <body>
////    var mapElement = document.getElementById('map');
////
////    // Create the Google Map using out element and options defined above
////    var map = new google.maps.Map(mapElement, mapOptions);
////
////    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
////    var image = 'img/map-marker.png';
////    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
////    var beachMarker = new google.maps.Marker({
////        position: myLatLng,
////        map: map,
////        icon: image
////    });
//}
