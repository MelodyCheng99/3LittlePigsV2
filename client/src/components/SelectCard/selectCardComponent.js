import React from 'react'
import { Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { green, red, grey } from '@material-ui/core/colors'

import './../Cards/cardsComponent.css'
import './selectCardComponent.css'

import stick from '../../images/stick.png'
import stone from '../../images/stone.png'
import brick from '../../images/brick.png'
import mud from '../../images/mud.png'
import stone_stick from '../../images/stone_or_stick.png'
import brick_mud from '../../images/brick_or_mud.png'
import flower from '../../images/flower.png'
import water from '../../images/water.png'
import apple from '../../images/apple.png'
import wolf_stick from '../../images/wolf_stick.png'
import wolf_brick from '../../images/wolf_brick.png'
import wolf_stone from '../../images/wolf_stone.png'
import glass_flower from '../../images/glass_flower.png'
import pot_water from '../../images/pot_water.png'
import spoon_apple from '../../images/spoon_apple.png'
import vp_3_yellow from '../../images/vp_3_yellow.png'
import vp_2_pink from '../../images/vp_2_pink.png'
import vp_2_brown from '../../images/vp_2_brown.png'
import trade_right from '../../images/market_right.png'
import trade_left from '../../images/market_left.png'
import trade_both from '../../images/market_both.png'

const useStyles = makeStyles(_ => ({
    greenFab: {
        width: 200,
        height: 50,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600]
        }
    },
    redFab: {
        width: 150,
        height: 50,
        backgroundColor: red[500],
        '&:hover': {
            backgroundColor: red[600]
        }
    },
    greyFab: {
        width: 150,
        height: 50,
        backgroundColor: grey[300],
        '&:hover': {
            backgroundColor: grey[400]
        }
    }
}))

function getCardView(card) {
    if (card.description === "stick") {
        return (
            <img
                src={stick}
                alt="stick card"
                className="cardImage" />
        )
    } else if (card.description === "stone") {
        return (
            <img
                src={stone}
                alt="stone card"
                className="cardImage" />
        )
    } else if (card.description === "brick") {
        return (
            <img
                src={brick}
                alt="brick card"
                className="cardImage" />
        )
    } else if (card.description === "mud") {
        return (
            <img
                src={mud}
                alt="mud card"
                className="cardImage" />
        )
    } else if (card.description === "stone_stick") {
        return (
            <img
                src={stone_stick}
                alt="stone or stick card"
                className="cardImage" />
        )
    } else if (card.description === "brick_mud") {
        return (
            <img
                src={brick_mud}
                alt="brick or mud card"
                className="cardImage" />
        )
    } else if (card.description === "flower") {
        return (
            <img
                src={flower}
                alt="flower card"
                className="cardImage" />
        )
    } else if (card.description === "water") {
        return (
            <img
                src={water}
                alt="water card"
                className="cardImage" />
        )
    } else if (card.description === "apple") {
        return (
            <img
                src={apple}
                alt="apple card"
                className="cardImage" />
        )
    } else if (card.description === "wolf_stick") {
        return (
            <img
                src={wolf_stick}
                alt="wolf for stick card"
                className="cardImage" />
        )
    } else if (card.description === "wolf_brick") {
        return (
            <img
                src={wolf_brick}
                alt="wolf for brick card"
                className="cardImage" />
        )
    } else if (card.description === "wolf_stone") {
        return (
            <img
                src={wolf_stone}
                alt="wolf for stone card"
                className="cardImage" />
        )
    } else if (card.description === "glass_flower") {
        return (
            <img
                src={glass_flower}
                alt="glass for flower card"
                className="cardImage" />
        )
    } else if (card.description === "pot_water") {
        return (
            <img
                src={pot_water}
                alt="pot for water card"
                className="cardImage" />
        )
    } else if (card.description === "spoon_apple") {
        return (
            <img
                src={spoon_apple}
                alt="spoon for apple card"
                className="cardImage" />
        )
    } else if (card.description === "vp_3_yellow") {
        return (
            <img
                src={vp_3_yellow}
                alt="3 yellow victory points card"
                className="cardImage" />
        )
    } else if (card.description === "vp_2_pink") {
        return (
            <img
                src={vp_2_pink}
                alt="2 pink victory points card"
                className="cardImage" />
        )
    } else if (card.description === "vp_2_brown") {
        return (
            <img
                src={vp_2_brown}
                alt="2 brown victory points card"
                className="cardImage" />
        )
    } else if (card.description === "trade_right") {
        return (
            <img
                src={trade_right}
                alt="cheaper trade with right side card"
                className="cardImage" />
        )
    } else if (card.description === "trade_left") {
        return (
            <img
                src={trade_left}
                alt="cheaper trade with left side card"
                className="cardImage" />
        )
    } else if (card.description === "trade_both") {
        return (
            <img
                src={trade_both}
                alt="cheaper trade with both sides card"
                className="cardImage" />
        )
    }
}

const SelectCard = ({
    selectedCard,
    canPurchase
}) => {
    const classes = useStyles()

    return (
        <div>
            <div className="cardRowContainer">
                <div className="backButtonContainer">
                    <Fab 
                        variant="extended"
                        color="inherit"
                        className={classes.greyFab}>
                        &#8592; Back
                    </Fab>
                </div>
                { getCardView(selectedCard) }
                <div className="disposeCardContainer">
                    <Fab 
                        variant="extended"
                        color="inherit"
                        className={classes.redFab}>
                        &#128465; Dispose
                    </Fab>
                </div>
            </div>
            <div className="cardRowContainer purchaseCardContainer">
                { canPurchase ?
                    <Fab
                        variant="extended"
                        color="inherit"
                        className={classes.greenFab}>
                        Purchase
                    </Fab> :
                    null
                }
            </div>
        </div>
    )
}

export default SelectCard