import { put, takeLatest, all } from 'redux-saga/effects'

function* postGameCode() {
    const gameCodeResult = yield fetch('/create-game').then(response => response.json() )
    yield put({ type: 'GAME_CODE_CREATED', gameCode: gameCodeResult.gameCode })
}

function* gamesWatcher() {
    yield takeLatest('CREATE_GAME_CODE', postGameCode)
}

export default function* rootSaga() {
    yield all([
        gamesWatcher(),
    ])
}