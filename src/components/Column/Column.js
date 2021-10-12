import { Card } from 'components/Card/Card'
import React from 'react'
import { mapOther } from 'untilies/sorts'

import './Column.scss'

export const Column = (props) => {
    const { column } = props
    const cards  = mapOther(column.cards,column.CardOther,'id')
    return (
        <div className="column">
        <header>{column.title}</header>
        <ul className="card-list">
            {cards.map((card,index)=> <Card key={index} card={card}/>)}
        </ul>
        <footer>Add another card</footer>
      </div>
    )
}
