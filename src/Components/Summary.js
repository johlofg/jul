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
      <p>Hi!</p>
      <h3>Tack!</h3>
      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>
      <p>{forth}</p>

    </div>
  )
}

export default Summary