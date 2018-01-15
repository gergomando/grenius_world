import { combineReducers } from 'redux';
import game from './reducers/Game';
import hero from './reducers/Hero';

export default combineReducers({
  game,
  hero,
});