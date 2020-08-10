import React from 'react'

import './gameComponent.css'

import Board from '../Board/boardComponent'
import Cards from '../Cards/cardsComponent'

const Game = ({
    board,
    cards,
    username
}) => {
    return (
        <div>
            <Cards cards={cards} />
            <div className="boardContainer">
                <Board board={board} username={username} />
            </div>
        </div>
    )
}

export default Game