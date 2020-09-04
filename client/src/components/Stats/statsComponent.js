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

const Stats = ({
    stats,
}) => {
    let statsView = []
    Object.keys(stats).forEach((stat) => {
        let imageView;
        if (stat === "Apples") {
            imageView = <img src={apple} alt="apple icon" className="icon" />
        } else if (stat === "Bricks") {
            imageView = <img src={brick} alt="brick icon" className="icon" />  
        } else if (stat === "Coins") {
            imageView = <img src={coin} alt="coin icon" className="icon" />
        } else if (stat === "Flowers") {
            imageView = <img src={flower} alt="flower icon" className="icon" />  
        } else if (stat === "Glass") {
            imageView = <img src={glass} alt="glass icon" className="icon" />  
        } else if (stat === "Mud") {
            imageView = <img src={mud} alt="mud icon" className="icon" />
        } else if (stat === "Pots") {
            imageView = <img src={pot} alt="pot icon" className="icon" />  
        } else if (stat === "Spoons") {
            imageView = <img src={spoon} alt="spoon icon" className="icon" />  
        } else if (stat === "Sticks") {
            imageView = <img src={stick} alt="stick icon" className="icon" />
        } else if (stat === "Stones") {
            imageView = <img src={stone} alt="stone icon" className="icon" />
        } else if (stat === "Victory Points") {
            imageView = <img src={vp} alt="vp icon" className="icon" />  
        } else if (stat === "Water") {
            imageView = <img src={water} alt="water icon" className="icon" />  
        } else if (stat === "Wolves") {
            imageView = <img src={wolf} alt="wolf icon" className="icon" />
        }

        statsView.push(
            <div className="listItem">
                { imageView }
                <Typography>{ stat + ' : ' + stats[stat] }</Typography>
            </div>
        )
    })

    return (
        <Box className="statsBox">
            { statsView }
        </Box>
    )
}

export default Stats