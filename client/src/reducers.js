const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GAME_CODE_CREATED':
            return { ...state, gameCode: action.gameCode }
        case 'PLAYER_CREATED':
            return { 
                ...state, 
                username: action.username, 
                board: action.board, 
                cards: action.cards,
                stats: action.stats,
                opponents: action.opponents
            }
        case 'JOIN_GAME':
            return { ...state, joinGameRequested: true }
        case 'OPPONENT_CREATED':
            return { 
                ...state,
                opponents: action.opponents
            }

        case 'CARD_SELECTED':
            return { 
                ...state, 
                selectedCard: action.selectedCard,
                canPurchase: action.canPurchase, 
                canSelect: action.canSelect
            }
        
        default:
            return state
    }
}

export default reducer