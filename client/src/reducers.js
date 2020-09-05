const reducer = (state = {}, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'GAME_CODE_CREATED':
            return { ...state, gameCode: action.gameCode }
        case 'PLAYER_CREATED':
            return { 
                ...state, 
                username: action.username, 
                board: action.board, 
                cards: action.cards,
                stats: action.stats 
            }
        case 'JOIN_GAME':
            return { ...state, joinGameRequested: true }
        default:
            return state
    }
}

export default reducer