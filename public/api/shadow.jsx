const initialState = { name: '', zIndex: 200 };

module.exports = function (state = initialState, action) {
    if (action.type == "SHADOW_SHOW") {
        return {
            name: action.name,
            zIndex: (action.zIndex) ? action.zIndex : state.zIndex
        }
    }
    if (action.type == "SHADOW_HIDE") {
        return initialState
    }
    return state;
}