import userLocationService from './user-location.service.js';

export function initMap() {
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, {
    center: {
      lat: 41.38,
      lng: 2.16
    },
    gestureHandling: 'greedy',
    zoom: 16,
    disableDefaultUI: true,
  });

  map.data.loadGeoJson('https://wt-4c17b3c888c61e0fdd8b150c4789e9c0-0.sandbox.auth0-extend.com/bicing/lines');

  map.data.setStyle({
    strokeColor: 'green',
  });

  if (navigator.geolocation) {
    console.log('Locating user');
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        userLocationService.trackUser(map, pos);
      }, console.error);
  } else {
    console.log('User not located');
  }

  return map;
}




export default {
  initMap
};