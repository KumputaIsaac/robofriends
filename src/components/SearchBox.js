import React from 'react'
import './searchBox.css'
export default function SearchBox({ SearchChange}) {
    return (
        <div>
            <input 
            type='search'
            onChange={SearchChange} 
            placeholder='Enter robots'
            />
        </div>
    )
}

