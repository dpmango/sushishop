module.exports = function (state = { name: '', zIndex: 200, callback: () => {} }, action) {
    if (action.type === "SHADOW_SHOW") {
        return {
            name: action.name,
            zIndex: (action.zIndex) ? action.zIndex : 200,
            callback: (action.callback) ? action.callback : () => {}
        }
    }
    if (action.type === "SHADOW_HIDE") {
        return { name: '', zIndex: 200, callback: () => {} }
    }
    return state;
}