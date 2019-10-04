import React from 'react';
import CardsList from './components/cards';
import model from './model';
import { createStore, StoreProvider } from 'easy-peasy';

import Container from '@material-ui/core/Container';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Container fixed>
        <h1>Memo game</h1>
        <CardsList />
      </Container>
    </StoreProvider>
  );
}

export default App;
