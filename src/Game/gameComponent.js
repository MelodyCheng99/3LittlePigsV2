import React from 'react'

import './gameComponent.css'

import Board from '../Board/boardComponent'

const Game = ({
    board,
    cards
}) => {
    return (
        <Board board={board} />
    )
}

export default Game