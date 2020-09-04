import React from 'react'

import './cardsComponent.css'

import stick from '../images/stick.png'
import stone from '../images/stone.png'
import brick from '../images/brick.png'
import mud from '../images/mud.png'
import stone_stick from '../images/stone_or_stick.png'
import brick_mud from '../images/brick_or_mud.png'
import flower from '../images/flower.png'
import water from '../images/water.png'
import apple from '../images/apple.png'
import wolf_stick from '../images/wolf_stick.png'
import wolf_brick from '../images/wolf_brick.png'
import wolf_stone from '../images/wolf_stone.png'
import glass_flower from '../images/glass_flower.png'
import pot_water from '../images/pot_water.png'
import spoon_apple from '../images/spoon_apple.png'
import vp_3_yellow from '../images/vp_3_yellow.png'
import vp_2_pink from '../images/vp_2_pink.png'
import vp_2_brown from '../images/vp_2_brown.png'
import trade_right from '../images/market_right.png'
import trade_left from '../images/market_left.png'
import trade_both from '../images/market_both.png'

const Cards = ({ cards }) => {
    let cardViews = []
    cards.forEach(card => {
        if (card.description === "stick") {
            cardViews.push(
                <img
                    src={stick}
                    alt="stick card"
                    className="cardImage" />
            )
        } else if (card.description === "stone") {
            cardViews.push(
                <img
                    src={stone}
                    alt="stone card"
                    className="cardImage" />
            )
        } else if (card.description === "brick") {
            cardViews.push(
                <img
                    src={brick}
                    alt="brick card"
                    className="cardImage" />
            )
        } else if (card.description === "mud") {
            cardViews.push(
                <img
                    src={mud}
                    alt="mud card"
                    className="cardImage" />
            )
        } else if (card.description === "stone_stick") {
            cardViews.push(
                <img
                    src={stone_stick}
                    alt="stone or stick card"
                    className="cardImage" />
            )
        } else if (card.description === "brick_mud") {
            cardViews.push(
                <img
                    src={brick_mud}
                    alt="brick or mud card"
                    className="cardImage" />
            )
        } else if (card.description === "flower") {
            cardViews.push(
                <img
                    src={flower}
                    alt="flower card"
                    className="cardImage" />
            )
        } else if (card.description === "water") {
            cardViews.push(
                <img
                    src={water}
                    alt="water card"
                    className="cardImage" />
            )
        } else if (card.description === "apple") {
            cardViews.push(
                <img
                    src={apple}
                    alt="apple card"
                    className="cardImage" />
            )
        } else if (card.description === "wolf_stick") {
            cardViews.push(
                <img
                    src={wolf_stick}
                    alt="wolf for stick card"
                    className="cardImage" />
            )
        } else if (card.description === "wolf_brick") {
            cardViews.push(
                <img
                    src={wolf_brick}
                    alt="wolf for brick card"
                    className="cardImage" />
            )
        } else if (card.description === "wolf_stone") {
            cardViews.push(
                <img
                    src={wolf_stone}
                    alt="wolf for stone card"
                    className="cardImage" />
            )
        } else if (card.description === "glass_flower") {
            cardViews.push(
                <img
                    src={glass_flower}
                    alt="glass for flower card"
                    className="cardImage" />
            )
        } else if (card.description === "pot_water") {
            cardViews.push(
                <img
                    src={pot_water}
                    alt="pot for water card"
                    className="cardImage" />
            )
        } else if (card.description === "spoon_apple") {
            cardViews.push(
                <img
                    src={spoon_apple}
                    alt="spoon for apple card"
                    className="cardImage" />
            )
        } else if (card.description === "vp_3_yellow") {
            cardViews.push(
                <img
                    src={vp_3_yellow}
                    alt="3 yellow victory points card"
                    className="cardImage" />
            )
        } else if (card.description === "vp_2_pink") {
            cardViews.push(
                <img
                    src={vp_2_pink}
                    alt="2 pink victory points card"
                    className="cardImage" />
            )
        } else if (card.description === "vp_2_brown") {
            cardViews.push(
                <img
                    src={vp_2_brown}
                    alt="2 brown victory points card"
                    className="cardImage" />
            )
        } else if (card.description === "trade_right") {
            cardViews.push(
                <img
                    src={trade_right}
                    alt="cheaper trade with right side card"
                    className="cardImage" />
            )
        } else if (card.description === "trade_left") {
            cardViews.push(
                <img
                    src={trade_left}
                    alt="cheaper trade with left side card"
                    className="cardImage" />
            )
        } else if (card.description === "trade_both") {
            cardViews.push(
                <img
                    src={trade_both}
                    alt="cheaper trade with both sides card"
                    className="cardImage" />
            )
        }
    })

    return (
        <div className="cardsContainer">
            { cardViews }
        </div>
    )
}

export default Cards