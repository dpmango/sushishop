module.exports = function (state = { name: '', zIndex: 200 }, action) {
    if (action.type === "SHADOW_SHOW") {
        return {
            name: action.name,
            zIndex: (action.zIndex) ? action.zIndex : 200
        }
    }
    if (action.type === "SHADOW_HIDE") {
        return state
    }
    return state;
}