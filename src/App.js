import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createStore, StoreProvider } from 'easy-peasy';

import Container from '@material-ui/core/Container';

import CardsListContainer from './containers/CardsListContainer';
import model from './model';
import Level from './components/level';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Container maxWidth='sm'>
        <h1 className='title'>Memo game</h1>
        <Router>
          <Switch>
            <Route path="/game">
              <CardsListContainer />
            </Route>
            <Route exact path="/">
              <Level />
            </Route>
          </Switch>
        </Router>
      </Container>
    </StoreProvider>
  );
}

export default App;
