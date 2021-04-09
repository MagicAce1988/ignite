import {
  GET_DETAIL_PENDING,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_ERROR,
} from '../actions/detailActions/actionTypes';

const initialState = {
  game: {},
  isLoading: false,
  error: '',
};

const detailReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_DETAIL_PENDING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: '',
      };
    case GET_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default detailReducer;
