import { put, takeLatest, all } from 'redux-saga/effects'

function* postGameCode() {
    const gameCodeResult = yield fetch(`/create-game`).then(response => response.json())
    yield put({ type: 'GAME_CODE_CREATED', gameCode: gameCodeResult.gameCode })
}

function* postPlayer(action) {
    let formData = new FormData()
    formData.append('game_code', action.gameCode)
    formData.append('username', action.username)
    const playerResult = yield fetch('/create-player', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
    yield put({ 
        type: 'PLAYER_CREATED', 
        username: action.username,
        board: playerResult.board, 
        cards: playerResult.cards,
        stats: playerResult.stats
    })
}

function* gamesWatcher() {
    yield takeLatest('CREATE_GAME_CODE', postGameCode)
    yield takeLatest('CREATE_PLAYER', postPlayer)
}

export default function* rootSaga() {
    yield all([
        gamesWatcher(),
    ])
}