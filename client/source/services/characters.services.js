import { BASEURL, TOKEN } from '../constants/env';

import { FETCH_CHARACTERS, FETCH_CHARACTER } from '../constants/endpoints';
import { callAPI } from '../utils/api.utils';

export const processFetchCharacters = async () => {
  const request = {
    url: `${BASEURL}${FETCH_CHARACTERS}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const response = await callAPI(request);
  return response;
};

export const processFetchCharacter = async (payload) => {
  const request = {
    url: `${BASEURL}` + FETCH_CHARACTER(payload),
    method: 'get',
    headers: {},
  };
  const response = await callAPI(request);
  return response;
};
