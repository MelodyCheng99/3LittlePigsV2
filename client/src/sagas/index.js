import { all } from 'redux-saga/effects'

import { registrationWatcher } from './registration'
import { cardWatcher } from './card'

export default function* rootSaga() {
    yield all([
        registrationWatcher(),
        cardWatcher()
    ])
}