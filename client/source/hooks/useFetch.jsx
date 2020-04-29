import { useState, useEffect } from 'react';

export const useFetch = (url, args) => {
  const [state, setState] = useState({ data: {}, loading: true });

  useEffect(() => {
    fetch(url, { ...args })
      .then((res) => res.json())
      .then((data) => setState({ state: data, loading: false }))
      .catch((e) => {
        throw e;
      });
  }, [url]);

  return state;
};
