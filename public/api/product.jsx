const initialState = {
    list: [],
    active: 0
}

module.exports = function (state = Object.assign({}, initialState), action) {
    if (action.type === 'PRODUCT_SHOW') {
        if (action.active) {
            state = {
                active: action.active,
                list: action.list || []
            }
        }
    }
    if (action.type === 'PRODUCT_HIDE') {
        state = Object.assign({}, initialState)
    }
    if (action.type === 'PRODUCT_NEXT') {

    }
    if (action.type === 'PRODUCT_PREV') {

    }
    return state
};