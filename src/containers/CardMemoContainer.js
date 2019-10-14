import React, { useEffect, useState } from 'react';

import { useStoreActions, useStoreState } from 'easy-peasy';

import CardMemo from '../components/card';

const CardMemoContainer = ({ card }) => {

  const first = useStoreState(state => state.selected[0].value)
  const second = useStoreState(state => state.selected[1].value)

  useEffect(() => {
    if (second === first && second !== null) {
      complete(second)
    }
    if (second !== null && first !== null && second !== first) {
      setTimeout(() => {
        reset()
        setShown(false)
      }, 3000);
    }
  })

  const [shown, setShown] = useState(false);
  const toggle = useStoreActions(actions => actions.toggle);
  const reset = useStoreActions(actions => actions.reset);
  const complete = useStoreActions(actions => actions.complete);

  const getClick = (value) => {
    setShown(true);
    toggle(value)
  };

  const cardProps = { card, getClick, shown, first, second }

  return (
    <CardMemo {...cardProps} />
  )
}

export default CardMemoContainer