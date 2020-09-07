import React from 'react'
import { Box, Typography } from '@material-ui/core'

import './statsComponent.css'

import apple from '../../images/apple_icon.png'
import brick from '../../images/brick_icon.png'
import coin from '../../images/coin_icon.png'
import flower from '../../images/flower_icon.png'
import glass from '../../images/glass_icon.png'
import mud from '../../images/mud_icon.png'
import pot from '../../images/pot_icon.png'
import spoon from '../../images/spoon_icon.png'
import stick from '../../images/stick_icon.png'
import stone from '../../images/stone_icon.png'
import vp from '../../images/vp_icon.png'
import water from '../../images/water_icon.png'
import wolf from '../../images/wolf_icon.png'

function getStatsIcon(stat) {
    if (stat === "apples") {
        return <img src={apple} alt="apple icon" className="icon" />
    } else if (stat === "bricks") {
        return <img src={brick} alt="brick icon" className="icon" />  
    } else if (stat === "coins") {
        return <img src={coin} alt="coin icon" className="icon" />
    } else if (stat === "flowers") {
        return <img src={flower} alt="flower icon" className="icon" />  
    } else if (stat === "glass") {
        return <img src={glass} alt="glass icon" className="icon" />  
    } else if (stat === "mud") {
        return <img src={mud} alt="mud icon" className="icon" />
    } else if (stat === "pots") {
        return <img src={pot} alt="pot icon" className="icon" />  
    } else if (stat === "spoons") {
        return <img src={spoon} alt="spoon icon" className="icon" />  
    } else if (stat === "sticks") {
        return <img src={stick} alt="stick icon" className="icon" />
    } else if (stat === "stones") {
        return <img src={stone} alt="stone icon" className="icon" />
    } else if (stat === "victory points") {
        return <img src={vp} alt="vp icon" className="icon" />  
    } else if (stat === "water") {
        return <img src={water} alt="water icon" className="icon" />  
    } else if (stat === "wolves") {
        return <img src={wolf} alt="wolf icon" className="icon" />
    }
}

const Stats = ({
    stats,
}) => {
    let statsView = []
    const statsKeys = Object.keys(stats)
    for (let i = 0; i < statsKeys.length; i += 2) {
        const statsLeft = statsKeys[i]
        const statsRight = statsKeys[i + 1]
        const imageViewLeft = getStatsIcon(statsLeft);
        const imageViewRight = getStatsIcon(statsRight)

        statsView.push(
            <div className="listItem">
                <div className="listItemLeft">
                    { imageViewLeft }
                    <Typography>
                        { statsLeft.charAt(0).toUpperCase() + statsLeft.slice(1) + ' : ' + stats[statsLeft] }
                    </Typography>
                </div>
                {
                    imageViewRight ?
                        <div className="listItemRight">
                            { imageViewRight }
                            <Typography>
                                { statsRight.charAt(0).toUpperCase() + statsRight.slice(1) + ' : ' + stats[statsRight] }
                            </Typography>
                        </div> :
                    null
                }
            </div>
        )
    }

    return (
        <Box className="statsBox">
            { statsView }
        </Box>
    )
}

export default Stats