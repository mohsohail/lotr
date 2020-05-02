import React, { createContext } from 'react';
import { useFetch } from '../../../hooks/useFetch';

import { BASEURL, TOKEN } from '../../../constants/env';
import { FETCH_QUOTES } from '../../../constants/endpoints';

export const QuotesContext = createContext();

export const QuotesProvider = (props) => {
  let url = BASEURL + FETCH_QUOTES;
  let params = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  const { state, loading } = useFetch(url, params);

  return (
    <div>
      {loading ? (
        <div>loading quotes...</div>
      ) : (
        <QuotesContext.Provider value={state}>{props.children}</QuotesContext.Provider>
      )}
    </div>
  );
};
