module.exports = function (state = [], action) {
    if (IS_NODE && state.length === 0) {
        let data = getCache('banners-'+action.city_id+'-'+action.shop_id)
        if (data) {
            state = data
        }
    }
    if (action.type == "GET_BANNERS") {
        if (!store.getState().banners || IS_NODE) {
            axios.get(URL_API+'banners', {
                params: {
                    city_id: action.city_id,
                    shop_id: action.shop_id
                }
            }).then(function (response) {
                var data = response.data.result
                store.dispatch({
                    type: "SET_BANNERS",
                    banners: data,
                    city_id: action.city_id,
                    shop_id: action.shop_id
                })
            });
        }
        return state;
    }
    if (action.type == "SET_BANNERS") {
        if (IS_NODE) {
            setCache('banners-'+action.city_id+'-'+action.shop_id, action.banners)
        }
        return action.banners;
    }
    return state;
}