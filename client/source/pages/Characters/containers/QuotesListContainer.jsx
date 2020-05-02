import React, { useState, useContext } from 'react';
import { QuotesContext } from '../context/QuotesContext';

import List from '../../../components/List/List';
import Pagination from '../../../components/Pagination/index';

const Item = ({ data }) => {
  return <div>{data.dialog}</div>;
};

const QuotesListContainer = () => {
  const value = useContext(QuotesContext);
  const { docs } = value;

  const [quotesData] = useState(docs);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(100);

  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotesData = quotesData.slice(indexOfFirstQuote, indexOfLastQuote);

  const paginate = (number) => setCurrentPage(number);

  return (
    <div>
      <div>
        <h2>Guess the character who said it</h2>
      </div>
      <List data={currentQuotesData} renderItem={(item) => <Item data={item} />} />
      <Pagination itemsPerPage={quotesPerPage} totalItems={quotesData.length} paginate={paginate} />
    </div>
  );
};

export default QuotesListContainer;
