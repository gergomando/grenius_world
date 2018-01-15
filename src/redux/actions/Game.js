import * as GameActions from '../config/Game.js';

export const changePoint = (point) => (
  (dispatch) => {
    dispatch({
      type: GameActions.CHANGE_POINT,
      point,
    });
  }
);

export const animateHero = (animation) => (
  (dispatch) => {
    dispatch({
      type: GameActions.ANIMATE_HERO,
      animation,
    });
  }
);

export const changeBackground = (background) => (
  (dispatch) => {
    dispatch({
      type: GameActions.CHANGE_BACKGROUND,
      background,
    });
  }
);

export const updateGame = (game) => (
  (dispatch) => {
    dispatch({
      type: GameActions.UPDATE_GAME,
      game,
    });
  }
);

export const updateHero = (hero) => (
  (dispatch) => {
    dispatch({
      type: GameActions.UPDATE_HERO,
      hero,
    });
  }
);