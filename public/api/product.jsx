module.exports = function (state = { active: 0 }, action) {
    if (action.type === 'PRODUCT_SHOW') {
        if (action.active) {
            state = {
                active: action.active,
                list: action.list || [],
                category: action.category
            }
        }
    }
    if (action.type === 'PRODUCT_HIDE') {
        state = { active: 0 }
    }
    if (action.type === 'PRODUCT_NEXT') {

    }
    if (action.type === 'PRODUCT_PREV') {

    }
    return state
};