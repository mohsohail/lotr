import { useState, useEffect } from 'react';

export const useSearch = (data, searchText) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredArr = data.filter(
      (item) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    );
    setFilteredData(filteredArr);
  }, [searchText]);

  return filteredData;
};
