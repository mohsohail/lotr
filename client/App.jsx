import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './source/pages/Home/HomePage';

const BooksPageComponent = React.lazy(() => import('./source/pages/Books/BooksPage'));
const CharacterPageComponent = React.lazy(() => import('./source/pages/Characters/CharacterPage'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // {renderRoutes(Routes)}
    return (
      <div>
        <Suspense fallback={<div>...loading</div>}>
          <Router>
            <Switch>
              <Route path="/" exact={true} component={HomePage}></Route>
              <Route path="/books" exact={true} component={BooksPageComponent}></Route>
              <Route path="/characters" exact={true} component={CharacterPageComponent}></Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
  }
}

export default App;
