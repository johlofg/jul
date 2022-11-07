import React from 'react'

const SubmitButton = (props) => {
  return (
    <button
      type="submit"
      className="submit-button"
      onClick={() => { props.onCounterIncrease() }}>
      Klar
    </button>

  )
}

export default SubmitButton