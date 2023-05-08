import React, { useEffect, useState } from 'react'
import './SearchInputAutocomplete.scss'
import SearchInput from '../SearchInput/SearchInput'
import { updateTravel } from '../../api/travel'

type SearchInputAutocompleteProps = {
    value: string
    onChange: (value: string) => void
    onSelect: (value: string) => void
    placeholder: string
    autocomplete: (prefix: string) => Promise<string[]>
}

function SearchInputAutocomplete({ onChange, placeholder, value,
    autocomplete, onSelect }: SearchInputAutocompleteProps) {

    const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([])

    useEffect(() => {
        const searchHasAtLeast3Letters = value.length >= 3

        if (searchHasAtLeast3Letters) {
            autocomplete(value)
                .then(values => {
                    if (values.length > 0)
                        setAutocompleteOptions(values)
                })
                .catch(err => console.log(err))
        }
        else
            cleanAutocompleteOptions()

    }, [value])

    const cleanAutocompleteInput = () => onChange('')
    const cleanAutocompleteOptions = () => setAutocompleteOptions([])

    function handleAutocompleteOptionClick(option: string) {
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
                        key={option}
                        onClick={() => handleAutocompleteOptionClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchInputAutocomplete