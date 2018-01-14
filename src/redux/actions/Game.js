import {
  CHANGE_POINT,
  ANIMATE_HERO,
} from '../config/Game.js';

export const changePoint = (point) => (
  (dispatch) => {
    dispatch({
      type: CHANGE_POINT,
      point,
    });
  }
);

export const animateHero = (animation) => (
  (dispatch) => {
    dispatch({
      type: ANIMATE_HERO,
      animation,
    });
  }
);