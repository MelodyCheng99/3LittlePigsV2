export const createGameCode = () => ({
    type: 'CREATE_GAME_CODE',
})

export const createPlayer = (gameCode, username) => ({
    type: 'CREATE_PLAYER',
    gameCode: gameCode,
    username: username,
})