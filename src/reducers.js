const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GAME_CODE_CREATED':
            return { ...state, gameCode: action.gameCode }
        case 'PLAYER_CREATED':
            return { ...state, username: action.username, board: action.board, cards: action.cards }
        default:
            return state
    }
}

export default reducer