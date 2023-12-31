import React from 'react'
import './Modal.css'

type Props = {
  message: string;
  onClick():void;
}

function Modal({message, onClick}: Props) {
  return (
    <div className="modal" >
    <div className="modal-contents">
      <p>{message}</p>
      <button onClick={onClick}>Play again</button>
    </div>
  </div>
  )
}

export default Modal