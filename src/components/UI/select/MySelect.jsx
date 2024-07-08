import React from 'react'

export default function MySelect({ options, defaultValue, onChange }) {
    return (
        <select onChange={onChange}>
            <option disabled >{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}
