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
        card.completed ? <Card />:
          <Card classes={{ root: 'card' }} onClick={() => {
            second === null && getClick(card.value)
          }
          }
          >
            {
              shown ?
                <CardContent classes={{ root: 'cardContent' }}>
                  <Icon className={card.image} fontSize="large" classes={{ root: 'icon' }} />
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