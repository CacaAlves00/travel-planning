import React from 'react'
import './AddButton.scss'

type AddButtonProps = {
  onClick: () => void
}

function AddButton({ onClick }: AddButtonProps) {
  return (
    <div
      className='add-button scale-on-hover'
      onClick={onClick}
    >
      +
    </div>
  )
}

export default AddButton