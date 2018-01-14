import {
  CHANGE_POINT,
  ANIMATE_HERO,
  CHANGE_BACKGROUND,
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

export const changeBackground = (background) => (
  (dispatch) => {
    dispatch({
      type: CHANGE_BACKGROUND,
      background,
    });
  }
);