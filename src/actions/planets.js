/** All the actionCreators having todo with planets */
import axios from "axios";
import { LOAD_PLANET } from "./types";


/** Get a planet from the api
 * @param { Number } id the id of the planet you want to get
 * @returns a Thunk that will dispatch the planet data, when resolved
 */
function getPlanetFromAPI(id) {
  return async function (dispatch) {
    //Get the data from the API
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;
    // Get an array of just the ID numbers of all the residents of the planet, as well as films it was in
    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);
    // create a planet object with the converted array
    const planet = { id, name, population, climate, residents, films };
    //load the planet into the State
    dispatch(gotPlanet(planet));
  };
}


function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }