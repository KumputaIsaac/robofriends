import React from 'react'
import './card.css'

export default function Card({robots}) {
    


    return (
        <div className='fool'>
            <img src={`https://robohash.org/${robots.id}?size=200x200`} alt=''/>
            <h2>{robots.name}</h2>
            <p>{robots.email}</p>
            <h3>{robots.username}</h3>
            
        </div>
    )
}
