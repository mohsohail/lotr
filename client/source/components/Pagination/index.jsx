import React from 'react';

import './Paginate.scss';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="nav-styles">
      <ul className="pagination-ul">
        {pageNumber.map((number) => (
          <li onClick={() => paginate(number)} key={number}>
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
