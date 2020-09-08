export const selectCard = (card) => ({
    type: 'SELECT_CARD',
    card: card,
})

export const goBack = () => ({
    type: 'GO_BACK',
})

export const purchaseCard = () => ({
    type: 'PURCHASE_CARD',
})

export const disposeCard = () => ({
    type: 'DISPOSE_CARD',
})