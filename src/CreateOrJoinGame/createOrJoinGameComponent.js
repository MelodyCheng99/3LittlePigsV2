import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green, blue } from '@material-ui/core/colors'

import './createOrJoinGameComponent.css'

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

const CreateOrJoinGame = () => {
    const classes = useStyles()

    return (
        <div>
            <div className="createGameContainer">
                <Fab
                    variant="extended"
                    color="inherit"
                    className={ classes.greenFab }>
                    Create New Game
                </Fab>
                </div>
                <div className="joinGameContainer">
                <Fab
                    variant="extended"
                    color="inherit"
                    className={ classes.blueFab }>
                    Join Existing Game
                </Fab>
            </div>
        </div>
    )
}

export default CreateOrJoinGame