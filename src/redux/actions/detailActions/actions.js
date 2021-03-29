import axios from 'axios';
import { GameDetailsURL } from '../../../api';
import { GET_DETAIL } from './actionTypes';

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
  const gameDetails = await axios.get(GameDetailsURL(id));

  dispatch({
    type: GET_DETAIL,
    payload: {
      game: { ...gameDetails.data, short_screenshots },
    },
  });
};
