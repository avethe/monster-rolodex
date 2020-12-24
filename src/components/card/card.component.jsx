import React from 'react'
import './card.style.css'

export const Card = function(props) {
    return(
        <div className='card'>
            <h1>{props.trash.name}</h1>
            <img src={`https://robohash.org/${props.trash.id}?set=set2&size=180x180`}/>
        </div>
    )
}