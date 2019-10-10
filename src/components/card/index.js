import React, { useEffect, useState } from 'react';

import { useStoreActions, useStoreState } from 'easy-peasy';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

const CardMemo = ({ card }) => {

  const first = useStoreState(state => state.selected[0].value)
  const second = useStoreState(state => state.selected[1].value)

  useEffect(() => {
    if (second === first && second !== null) {
      complete(second)
    }
    if (second !== null && first !== null && second !== first) {
      setTimeout(() => {
        { reset() }
        { setShown(false) }
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

  return (
    <>
      {
        card.completed ? <Card><CardContent>Found</CardContent></Card> :
          <Card onClick={() => {
            second === null && getClick(card.value)
          }
          }
          >
            {
              shown ?
                <CardContent>
                  <Icon className={card.image} />
                </CardContent>
                :
                <CardContent />
            }
          </Card>
      }
    </>
  )
}

export default CardMemo