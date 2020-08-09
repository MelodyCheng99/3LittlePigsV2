import React from 'react'
import { Typography, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

import './startGameComponent.css'

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

const StartGameComponent = ({ gameCode }) => {
    const classes = useStyles()

    return (
        <div>
            <div className="gameCodeContainer">
                <Typography>
                    Game Code: {gameCode}
                </Typography>
            </div>
            <div className="startGameContainer">
                <Fab
                    variant="extended"
                    color="inherit"
                    className={classes.greenFab}>
                    Start Game
                </Fab>
            </div>
        </div>
    )
}

export default StartGameComponent