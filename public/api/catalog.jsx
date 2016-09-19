module.exports = function (state = { list: {}, url: {}, sort: [] }, action) {
    if (action.type == "GET_CATALOG") {
        let city_id = store.getState().iam.cityId,
            shop_id = store.getState().iam.shopId

        if (isNode) {
            let data = getCache(`catalog-${shop_id}`)
            if (data) {
                state = Object.assign({}, data)
            }
        }
        if (Object.keys(state).length === 0 || isNode) {
            let params = {
                city_id: city_id,
                shop_id: shop_id,
                get_products: true
            }
            axios.get(URL_API+'catalog', {
                params: params
            }).then((response) => {
                var data = response.data.result
                store.dispatch({
                    type: "SET_CATALOG",
                    catalog: data
                })
            })
            return state
        }

        return state
    }
    if (action.type == "SET_CATALOG") {
        let shop_id = store.getState().iam.shopId
        let catalog = {
            list: {},
            url: {},
            sort: []
        }
        action.catalog.map((item) => {
            catalog.list[item.id] = item
            catalog.url[item.alt] = item.id
            catalog.sort.push(item.id)
        })
        catalog.sort.sort(function (a,b) {
            return catalog.list[a].sort - catalog.list[b].sort
        })
        if (isNode) {
            setCache(`catalog-${shop_id}`, catalog)
        }
        return Object.assign({}, catalog)
    }
    return state
};