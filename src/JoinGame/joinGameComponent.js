import React from 'react'
import { TextField, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

import './joinGameComponent.css'

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

const JoinGame = ({
    gameCode,
    username
}) => {
    const classes = useStyles()

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
                                // TODO
                            }
                        }}>
                        Join Game
                    </Fab>
                </div>
        </div>
    )
}

export default JoinGame