import React from 'react';

import { Box, Typography } from '@material-ui/core';

import './boardComponent.css';

const Board = ({ 
    board
}) => {
    return (
        <Box>
            <Typography>{ board.name }</Typography>
        </Box>
    );
}

export default Board;
