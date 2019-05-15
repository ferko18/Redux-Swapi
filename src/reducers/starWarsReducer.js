import { SWAPI_FETCHING, SWAPI_FETCHED, SWAPI_FETCH_ERROR } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case SWAPI_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case SWAPI_FETCHED:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ""
      };

      case SWAPI_FETCH_ERROR:
      return{
        ...state, error: action.payload
      }
    default:
      return state;
  }
};
