import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="nav-styles">
      <ul>
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
