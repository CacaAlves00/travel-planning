import React from 'react'
import './ListItem.scss'

type ListItemProps = {
  title: string
  onDelete: (e: React.MouseEvent) => Promise<void>
}

function ListItem({ title, onDelete }: ListItemProps) {
  return (
    <div className='list-item'>
      <span>{title}</span>
      <img
        className='scale-on-hover'
        src='/delete.svg' alt='Delete icon'
        onClick={(e) => onDelete(e)}
      />
    </div>
  )
}

export default ListItem