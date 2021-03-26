import { FETCH_GAMES } from '../actions/gamesActions/actionTypes';

const initialState = {
  popular: [],
  new: [],
  upcoming: [],
};

const gamesReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case FETCH_GAMES:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default gamesReducer;
