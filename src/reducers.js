const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GAME_CODE_CREATED':
            return { ...state, gameCode: action.gameCode }
        default:
            return state
    }
}

export default reducer