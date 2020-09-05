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
                        <div className="opponentContainer">
                            <div className="opponentBoardOrStatsContainer">
                                <Board board={opponents[0].board} username={opponents[0].username} />
                            </div>
                            <div className="opponentBoardOrStatsContainer">
                                <Stats stats={opponents[0].stats} />
                            </div>
                        </div> : 
                    null
                }
                {
                    opponents.length > 1 ?
                        <div className="opponentContainer">
                            <div className="opponentBoardOrStatsContainer">
                                <Stats stats={opponents[1].stats} />
                            </div>
                            <div className="opponentBoardOrStatsContainer">
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