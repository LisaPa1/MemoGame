import React from 'react';

import Grid from '@material-ui/core/Grid';

import CardMemoContainer from '../../containers/CardMemoContainer';

const CardsList = ({ array }) => {

  if (!array) {
    return null
  }
  
  return (
    <Grid container spacing={2}>
      {
        array.map((card, index) => {
          return (
            <Grid item xs={3} key={index}>
              <CardMemoContainer card={card} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default CardsList