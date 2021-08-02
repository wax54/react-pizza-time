/** All the actionCreators having todo with people */
import axios from "axios";
import { LOAD_PERSON } from "./types";

/** Get a person from the api
 * @param { Number } id the id of the person you want to get
 * @returns a Thunk that will dispatch the person data, when resolved
 */
function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

    // Get an array of just the ID numbers of all the films the person has been in
    //   as well as their homeworld ID
    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}


function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }