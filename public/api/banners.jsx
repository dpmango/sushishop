var isNode = typeof window === 'undefined'

var initialState = []
if (isNode) {
    initialState = getCache('banners')
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_BANNERS") {
        if (store.getState().banners.length > 0) {
            return store.getState().banners;
        } else {
            axios.get(URL_API+'banners').then(function (response) {
                var data = response.data.result
                store.dispatch({
                    type: "SET_BANNERS",
                    banners: data
                })
            });
        }
        return state;
    }
    if (action.type == "SET_BANNERS") {
        if (isNode) {
            setCache('banners', action.banners)
        }
        return action.banners;
    }
    return state;
}