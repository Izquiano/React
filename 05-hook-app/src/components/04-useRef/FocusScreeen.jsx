import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreeen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    document.querySelector('input').select()
  }


  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input 
        ref={ inputRef }
        type="text"
        className="form-control"
        placeholder="Su nombre"
        name="name"
      />

      <button 
        className="btn btn-outline-primary mt-2"
        onClick={ handleClick }
      >
          Focus
      </button>


    </div>
  )
}
