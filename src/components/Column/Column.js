import { Task } from 'components/Task/Task'
import React from 'react'

import './Column.scss'

export const Column = () => {
    return (
        <div className="column">
        <header>brain store</header>
        <ul className="task-list">
            <Task/>
        </ul>
        <footer>Add another card</footer>
      </div>
    )
}
