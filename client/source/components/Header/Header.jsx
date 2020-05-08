import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './Header.style';

const Header = (props) => {
  return (
    <Container>
      <nav className="nav-styles">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
