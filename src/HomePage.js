/** The main homepage for the app. Either a way to start your journey, or reset your progress
 *        Depending on whether or not you have already started
 */

import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { resetAll } from "./actions/reset";


function HomePage() {
  //Checks to see if the first movie has been loaded yet.
  const loaded = useSelector(st => st.films[1] !== undefined);
  const dispatch = useDispatch();

  function reset() {
    dispatch(resetAll());
  }
  
  return (
    <>
      {loaded ? (
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;
