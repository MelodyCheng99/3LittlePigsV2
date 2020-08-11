import React from 'react'
import { TextField, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

import { connect } from 'react-redux'
import { createPlayer } from '../actions'

import './joinGameComponent.css'

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

let JoinGame = ({
    gameCode,
    username,
    createPlayer,
    board,
    cards
}) => {
    const classes = useStyles()

    if (board != null && cards != null && username != null) {
        return (
            <Game board={board} cards={cards} username={username} />
        )
    } else {
        return (
            <div>
                <div className="gameCodeContainer">
                    <TextField
                        required
                        variant="outlined"
                        label="Game code"
                        onChange={(event) => gameCode = event.target.value} />
                </div>
                <div className="usernameContainer">
                    <TextField
                        required
                        variant="outlined"
                        label="Username"
                        onChange={(event) => username = event.target.value} />
                </div>
                <div className="joinGameContainer">
                        <Fab
                            variant="extended"
                            color="inherit"
                            className={classes.greenFab}
                            onClick={() => { 
                                if (username != null && gameCode != null) {
                                    createPlayer(gameCode, username)
                                }
                            }}>
                            Join Game
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
})

const mapDispatchToProps = {
    createPlayer: createPlayer,
}

JoinGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinGame)

export default JoinGame