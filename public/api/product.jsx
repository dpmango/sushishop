var initialState = {
    list: {},
    url: {},
    sort: []
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_PRODUCT") {
        if (isNode) {
            var data = getCache('product-'+action.city_id+'-'+action.shop_id)
            if (data) {
                initialState = data
            }
        }
        if (state.status == 'empty' || isNode) {
            axios.get(URL_API+'product', {
                params: {
                    city_id: action.city_id,
                    shop_id: action.shop_id
                }
            }).then(function (response) {
                var data = response.data.result
                store.dispatch({
                    type: "SET_PRODUCT",
                    product: data,
                    city_id: action.city_id,
                    shop_id: action.shop_id
                })
            });
            return initialState
        }

        return state;
    }
    if (action.type == "SET_PRODUCT") {
        var product = {
            list: {},
            url: {},
            sort: []
        }
        action.catalog.map((item) => {
            product.list[item.id] = item
            product.url[item.alt] = item.id
            product.sort.push(item.id)
        })
        if (isNode) {
            setCache('product-'+action.city_id+'-'+action.shop_id, product)
        }
        return product
    }
    return state;
};