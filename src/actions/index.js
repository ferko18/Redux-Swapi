// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const SWAPI_FETCHING = "SWAPI_FETCHING";
export const SWAPI_FETCHED = "SWAPI_FETCHED";
export const SWAPI_FETCH_ERROR = "SWAPI_FETCH_ERROR";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getCharacter = () => dispatch => {
  dispatch({ type: SWAPI_FETCHING });
  axios
    .get("https://swapi.co/api/people/")
    .then(({ data }) => {
        console.log('hi')
      dispatch({
        type: SWAPI_FETCHED,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: SWAPI_FETCH_ERROR,
        payload: err
      });
    });
};
