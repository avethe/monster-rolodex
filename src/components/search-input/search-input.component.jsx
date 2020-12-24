import React from 'react';
import './search-input.style.css'

export const SearchInput = ({ placeholder, handle }) => (
    <input className="search-input" 
        type='search' 
        placeholder={placeholder}
        onChange={handle}
    />
)