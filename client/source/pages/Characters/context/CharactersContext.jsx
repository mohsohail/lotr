import React, { createContext } from 'react';
import { useFetch } from '../../../hooks/useFetch';

import { BASEURL, TOKEN } from '../../../constants/env';
import { FETCH_CHARACTERS } from '../../../constants/endpoints';

export const CharactersContext = createContext();

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
