import React from 'react'

const SubmitBtn = (props) => {
  return (
    <button
    type="submit"
    className="next-button"
    onClick={()=> {props.onSubmit()}}>
    Skicka
    </button>
  )
}

export default SubmitBtn