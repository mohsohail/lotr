import { baseUrl, token } from '../constants/env';

import { FETCH_BOOKS, FETCH_BOOK } from '../constants/endpoints';
import { callAPI } from '../utils/api.utils';

export const processFetchBooks = async () => {
  const request = {
    url: `${baseUrl}${FETCH_BOOKS}`,
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

export const processFetchBook = async (payload) => {
  const request = {
    url: `${baseUrl}` + FETCH_BOOK(payload),
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
