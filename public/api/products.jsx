module.exports = function (state = { list: {}, url: {}, category: {} }, action) {
    if (action.type == "GET_PRODUCTS") {
        let city_id = store.getState().iam.cityId,
            shop_id = store.getState().iam.shopId

        if (isNode) {
            let data = getCache(`products-${shop_id}`)
            if (data) {
                state = Object.assign({}, data)
            }
        }
        if (Object.keys(state.list).length === 0 || isNode) {
            axios.get(URL_API+'product', {
                params: {
                    city_id: city_id,
                    shop_id: shop_id,
                    get_products: ''
                }
            }).then(function (response) {
                let data = response.data.result

                store.dispatch({
                    type: "SET_PRODUCTS",
                    data: data
                })
            })
            return state
        }

        return state;
    }
    if (action.type == "SET_PRODUCTS") {
        let city_id = store.getState().iam.cityId,
            shop_id = store.getState().iam.shopId

        let data = {
            list: {},
            url: {},
            category: {}
        }

        action.data.map((item) => {
            data.list[item.id] = item
            data.url[item.alt] = item.id
            if (item.category !== 0) {
                if (typeof data.category[item.category] !== "object") {
                    data.category[item.category] = []
                }
                data.category[item.category].push(item.id)
            }
        })

        Object.keys(data.category).map((id) => {
            data.category[id].sort((a, b) => {
                return data.list[a].sort - data.list[b].sort
            })
        })

        state = Object.assign({}, data)

        if (isNode) {
            setCache(`products-${shop_id}`, data)
        }
        return state
    }
    return state
};