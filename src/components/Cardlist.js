import React from 'react'
import Card from './Card'

export default function Cardlist({robots}) {
    return (
        <div>
           {robots.map((user,i)=><Card key={i} robots={robots[i]}/>)}
        </div>
    )
}
