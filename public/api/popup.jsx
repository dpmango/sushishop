module.exports = function (state = false, action) {
    if (action.type === 'POPUP_SHOW') {
        return true
    }
    if (action.type === 'POPUP_HIDE') {
        return false
    }
    return state
};