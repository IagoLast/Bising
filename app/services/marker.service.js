const drawnStations = {};

export function generateMarker(station) {
  const marker = drawnStations[station.id];

  if (!marker) {
    return _createMarker(station);
  }

  return _updateMarker(marker, station);
}


function _createMarker(station) {
  const position = new google.maps.LatLng(station.latitude, station.longitude)
  const marker = new google.maps.Marker({
    id: station.id,
    position,
    label: _selectLabel(station),
    visible: (station.type == 'BIKE' && station.status == 1),
  });

  drawnStations[station.id] = marker;

  return marker;
}

function _updateMarker(marker, station) {
  marker.visible = (station.type == 'BIKE' && station.status == 1)
  const newLabel = _selectLabel(station);
  if (marker.getLabel() !== newLabel) {
    marker.setLabel(newLabel);
  }

  return marker;
}


function _selectLabel(station) {
  return {
    text: `${station.bikes}/${station.slots}`,
    color: 'black',
    fontSize: "8px"
  }
}


export default {
  generateMarker
}