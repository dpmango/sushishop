var isNode = typeof window === 'undefined'

module.exports = function (state = [], action) {
    if (isNode && state.length === 0) {
        state = getCache('banners-'+action.city_id+'-'+action.shop_id)
    }
    if (action.type == "GET_BANNERS") {
        if (!store.getState().banners || isNode) {
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
        if (isNode) {
            setCache('banners-'+action.city_id+'-'+action.shop_id, action.banners)
        }
        return action.banners;
    }
    return state;
}