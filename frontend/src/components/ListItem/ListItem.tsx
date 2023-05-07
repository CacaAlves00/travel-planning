import React from 'react'
import './ListItem.scss'

type ListItemProps = {
  title: string
  onDelete: (item: string) => Promise<void>
}

function ListItem({ title, onDelete }: ListItemProps) {
  return (
    <div className='list-item'>
      <span>{title}</span>
      <img src='/delete.svg' alt='Delete icon'></img>
    </div>
  )
}

export default ListItem