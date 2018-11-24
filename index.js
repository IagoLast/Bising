import './map.service.js';
import mapService from './map.service.js';
import markerService from './marker.service.js';
import apiService from './api.service.js';

(async () => {
  const map = mapService.initMap();
  const stations = await apiService.getData();
  _updateStations(map, stations);

  map.addListener('bounds_changed', () => _updateStations(map, stations));
})();


function _updateStations(map, stations) {
  for (const station of stations) {
    const marker = markerService.generateMarker(station);
    if (marker.visible && map.getBounds().contains(marker.getPosition())) {
      !marker.getMap() && marker.setMap(map);
    } else {
      marker.setMap(null);
    }
  }
}