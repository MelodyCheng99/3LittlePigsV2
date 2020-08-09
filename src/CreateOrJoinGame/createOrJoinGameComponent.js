import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green, blue } from '@material-ui/core/colors'

import { connect } from 'react-redux'
import { createGameCode } from '../actions'

import './createOrJoinGameComponent.css'

import StartGameComponent from '../StartGameComponent/startGameComponent'

const useStyles = makeStyles(_ => ({
    greenFab: {
        width: 200,
        height: 50,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600]
        }
    },
    blueFab: {
        width: 200,
        height: 50,
        backgroundColor: blue[400],
        '&:hover': {
            backgroundColor: blue[500]
        }
    }
}))

let CreateOrJoinGame = ({
    gameCode,
    createGameCode
}) => {
    const classes = useStyles()

    if (gameCode != null) {
        return (
            <StartGameComponent
                gameCode={gameCode} />
        )
    } else {
        return (
            <div>
                <div className="createGameContainer">
                    <Fab
                        variant="extended"
                        color="inherit"
                        className={classes.greenFab}
                        onClick={createGameCode}>
                        Create New Game
                    </Fab>
                </div>
                <div className="joinGameContainer">
                    <Fab
                        variant="extended"
                        color="inherit"
                        className={classes.blueFab}>
                        Join Existing Game
                    </Fab>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gameCode: state.gameCode,
})
CreateOrJoinGame = connect(
    mapStateToProps,
    null
)(CreateOrJoinGame)

const mapDispatchToProps = {
    createGameCode: createGameCode,
}
CreateOrJoinGame = connect(
    null,
    mapDispatchToProps
)(CreateOrJoinGame)

export default CreateOrJoinGame