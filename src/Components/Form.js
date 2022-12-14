import React, { useState, useRef } from 'react'
import {  useSelector, batch } from 'react-redux'
import emailjs from '@emailjs/browser'

// import survey from '../reducers/survey'

// import './ContactUs.css'

import Summary from './Summary'
import TextWrapper from './TextWrapper'
import NextButton from './NextButton'
import SubmitBtn from './SubmitBtn'

const Form = () => {   
  const [newCounter, setNewCounter] = useState(0)
  // const [newFraga1, setNewFraga1] = useState('')
  // const [newFraga2, setNewFraga2] = useState('')
  // const [newFraga3, setNewFraga3] = useState('')
  // const [newFraga4, setNewFraga4] = useState('')

  const klarLocal = useSelector(store => store.survey.klar)
  const form = useRef()
 
  
  const sendMail = (event) => {
    event.preventDefault()
    emailjs.sendForm('service_jul', 'template_uyiwkza', form.current, 'N5Vqilu3vX4xFGNR-' )
    .then((result) => {
      console.log(result.text)
  }, 
    (error) => {
      console.log(error.text)
  })
  
  }

    
  // const dispatch = useDispatch() 
    
  const onCounterIncrease = () => {
    setNewCounter(newCounter + 1)
  }

  const onSubmit = () => { 
    batch(() => {
      
      // dispatch(survey.actions.setFraga1(newFraga1))
      // dispatch(survey.actions.setFraga2(newFraga2))
      // dispatch(survey.actions.setFraga3(newFraga3))
      // dispatch(survey.actions.setFraga4(newFraga4))

      const localSurvey = localStorage.getItem('survey')
      const newSurvey = {
        ...JSON.parse(localSurvey),
        klar: true    
      }
      setNewCounter(newCounter + 1)
      localStorage.setItem('survey', JSON.stringify(newSurvey))
    })
  }    

  // const on1Change = (event) => {
  //   setNewFraga1(event.target.value)    
  // }
  // const on2Change = (event) => {
  //   setNewFraga2(event.target.value)        
  // }
  // const on3Change = (event) => {
  //   setNewFraga3(event.target.value)        
  // }
  // const on4Change = (event) => {
  //   setNewFraga4(event.target.value)        
  // }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={sendMail} ref={form}>
        <div className="form-wrapper">                     
          <div className="questions-wrapper">
            {klarLocal === false && (              
              <>
              {newCounter === 0 && (
                <div>
                  <TextWrapper />
                  <NextButton onCounterIncrease={onCounterIncrease} />
                </div>
              )}
              {newCounter === 1 && (
                <div> 
                  <p>Vem ??r: </p>
                    <input
                      autoFocus                       
                      tabIndex={1}
                      type="text"
                      className="text-input"
                      // value={newFraga1}
                      // onChange={on1Change}
                      name='1'/>
                  <NextButton onCounterIncrease={onCounterIncrease} /> 
                </div>
              )}
              {newCounter === 2 && (
                <div> 
                  <p>Vem ??r: </p>
                    <input
                      autoFocus
                      tabIndex={1}                    
                      type="text"
                      className="text-input"
                      // value={newFraga2}
                      // onChange={on2Change}
                      name='2' />
                  <NextButton onCounterIncrease={onCounterIncrease} /> 
                </div>
              )}
              {newCounter === 3 && (
                <div>   
                  <p>Vem ??r: </p>
                    <input
                      autoFocus
                      tabIndex={1}
                      type="text"
                      className="text-input"
                      // value={newFraga3}
                      // onChange={on3Change}
                      name='3' />
                  <NextButton onCounterIncrease={onCounterIncrease} /> 
                </div>
              )}
              {newCounter === 4 && (
                <div>
                  <p>Vem ??r: </p>
                    <input
                      autoFocus
                      tabIndex={1}
                      type="text"
                      className="text-input"
                      // value={newFraga4}
                      // onChange={on4Change}
                      name='4' />
                  <SubmitBtn onSubmit ={onSubmit} /> 
                  <input type='submit' value="Skicka!" />
                </div>
              )}
              {newCounter === 5 && (
                <div>
                  <Summary />
                </div>
              )}

            </>
            )}
            
          </div>
        </div>
        </form>
        </div>
        )
}

export default Form