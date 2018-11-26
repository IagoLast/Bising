import mapService from './map.service.js';

const $menuButton = document.querySelector('.header__menu');
const $drawerAside = document.querySelector('aside');
const $autocompleteInput = new google.maps.places.Autocomplete((document.getElementById('autocomplete')), {
  types: ['geocode']
});

$menuButton.addEventListener('click', toggle);
$autocompleteInput.addListener('place_changed', _onPlaceCHanged);


export function open() {
  $drawerAside.classList.add('visible');
}

export function close() {
  $drawerAside.classList.remove('visible');
}

export function toggle() {
  $drawerAside.classList.toggle('visible');
}


function _onPlaceCHanged() {
  mapService.setDestination($autocompleteInput.getPlace().geometry.location);
  close();
}