import React from 'react'
import './SearchInput.scss'

type SearchInputProps = {
    value: string
    onChange: (value: string) => void
    placeholder: string
  }

function SearchInput({onChange, value, placeholder}: SearchInputProps) {
  return (
      <input 
      className='search-input'
        type='text' 
        placeholder={placeholder} 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      />
  )
}

export default SearchInput