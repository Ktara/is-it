// function initMap() {
// 	if ($("#map_contacts").length > 0) {
// 		var uluru = {lat: 55.751911, lng: 37.620126};
// 	    var map = new google.maps.Map(document.getElementById('map_contacts'), {
// 	    	zoom: 14,
// 		    center: uluru,
// 		    styles:
// 	    });
// 	};
// };


function initMap() {
        
        var map = new google.maps.Map(document.getElementById('map_contacts'), {
          center: {lat: 55.751911, lng: 37.620126},
          zoom: 12,
          styles: [
          ]
        });
      }