import { createReducer } from 'redux-create-reducer';
import * as GameActions from '../config/Game';

const initialState = {
  point: 0,
  animate: false,
};

export const getCurrentPoint = state => state.game.point;
export const getCurrentAnimation = state => state.game.animate;

export default createReducer(initialState, {
  [GameActions.CHANGE_POINT](state,action) {
    const point = state.point + action.point;
    return { 
      ...state,
      point,
    };
  },
  [GameActions.ANIMATE_HERO](state, action) {
    return { 
      ...state,
      animate: action.animation,
    };
  },
});