import React, { createContext } from 'react';
import { useFetch } from '../../../hooks/useFetch';

import { BASEURL, TOKEN } from '../../../constants/env';
import { FETCH_MOVIES } from '../../../constants/endpoints';

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
  let url = BASEURL + FETCH_MOVIES;
  let params = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const { state, loading } = useFetch(url, params);

  return loading ? (
    <div>loading...</div>
  ) : (
    <MoviesContext.Provider value={state}>{props.children}</MoviesContext.Provider>
  );
};
