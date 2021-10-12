import React from 'react'
import './Card.scss'

export const Card = (props) => {
    const {card} = props
    return (
        <>
            <li className="card-item">
            {card.cover && <img src={card.cover} className="card-cover" alt="Avatar" /> }
            {card.title}
            </li>
            <li className="card-item">Almost before we knew it,Thuong</li>
            <li className="card-item">Almost before we knew it,Thuong</li>
        </>
    )
}
