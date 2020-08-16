import React from 'react'

import './gameComponent.css'

import Board from '../Board/boardComponent'
import Cards from '../Cards/cardsComponent'
import Stats from '../Stats/statsComponent'

const Game = ({
    board,
    cards,
    stats,
    username
}) => {
    return (
        <div>
            <Cards cards={cards} />
            <div className="boardContainer">
                <Board board={board} username={username} />
            </div>
            <div className="statsContainer">
                <Stats stats={stats} />
            </div>
        </div>
    )
}

export default Game