import { GET_DETAIL } from '../actions/detailActions/actionTypes';

const initialState = {
  game: {},
};

const detailReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_DETAIL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
