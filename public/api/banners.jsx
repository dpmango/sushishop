module.exports = function (state = [], action) {
    if (action.type == "GET_BANNERS") {
        if (store.getState().banners.length > 0) {
            return store.getState().banners;
        } else {
            fetch('/api/banners').then(function (response) {
                response.json().then(function(data) {
                    store.dispatch({
                        type: "SET_BANNERS",
                        banners: data
                    })
                });
            });
        }
        return state;
    }
    if (action.type == "SET_BANNERS") {
        return action.banners;
    }
    return state;
}