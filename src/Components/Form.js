import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'

import survey from '../reducers/survey'

import Summary from './Summary'
import TextWrapper from './TextWrapper'
import NextButton from './NextButton'
import SubmitBtn from './SubmitBtn'

const Form = () => {   
  const [newCounter, setNewCounter] = useState(0)
  const [newFraga1, setNewFraga1] = useState('')
  const [newFraga2, setNewFraga2] = useState('')
  const [newFraga3, setNewFraga3] = useState('')
  const [newFraga4, setNewFraga4] = useState('')
  const dispatch = useDispatch()

  const klar = useSelector(store => store.survey.klar)
  console.log(klar)
  

  useEffect(() => {
  },[])

  const onCounterIncrease = () => {
    setNewCounter(newCounter + 1)
  }

  const onSubmit = () => {  
    batch(() => {
      dispatch(survey.actions.setFraga1(newFraga1))
      dispatch(survey.actions.setFraga2(newFraga2))
      dispatch(survey.actions.setFraga3(newFraga3))
      dispatch(survey.actions.setFraga4(newFraga4))
      dispatch(survey.actions.setKlar(newFraga1))
      setNewCounter(newCounter + 1)
    })      
  }

  const on1Change = (event) => {
    setNewFraga1(event.target.value)    
  }
  const on2Change = (event) => {
    setNewFraga2(event.target.value)        
  }
  const on3Change = (event) => {
    setNewFraga3(event.target.value)        
  }
  const on4Change = (event) => {
    setNewFraga4(event.target.value)        
  }


  return (
    <div className="wrapper">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-wrapper">                     
          <div className="questions-wrapper">            
            {newCounter === 0 && (
              <div>
                <TextWrapper />
                <NextButton onCounterIncrease={onCounterIncrease} />
              </div>
            )}
            {newCounter === 1 && (
              <div> 
                <p>Vem är: </p>
                  <input 
                    type="text"
                    className="text-input"
                    value={newFraga1}
                    onChange={on1Change} />
                <NextButton onCounterIncrease={onCounterIncrease} /> 
              </div>
            )}
            {newCounter === 2 && (
              <div> 
                <p>Vem är: </p>
                  <input 
                    type="text"
                    className="text-input"
                    value={newFraga2}
                    onChange={on2Change} />
                <NextButton onCounterIncrease={onCounterIncrease} /> 
              </div>
            )}
            {newCounter === 3 && (
              <div>   
                <p>Vem är: </p>
                  <input 
                    type="text"
                    className="text-input"
                    value={newFraga3}
                    onChange={on3Change} />
                <NextButton onCounterIncrease={onCounterIncrease} /> 
              </div>
            )}
            {newCounter === 4 && (
              <div>
                <p>Vem är: </p>
                  <input 
                    type="text"
                    className="text-input"
                    value={newFraga4}
                    onChange={on4Change} />
                <SubmitBtn onSubmit ={onSubmit} /> 
              </div>
            )}
            {newCounter === 5 && (
              <div>
                <Summary />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form