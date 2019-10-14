import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';

const CardMemo = ({ 
  card,
  getClick, 
  shown, 
  second
}) => {

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