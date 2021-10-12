import { Column } from 'components/Column/Column'
import React, { useEffect, useState } from 'react'
import './BoardContent.scss'
import { isEmpty } from 'lodash'


import { initialData } from 'actions/initialData'
import { mapOther } from 'untilies/sorts'

export const BoardContent = () => {
    const [board, setBoard] = useState({})
    const [columns, setColumns] = useState({})

    useEffect(() => {
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
        if (boardFromDB) {
            setBoard(boardFromDB)

            //sort column

            // boardFromDB.columns.sort(function(a,b){
            //     return  boardFromDB.columnOrder.indexOf(a.id) - boardFromDB.columnOrder.indexOf(b.id)
            // })
            setColumns(mapOther(boardFromDB.columns,boardFromDB.columnOrder,'id'))
        }
    }, [])
    if (isEmpty(board)) {
        return <div className='not-found'>Board not found</div>
    }

    return (
        <div className="board-content">
            {columns.map((column, index) =>
                <Column key={index} column={column}/>
            )}
        </div>
    )
}
