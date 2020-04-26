import HomePage from './source/pages/Home/HomePage';
import BooksPage from './source/pages/Books/BooksPage';
import CharacterPage from './source/pages/Characters/CharacterPage';

export default [
  { path: '/', exact: true, component: HomePage },
  { path: '/books', exact: true, component: BooksPage },
  { path: '/characters', exact: true, component: CharacterPage },
];
