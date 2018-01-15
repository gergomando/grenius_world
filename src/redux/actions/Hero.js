import * as HeroActions from '../config/Hero.js';

export const updateHero = (hero) => (
  (dispatch) => {
    dispatch({
      type: HeroActions.UPDATE_HERO,
      hero,
    });
  }
);

export const updateHeroPosition = (direction) => (
  (dispatch) => {
    dispatch({
      type: HeroActions.UPDATE_HERO_POSITION,
      direction,
    });
  }
);