import React, { useState, useEffect } from 'react';
import CardMemo from '../card';
import { useStoreState, useStoreActions } from 'easy-peasy';

import Grid from '@material-ui/core/Grid';

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
        cardsRandomArray.map((card) => {
          return (
            <Grid item xs={3}>
              <CardMemo card={card} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default CardsList