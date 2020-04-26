import {
  FETCH_CHARACTERS_INIT,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  FETCH_CHARACTER_INIT,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE,
} from '../constants/actions';

const initialState = {
  charactersData: {
    status: 0,
    message: '',
    data: {},
  },
  characterData: {
    status: 0,
    message: '',
    data: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_INIT:
      return {
        ...state,
        charactersData: {
          status: 1,
          message: 'init',
          data: {},
        },
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        charactersData: {
          status: 2,
          message: 'success',
          data: action.payload,
        },
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        charactersData: {
          status: 3,
          message: 'failure',
          data: action.payload,
        },
      };

    case FETCH_CHARACTER_INIT:
      return {
        ...state,
        characterData: {
          status: 1,
          message: 'init',
          data: {},
        },
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        characterData: {
          status: 2,
          message: 'success',
          data: action.payload,
        },
      };
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        characterData: {
          status: 3,
          message: 'failure',
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
