import { baseUrl, token } from '../constants/env';

import { FETCH_CHARACTERS, FETCH_CHARACTER } from '../constants/endpoints';
import { callAPI } from '../utils/api.utils';

export const processFetchCharacters = async () => {
  const request = {
    url: `${baseUrl}${FETCH_CHARACTERS}`,
    method: 'get',
    headers: {
      token,
    },
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response;
  } else {
    return { err: true };
  }
};

export const processFetchCharacter = async (payload) => {
  const request = {
    url: `${baseUrl}` + FETCH_CHARACTER(payload),
    method: 'get',
    headers: {},
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response;
  } else {
    return { err: true };
  }
};
