/** All the actionCreators having todo with films */
import axios from 'axios';
import { LOAD_FILM } from "./types";

/** Get a film from the api
 * @param { Number } id the id of the film you want to get
 * @returns a Thunk that will dispatch the film data, when resolved
 */
function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;
    // Get an array of just the ID numbers of all the charaters in the film, 
    //    as well as all the planets that appear in the film
    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}


function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }