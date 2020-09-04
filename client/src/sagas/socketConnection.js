import io from 'socket.io-client'
import { eventChannel } from '@redux-saga/core'

import { addUserToGame } from '../actions/actions'

function connect() {
    const socket = io('http://localhost:3000')
    return new Promise(resolve => {
        socket.on('connect', () => {
            resolve(socket)
        })
    })
}

function subscribe(socket) {
    return eventChannel(emit => {
        socket.on('registration.join_game', ({ gameCode, username }) => {
            emit(addUserToGame({ gameCode, username }))
        }),
        socket.on('disconnect', e => {

        })

        return () => {}
    })
}