function initMap() {
    var uluru = {lat: 49.018308, lng: 31.597471};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: uluru,
      styles:  [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
    });
    var image = 'img/map-marker.svg';
    var infowindow = [];
    infowindow[0] = new google.maps.InfoWindow({
        content: "Литвишко&nbsp;Сергій&nbsp;Юрійович Регіональний&nbsp;менеджер (Київська&nbsp;обл.) <br> (050)-486-37-46 (068)-984-45-77 <span>s.litvishko@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[1] = new google.maps.InfoWindow({
        content: "Мосейчук Василь Анатолійович Регіональний менеджер (Полтавська обл.) <br> (050) 346 -11-13 (050) 346-40-55 <span>v.moseychuk@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[2] = new google.maps.InfoWindow({
        content: "Зданевич Микола Олександрович Регіональний менеджер (Житомирська, Хмельницька обл.) <br> (050)-486-37-51 (067) 412 82 42 <span>n.zdanevich@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[3] = new google.maps.InfoWindow({
        content: "Литвишко Сергій Юрійович Регіональний менеджер (Київська обл.) <br> (050)-486-37-46 (068) 984 45 77 <span>s.litvishko@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[4] = new google.maps.InfoWindow({
        content: "Соколов Юрій Романович Регіональний менеджер (Вінницька обл.) <br> (050)-486-37-58 (067)-432-87-97 <span>y.sokolov@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[5] = new google.maps.InfoWindow({
        content: "Шувальський Андрій Володимирович Регіональний менеджер (Івано-Франківська, Закарпатська, Чернівецька обл.) <br> (050)-486-37-59 (067) 344 78 77 <span>a.shuvalsky@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[6] = new google.maps.InfoWindow({
        content: "Карманський Олег Володимирович Регіональний менеджер (Львівська обл.) <br> (050)-486-37-69 (067)-949-59-91 <span>o.karmansky@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[7] = new google.maps.InfoWindow({
        content: "Литвишко Сергій Юрійович Регіональний менеджер (Київська обл.) <br> (050)-486-37-46 (068) 984 45 77 <span>s.litvishko@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[8] = new google.maps.InfoWindow({
        content: "Шувальський Андрій Володимирович Регіональний менеджер (Івано-Франківська, Закарпатська, Чернівецька обл.) <br> (050)-486-37-59 (067) 344 78 77 <span>a.shuvalsky@inkorgas.com</span>",
        maxWidth: 200
    });
        infowindow[9] = new google.maps.InfoWindow({
        content: "Шувальський Андрій Володимирович Регіональний менеджер (Івано-Франківська, Закарпатська, Чернівецька обл.) <br> (050)-486-37-59 (067) 344 78 77 <span>a.shuvalsky@inkorgas.com</span>",
        maxWidth: 200
    });
    var marker = [];
    marker[0] =  new google.maps.Marker({
          position: {lat: 50.466489, lng: 30.520811},
          map: map,
          icon: image
    }); 
    marker[1] = new google.maps.Marker({
          position: {lat: 49.591376, lng: 34.541807},
          map: map,
          icon: image
    });
    marker[2] = new google.maps.Marker({
      position: {lat: 50.270276, lng: 28.653136},
      map: map,
      icon: image
    });
    marker[3] = new google.maps.Marker({
      position: {lat: 50.002688, lng: 36.211729},
      map: map,
      icon: image
    });
    marker[4] = new google.maps.Marker({
      position: {lat: 49.262677, lng: 28.455382},
      map: map,
      icon: image
    });
    marker[5] = new google.maps.Marker({
      position: {lat: 48.931773, lng: 24.720030},
      map: map,
      icon: image
    });
    marker[6] = new google.maps.Marker({
      position: {lat: 49.832914, lng: 24.016905},
      map: map,
      icon: image
    });
    marker[7] = new google.maps.Marker({
      position: {lat: 49.577131, lng: 25.598937},
      map: map,
      icon: image
    });
    marker[8] = new google.maps.Marker({
      position: {lat: 48.307201, lng: 25.906554},
      map: map,
      icon: image
    });
    marker[9] = new google.maps.Marker({
      position: {lat: 48.429324, lng: 22.921363},
      map: map,
      icon: image
    });

    for( var i = 0; i < marker.length; i++) {
        // var mark = marker[i];
        // var inf = infowindow[i];
        marker[i].addListener('mouseover', function() {
            for( var i = 0; i < marker.length; i++) {
                if (marker[i] == this) {
                    infowindow[i].open(map, this);
                } else {
                    infowindow[i].close();
                }
            }
    });  
    }
    // marker[0].addListener('mouseover', function() {
    //     infowindow[0].open(map, marker[0]);
    // });  
    // var kiev = new google.maps.Marker({
    //   position: {lat: 50.466489, lng: 30.520811},
    //   map: map,
    //   icon: image
    // });
    // var poltava = new google.maps.Marker({
    //   position: {lat: 49.591376, lng: 34.541807},
    //   map: map,
    //   icon: image
    // });
    // var gitomir = new google.maps.Marker({
    //   position: {lat: 50.270276, lng: 28.653136},
    //   map: map,
    //   icon: image
    // });
    // var harkov = new google.maps.Marker({
    //   position: {lat: 50.002688, lng: 36.211729},
    //   map: map,
    //   icon: image
    // });
    // var viтnitsa = new google.maps.Marker({
    //   position: {lat: 49.262677, lng: 28.455382},
    //   map: map,
    //   icon: image
    // });
    // var ivanoF = new google.maps.Marker({
    //   position: {lat: 48.931773, lng: 24.720030},
    //   map: map,
    //   icon: image
    // });
    // var lviv = new google.maps.Marker({
    //   position: {lat: 49.832914, lng: 24.016905},
    //   map: map,
    //   icon: image
    // });
    // var ternopil = new google.maps.Marker({
    //   position: {lat: 49.577131, lng: 25.598937},
    //   map: map,
    //   icon: image
    // });
    // var chernovci = new google.maps.Marker({
    //   position: {lat: 48.307201, lng: 25.906554},
    //   map: map,
    //   icon: image
    // });
    // var zakarpatska = new google.maps.Marker({
    //   position: {lat: 48.429324, lng: 22.921363},
    //   map: map,
    //   icon: image
    // });
    // kiev.addListener('mouseover', function() {
    //     infowindow[0].open(map, kiev);
    // });  

  }