import React from 'react';
import { useDispatch } from 'react-redux'
import FlipCountdown from '@rumess/react-flip-countdown';
import survey from '../reducers/survey';


const Counter = () => {    

  const dispatch = useDispatch()   

  return (   
      <FlipCountdown
        hideYear 
        hideMonth     
        endAt={'2022-12-09 17:00:00'}
        onTimeUp={() => dispatch(survey.actions.setTimesUp(true))}
      />    
  )
}

export default Counter