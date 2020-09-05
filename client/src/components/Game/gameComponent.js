import React from 'react'

import './gameComponent.css'

import Board from '../Board/boardComponent'
import Cards from '../Cards/cardsComponent'
import Stats from '../Stats/statsComponent'

const Game = ({
    board,
    cards,
    stats,
    username,
    opponents
}) => {
    return (
        <div className="gameScreenContainer">
            <div className="opponentsContainer">
                { 
                    opponents.length > 0 ? 
                        <div className="opponentsOneContainer">
                            <div className="opponentBoardContainer">
                                <Board board={opponents[0].board} username={opponents[0].username} />
                            </div>
                            <div className="opponentStatsContainer">
                                <Stats stats={opponents[0].stats} />
                            </div>
                        </div> : 
                    null
                }
                {
                    opponents.length > 1 ?
                        <div className="opponentsTwoContainer">
                            <div className="opponentStatsContainer">
                                <Stats stats={opponents[1].stats} />
                            </div>
                            <div className="opponentBoardContainer">
                                <Board board={opponents[1].board} username={opponents[1].username} />
                            </div>
                        </div> :
                    null
                }
            </div>
            <Cards cards={cards} />
            <div className="personalContainer">
                <div className="personalBoardContainer">
                    <Board board={board} username={username} />
                </div>
                <div className="personalStatsContainer">
                    <Stats stats={stats} />
                </div>
            </div>
        </div>
    )
}

export default Game