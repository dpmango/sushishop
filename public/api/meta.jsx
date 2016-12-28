module.exports = function (state = { title: 'СушиШоп' }, action) {
    if (action.type === "SET_META") {
        if (!IS_NODE) {
            if (action.title) {
                document.querySelector('title').innerHTML = action.title
            }

            if (action.noResponsive) {
                document.querySelector('html').classList.add('no-responsive')
            } else {
                document.querySelector('html').classList.remove('no-responsive')
            }
        }
        return {
            title: action.title,
            noResponsive: action.noResponsive ? action.noResponsive : false
        }
    }
    return state
};