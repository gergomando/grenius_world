import { createReducer } from 'redux-create-reducer';
import * as GameActions from '../config/Game';

const initialState = {
  point: 0,
  animate: false,
  background: 'spaceBg',
  hero: { x: 0, y: 0 },
};

export const getCurrentPoint = state => state.game.point;
export const getCurrentAnimation = state => state.game.animate;
export const getBackground = state => state.game.background;
export const getHero = state => state.game.hero;

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
  [GameActions.CHANGE_BACKGROUND](state, action) {
    return { 
      ...state,
      background: 'spaceBg',
    };
  },
  [GameActions.UPDATE_GAME](state, action) {
    const game = action.game;
    game.point = state.point + game.point;
    return {
      ...state,
      ...game,
    };
  },
  [GameActions.UPDATE_HERO](state, action) {
    const hero = { ...state.hero, ...action.hero };
    return {
      ...state,
      hero,
    };
  },
});