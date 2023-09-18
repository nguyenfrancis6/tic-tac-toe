import React from 'react'
import './Modal.css'

type Props = {
  message: string;
}

function Modal({message}: Props) {
  return (
    <div className="modal" >
    <div className="modal-contents">
      <p>{message}</p>
      <button>Play again</button>
    </div>
  </div>
  )
}

export default Modal