import React from 'react'
import { useSelector } from 'react-redux'

// import survey from '../reducers/survey'

const Summary = () => {

const first = useSelector(store => store.survey.fraga1)
const second = useSelector(store => store.survey.fraga2)
const third = useSelector(store => store.survey.fraga3)
const forth = useSelector(store => store.survey.fraga4)


  return (
    <div className="summary">
      <h3>Tack!</h3>
      <p>Första frågan: </p> 
      <p>{first}</p>
      <p>Andra frågan: </p> 
      <p>{second}</p>
      <p>Tredje frågan: </p> 
      <p>{third}</p>
      <p>Fjärde frågan: </p> 
      <p>{forth}</p>
    </div>
  )
}

export default Summary