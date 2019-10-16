import React from 'react';
import CardsListContainer from './containers/CardsListContainer';
import model from './model';
import { createStore, StoreProvider } from 'easy-peasy';

import Container from '@material-ui/core/Container';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Container maxWidth='sm'>
        <h1 className='title'>Memo game</h1>
        <CardsListContainer />
      </Container>
    </StoreProvider>
  );
}

export default App;
