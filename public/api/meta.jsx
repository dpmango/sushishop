module.exports = function (state = { title: 'СушиШоп' }, action) {
    if (action.type === "SET_META") {
        if (!isNode) {
            if (action.title) {
                document.querySelector('title').innerHTML = action.title
            }
        }
        return {
            title: action.title
        }
    }
    return state
};