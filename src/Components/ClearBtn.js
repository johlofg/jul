import React from 'react'

const ClearBtn = () => {
  return (

    <button
      type='submit'
      className='next-button'
      onClick={() => { localStorage.clear() }}
      >
      clear localStorage
    </button>

  )
}

export default ClearBtn