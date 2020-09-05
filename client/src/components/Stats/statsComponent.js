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
    if (stat === "Apples") {
        return <img src={apple} alt="apple icon" className="icon" />
    } else if (stat === "Bricks") {
        return <img src={brick} alt="brick icon" className="icon" />  
    } else if (stat === "Coins") {
        return <img src={coin} alt="coin icon" className="icon" />
    } else if (stat === "Flowers") {
        return <img src={flower} alt="flower icon" className="icon" />  
    } else if (stat === "Glass") {
        return <img src={glass} alt="glass icon" className="icon" />  
    } else if (stat === "Mud") {
        return <img src={mud} alt="mud icon" className="icon" />
    } else if (stat === "Pots") {
        return <img src={pot} alt="pot icon" className="icon" />  
    } else if (stat === "Spoons") {
        return <img src={spoon} alt="spoon icon" className="icon" />  
    } else if (stat === "Sticks") {
        return <img src={stick} alt="stick icon" className="icon" />
    } else if (stat === "Stones") {
        return <img src={stone} alt="stone icon" className="icon" />
    } else if (stat === "Victory Points") {
        return <img src={vp} alt="vp icon" className="icon" />  
    } else if (stat === "Water") {
        return <img src={water} alt="water icon" className="icon" />  
    } else if (stat === "Wolves") {
        return <img src={wolf} alt="wolf icon" className="icon" />
    }
}

const Stats = ({
    stats,
}) => {
    let statsView = []
    const statsKeys = Object.keys(stats)
    for (let i = 0; i < statsKeys.length; i += 2) {
        const imageViewLeft = getStatsIcon(statsKeys[i]);
        const imageViewRight = getStatsIcon(statsKeys[i + 1])

        statsView.push(
            <div className="listItem">
                <div className="listItemLeft">
                    { imageViewLeft }
                    <Typography>{ statsKeys[i] + ' : ' + stats[statsKeys[i]] }</Typography>
                </div>
                {
                    imageViewRight ?
                        <div className="listItemRight">
                            { imageViewRight }
                            <Typography>{ statsKeys[i + 1] + ' : ' + stats[statsKeys[i + 1]] }</Typography>
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