import React from 'react'

const TextInput = (props) => {
  return (
    <div className="text-input">
      <input
        id="name-input"
        type="text"
        value={props.name}
        onChange={props.onNameChange} />
    </div>
  )
}

export default TextInput