import React from 'react'
import { Box, Typography } from '@material-ui/core'

import './boardComponent.css'

import brick from '../images/brick_icon.png'
import mud from '../images/mud_icon.png'
import stick from '../images/stick_icon.png'
import vp_3 from '../images/vp_3.png'
import vp_5 from '../images/vp_5.png'
import vp_7 from '../images/vp_7.png'

const Board = ({ board }) => {
    return (
        <Box border={3}>
            <div className="rowContainer">
                <Typography>{board.name}'s House</Typography>
                <img
                    src={board.resource == "brick" ? brick : board.resource == "mud" ? mud : stick}
                    alt="board resource"
                    className="image" />
            </div>
            <div className="rowContainer">
                <img
                    src={vp_3}
                    alt="3 victory points"
                    className="image" />
                <img
                    src={vp_5}
                    alt="5 victory points"
                    className="image" />
                <img
                    src={vp_7}
                    alt="7 victory points"
                    className="image" />
            </div>
        </Box>
    );
}

export default Board;
