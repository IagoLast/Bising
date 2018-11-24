const SERVER_URL = 'https://wt-4c17b3c888c61e0fdd8b150c4789e9c0-0.sandbox.auth0-extend.com/bicing';

export async function getData() {
  const rawResponse = await fetch(SERVER_URL);
  const data = await rawResponse.json();
  return data.stations;
}


export default {
  getData
};