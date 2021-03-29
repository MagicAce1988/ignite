import { combineReducers } from 'redux';
import detailReducer from './detailReducer';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailReducer,
});

export default rootReducer;
