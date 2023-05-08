import React, { useEffect, useState } from 'react'
import './SearchInputAutocomplete.scss'
import SearchInput from '../SearchInput/SearchInput'
import { updateTravel } from '../../api/travel'
import useIsTyping from '../../hooks/useIsTyping'

type SearchInputAutocompleteProps<T> = {
    value: string
    onChange: (value: string) => void
    onSelect: (value: T) => void
    placeholder: string
    autocomplete: (prefix: string) => Promise<T[]>
    getAutocompleteValue: (val: T) => string
}

function SearchInputAutocomplete<T>({ onChange, placeholder, value,
    autocomplete, onSelect, getAutocompleteValue }: SearchInputAutocompleteProps<T>) {

    const [autocompleteOptions, setAutocompleteOptions] = useState<T[]>([])
    const isTyping = useIsTyping(1000)

    useEffect(() => {
        const searchHasAtLeast3Letters = value.length >= 3

        if (searchHasAtLeast3Letters && !isTyping) {
            autocomplete(value)
                .then(values => {
                    if (values.length > 0)
                        setAutocompleteOptions(values)
                })
                .catch(err => console.log(err))
        }
        else
            cleanAutocompleteOptions()

    }, [value, isTyping])

    const cleanAutocompleteInput = () => onChange('')
    const cleanAutocompleteOptions = () => setAutocompleteOptions([])

    function handleAutocompleteOptionClick(option: T) {
        onSelect(option)
        cleanAutocompleteInput()
        cleanAutocompleteOptions()
    }

    return (
        <div className='search-input-autocomplete'>
            <SearchInput
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />

            <ul className='search-dropdown'>
                {autocompleteOptions.map((option) => (
                    <li
                        key={getAutocompleteValue(option)}
                        onClick={() => handleAutocompleteOptionClick(option)}
                    >
                        {getAutocompleteValue(option)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchInputAutocomplete