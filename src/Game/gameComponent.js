import React from 'react'

import './gameComponent.css'

import Board from '../Board/boardComponent'

const Game = ({
    board,
    cards
}) => {
    return (
        <div>
            <div className="boardContainer">
                <Board board={board} />
            </div>
        </div>
    )
}

export default Game