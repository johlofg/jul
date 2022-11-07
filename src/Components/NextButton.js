import React from 'react'

const NextButton = (props) => {
  return (

    <button
      type="submit"
      className="next-button"
      onClick={()=> {props.onCounterIncrease()}}>
      Nästa
    </button>

  )
}

export default NextButton