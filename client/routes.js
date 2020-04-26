import HomePage from './source/pages/Home/HomePage';
import BooksPage from './source/pages/Books/BooksPage';

export default [
  { path: '/', exact: true, component: HomePage },
  { path: '/books', exact: true, component: BooksPage },
];
