function initMap() {

        var uluru = {lat: 50.455612, lng: 30.488901};
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

};