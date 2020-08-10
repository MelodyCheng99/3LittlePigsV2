import React from 'react'

import './cardsComponent.css'

import stick from '../images/stick.png'
import stone from '../images/stone.png'
import brick from '../images/brick.png'
import mud from '../images/mud.png'
import stone_stick from '../images/stone_or_stick.png'
import brick_mud from '../images/brick_or_mud.png'
import flower from '../images/flower.png'

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
        }
    })

    return (
        <div className="cardsContainer">
            { cardViews }
        </div>
    )
}

export default Cards