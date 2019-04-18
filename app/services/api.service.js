import config from '../config.js';

export async function getData() {
  const rawResponse = await fetch(config.STATIONS_ENDPOINT);
  const data = await rawResponse.json();
  return data.stations;
}


export default {
  getData
};