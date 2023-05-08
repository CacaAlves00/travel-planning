import React from 'react'
import './ListItem.scss'

type ListItemProps = {
  title: string
  onDelete: (e: React.MouseEvent) => Promise<void>
  onUpwards: () => Promise<void> | void
  onDownwards: () => Promise<void> | void
}

function ListItem({ title, onDelete, onDownwards, onUpwards }: ListItemProps) {
  return (
    <div className='list-item'>
      <span>{title}</span>

      <div className='buttons'>
        <img
          className='scale-on-hover'
          src='/arrow_upward.svg' alt='Arrow up icon'
          onClick={(e) => {e.preventDefault(); onUpwards()}}
        />
        <img
          className='scale-on-hover'
          src='/arrow_downward.svg' alt='Arrow down icon'
          onClick={(e) => {e.preventDefault(); onDownwards()}}
        />
        <img
          className='scale-on-hover'
          src='/delete.svg' alt='Delete icon'
          onClick={(e) => {e.preventDefault(); onDelete(e)}}
        />
      </div>
    </div>
  )
}

export default ListItem