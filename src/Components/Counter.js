import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const Counter = () => {  
  return (
    <FlipCountdown
      hideYear      
      endAt={'2022-12-09 17:00:00'} />
  )
}

export default Counter