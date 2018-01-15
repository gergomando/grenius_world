import { createReducer } from 'redux-create-reducer';
import * as HeroActions from '../config/Hero';
import { Dimensions } from 'react-native';

const initialState = {
  x: 35,
  y: 50,
};

export const getX = state => state.hero.x;

export default createReducer(initialState, {
  [HeroActions.UPDATE_HERO](state, action) {
    const hero = { ...state.hero, ...action.hero };
    return {
      ...state,
      hero,
    };
  },

  [HeroActions.UPDATE_HERO_POSITION](state, action) {
    const screen = Dimensions.get('window');
    const newState = { ...state };
    let x = state.x + action.direction;
    x = (screen.width < (x + 50)) ? state.x : x;
    x = (x > 10) ? x : 10;
    newState.x = x;
    return newState;
  },
});