import React from 'react'
import { Typography, Fab, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

import { connect } from 'react-redux'
import { createPlayer } from '../actions'

import './startGameComponent.css'

import Game from '../Game/gameComponent'

const useStyles = makeStyles(_ => ({
    greenFab: {
        width: 200,
        height: 50,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600]
        }
    }
}))

let StartGame = ({ 
    gameCode,
    username,
    createPlayer,
    board,
    cards,
    stats
}) => {
    const classes = useStyles()

    if (board != null && cards != null && username != null) {
        return (
            <Game 
                board={board} 
                cards={cards} 
                username={username} 
                stats={stats} />
        )
    } else {
        return (
            <div>
                <div className="gameCodeContainer">
                    <Typography>
                        Game Code: {gameCode}
                    </Typography>
                </div>
                <div className="usernameContainer">
                    <TextField 
                        required
                        variant="outlined" 
                        label="Username"
                        onChange={(event) => username = event.target.value} />
                </div>
                <div className="startGameContainer">
                    <Fab
                        variant="extended"
                        color="inherit"
                        className={classes.greenFab}
                        onClick={() => { 
                            if (username != null) {
                                createPlayer(gameCode, username) 
                            }
                        }}>
                        Start Game
                    </Fab>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.username,
    board: state.board,
    cards: state.cards,
    stats: state.stats,
})

const mapDispatchToProps = {
    createPlayer: createPlayer,
}

StartGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(StartGame)

export default StartGame