import { put, select, takeLatest } from 'redux-saga/effects'

const getOpponents = (state) => state.opponents
const getStats = (state) => state.stats

function* selectCard(action) {
    const opponents = yield select(getOpponents)

    let canPurchase = true
    let canSelect = true

    if (opponents.length === 2) {
        const costs = action.card.cost
        if (costs != null) {
            const stats = yield select(getStats)
            Object.keys(costs).forEach(item => {
                if (stats[item] < costs[item]) {
                    canPurchase = false
                }
            })
        }
    } else {
        canPurchase = false
        canSelect = false
    }

    yield put({
        type: 'CARD_SELECTED',
        selectedCard: action.card,
        canPurchase,
        canSelect
    })
}

export function* cardWatcher() {
    yield takeLatest('SELECT_CARD', selectCard)
}