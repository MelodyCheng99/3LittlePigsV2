import { put, takeLatest } from 'redux-saga/effects'
import io from 'socket.io-client'

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

    const socket = io('http://localhost:5000')
    socket.emit('join_game', { gameCode: action.gameCode, username: action.username })

    yield put({ 
        type: 'PLAYER_CREATED', 
        username: action.username,
        board: playerResult.board, 
        cards: playerResult.cards,
        stats: playerResult.stats
    })
}

export function* registrationWatcher() {
    yield takeLatest('CREATE_GAME_CODE', postGameCode)
    yield takeLatest('CREATE_PLAYER', postPlayer)
}