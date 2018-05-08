function initMap() {

        var uluru = {lat: 50.455851, lng: 30.490049};
        var map = new google.maps.Map(document.getElementById('contact_map'), {
            zoom: 18,
            center: uluru,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#007aff"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "0"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                }
            ]
        });
    var image = {
        url: 'assets/img/marker.svg',
        scaledSize: new google.maps.Size(50, 50),
    };
    var marker = new google.maps.Marker({
        position: {lat: 50.455851, lng: 30.490049},
        map: map,
        icon: image,

    });

};