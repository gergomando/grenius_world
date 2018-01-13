import {
  CHANGE_POINT,
  ANIMATE_PUPIL,
} from '../config/Game.js';

export const changePoint = (point) => (
  (dispatch) => {
    dispatch({
      type: CHANGE_POINT,
      point,
    });
  }
);

export const animatePupil = (animation) => (
  (dispatch) => {
    dispatch({
      type: ANIMATE_PUPIL,
      animation,
    });
  }
);