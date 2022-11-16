import React from 'react';
import { useSelector } from 'react-redux'

import Form from './Form'
import Counter from './Counter'
import Firework from './Firework';
import ClearBtn from './ClearBtn'

const Main = () => {

  const timesup = useSelector(store => store.survey.timesUp)  
  
  return (
    <>
    { timesup === true && ( 
          <Firework />
        )}
        <div className="main">  
          <ClearBtn />
          <Counter />
          <Form />
        </div>
      </>
  )
}

export default Main