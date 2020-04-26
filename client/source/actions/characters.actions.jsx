import {
  FETCH_CHARACTERS_INIT,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTER_INIT,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from '../constants/actions';

import { processFetchCharacters, processFetchCharacter } from '../services/characters.services';

export const fetchCharacters = () => async (dispatch) => {
  dispatch({
    type: FETCH_CHARACTERS_INIT,
  });
  const response = await processFetchCharacters();
  if (!response.err) {
    dispatch({
      type: FETCH_CHARACTERS_SUCCESS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: FETCH_CHARACTERS_FAILURE,
      payload: response.data,
    });
  }
};

export const fetchCharacters = (payload) => async (dispatch) => {
  dispatch({
    type: FETCH_CHARACTER_INIT,
  });
  const response = await processFetchCharacter(payload);
  if (!response.err) {
    dispatch({
      type: FETCH_CHARACTER_SUCCESS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: FETCH_CHARACTER_FAILURE,
    });
  }
};
