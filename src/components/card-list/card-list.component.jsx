import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = function(props) {
    return(
        <div className='card-list'>
            {props.monsters.map(trash => (
                
                <Card key={trash.id} trash={trash}/>
                
            ))}
        </div>
    )
 }