import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Grid from '@material-ui/core/Grid';

import CardMemo from '../card';

const CardsList = () => {

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
    <Grid container spacing={2}>
      {
        cardsRandomArray.map((card, index) => {
          
          return (
            <Grid item xs={3} key={index}>
              <CardMemo card={card} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default CardsList