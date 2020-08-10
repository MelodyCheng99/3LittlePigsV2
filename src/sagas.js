import { put, takeLatest, all } from 'redux-saga/effects'

function* postGameCode() {
    const gameCodeResult = yield fetch('/create-game').then(response => response.json() )
    yield put({ type: 'GAME_CODE_CREATED', gameCode: gameCodeResult.gameCode })
}

function* postPlayer() {
    const playerResult = yield fetch('/create-player').then(response => response.json() )
    yield put({ type: 'PLAYER_CREATED', board: playerResult.board, cards: playerResult.cards })
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