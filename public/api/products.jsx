const initialState = {
    list: {},
    url: {},
    category: {}
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_PRODUCTS") {
        if (isNode) {
            let data = getCache('product-'+action.city_id+'-'+action.shop_id)
            if (data) {
                state = data
            }
        }
        if (Object.keys(state.list).length === 0 || isNode) {
            axios.get(URL_API+'product', {
                params: {
                    city_id: action.city_id,
                    shop_id: action.shop_id
                }
            }).then(function (response) {
                let data = response.data.result

                store.dispatch({
                    type: "SET_PRODUCTS",
                    data: data,
                    city_id: action.city_id,
                    shop_id: action.shop_id
                })
            })
            return state
        }

        return state;
    }
    if (action.type == "SET_PRODUCTS") {
        state = {
            list: {},
            url: {},
            category: {}
        }

        action.data.map((item) => {
            state.list[item.id] = item
            state.url[item.alt] = item.id
            if (item.category !== 0) {
                if (typeof state.category[item.category] !== "object") {
                    state.category[item.category] = []
                }
                state.category[item.category].push(item.id)
            }
        })

        Object.keys(state.category).map((id) => {
            state.category[id].sort((a, b) => {
                return state.list[a].sort - state.list[b].sort
            })
        })

        if (isNode) {
            setCache('product-'+action.city_id+'-'+action.shop_id, state)
        }
        return state
    }
    return state
};