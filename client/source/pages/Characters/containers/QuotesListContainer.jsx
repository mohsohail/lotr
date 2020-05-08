import React, { useState, useContext } from 'react';

// import context
import { QuotesContext } from '../context/QuotesContext';

// import components
import List from '../../../components/List/List';
import Pagination from '../../../components/Pagination/index';

// import styled components
import { QuoteListContainer, QuoteListItem } from '../styles/CharacterPage.styles';

const Item = ({ data }) => {
  return <QuoteListItem highlight>{data.dialog}</QuoteListItem>;
};

const itemSeparator = () => {
  return <div style={{ height: 1, width: '100%', backgroundColor: '#ddd' }}></div>;
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
        <h2>Character Quotes</h2>
      </div>
      <QuoteListContainer>
        <List
          data={currentQuotesData}
          renderItem={(item) => <Item data={item} />}
          itemSeparator={itemSeparator}
        />
      </QuoteListContainer>
      <Pagination itemsPerPage={quotesPerPage} totalItems={quotesData.length} paginate={paginate} />
    </div>
  );
};

export default QuotesListContainer;
