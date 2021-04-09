import axios from 'axios';
import { GameDetailsURL } from '../../../api';
import {
  GET_DETAIL,
  GET_DETAIL_ERROR,
  GET_DETAIL_PENDING,
  GET_DETAIL_SUCCESS,
} from './actionTypes';

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
  dispatch({
    type: GET_DETAIL_PENDING,
  });

  try {
    const gameDetails = await axios.get(GameDetailsURL(id));

    dispatch({
      type: GET_DETAIL_SUCCESS,
      payload: {
        game: { ...gameDetails.data, short_screenshots },
      },
    });
  } catch ({ message }) {
    dispatch({
      type: GET_DETAIL_ERROR,
      payload: {
        error: message,
      },
    });
  }
};
