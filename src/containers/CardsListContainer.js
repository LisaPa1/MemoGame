import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import CardsList from '../components/cards';

const CardsListContainer = () => {

  const random = useStoreActions(actions => actions.random);
  const cardsRandomArray = useStoreState(state => state.cardsRandomArray);

  useEffect(() => {
    if (!cardsRandomArray[0]) {
      random()
    }
  })

  if (!cardsRandomArray) {
    return null
  }
  
  return (
    <CardsList array={cardsRandomArray}/>
  )
}

export default CardsListContainer