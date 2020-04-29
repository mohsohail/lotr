import React, { createContext } from 'react';
export const CharactersContext = createContext();

import { BASEURL, TOKEN } from '../../../constants/env';
import { FETCH_CHARACTERS } from '../../../constants/endpoints';
import { useFetch } from '../../../hooks/useFetch';

export const CharactersProvider = (props) => {
  let url = BASEURL + FETCH_CHARACTERS;
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
    <CharactersContext.Provider value={state}>{props.children}</CharactersContext.Provider>
  );
};
