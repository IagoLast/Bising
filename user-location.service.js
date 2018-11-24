const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export function trackUser(map, position) {
  const userMarker = new google.maps.Marker({
    icon: {
      url: 'https://image.flaticon.com/icons/svg/34/34665.svg',
      scaledSize: new google.maps.Size(32, 32),
    },
    map: map,
    position: position,
    size: new google.maps.Size(32, 32),
  });

  function onPosition(pos) {
    pos = pos.coords;
    userMarker.setPosition(new google.maps.LatLng(pos.latitude, pos.longitude));
  }

  navigator.geolocation.watchPosition(onPosition, console.error, OPTIONS);
}


export default {
  trackUser
};