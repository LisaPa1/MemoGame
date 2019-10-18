import React, { useEffect, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import CardsList from '../components/cards';
import EndDialog from "../components/EndDialogContainer";

const CardsListContainer = () => {

  const random = useStoreActions(actions => actions.random);
  const cardsRandomArray = useStoreState(state => state.cardsRandomArray);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!cardsRandomArray[0]) {
      random()
    } else {
    const findFalse = cardsRandomArray.find(item => item.completed === false)
    if (!findFalse) {
      setOpen(true)
    }
  }
  },[cardsRandomArray, random] )

  if (!cardsRandomArray) {
    return null
  }

console.log(cardsRandomArray)


  return (
    <>
      <CardsList array={cardsRandomArray}/>
      <EndDialog open={open} />
    </>
  )
}

export default CardsListContainer