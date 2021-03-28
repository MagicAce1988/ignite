import axios from 'axios';
import { FETCH_GAMES } from './actionTypes';
import { newGamesURL, popularGamesURL, upcomingGamesURL } from '../../../api';

export const fetchGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL);
  const newGamesData = await axios.get(newGamesURL);
  const upcomingGamesData = await axios.get(upcomingGamesURL);
  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};
