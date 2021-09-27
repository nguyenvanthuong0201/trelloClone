import { Column } from 'components/Column/Column'
import React from 'react'
import './BoardContent.scss'

export const BoardContent = () => {
    return (
        <div className="board-content">
            <Column/>
            <Column/>
            <Column/>
            <Column/>
        </div>
    )
}
