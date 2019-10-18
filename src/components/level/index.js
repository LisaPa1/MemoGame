import React from 'react';
import { Link } from "react-router-dom";

import { useStoreActions, useStoreState } from 'easy-peasy';

const Level = () => {

  const random = useStoreActions(actions => actions.random);

  return (
    <div>
      Choose your level
        <Link to="/game" onClick={() => { random(4) }}>
          Easy
        </Link>
        <Link to="/game" onClick={() => { random(6) }}>
          Middle
        </Link>
        <Link to="/game" onClick={() => { random(8) }}>
          Hard
        </Link>
    </div>
  )
}
export default Level