import { all } from 'redux-saga/effects'

import { registrationWatcher } from './registration'

export default function* rootSaga() {
    yield all([
        registrationWatcher(),
    ])
}