  "use strict";
  $('.carousel').carousel({
    interval: 2000
  })
  var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.851879,74.611398],
            zoom: 20
        });
        DG.marker([42.851879,74.611398]).addTo(map) .bindPopup('SB-BAR');
    });