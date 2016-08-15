var initialState = {
    list: {},
    url: {},
    sort: []
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_CATALOG") {
        if (isNode) {
            var data = getCache('catalog-'+action.city_id+'-'+action.shop_id)
            if (data) {
                initialState = data
            }
        }
        if (state.status == 'empty' || isNode) {
            axios.get(URL_API+'catalog', {
                params: {
                    city_id: action.city_id,
                    shop_id: action.shop_id
                }
            }).then(function (response) {
                var data = response.data.result
                store.dispatch({
                    type: "SET_CATALOG",
                    catalog: data,
                    city_id: action.city_id,
                    shop_id: action.shop_id
                })
            });
            return initialState
        }

        return state;
    }
    if (action.type == "SET_CATALOG") {
        var catalog = {
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
            setCache('catalog-'+action.city_id+'-'+action.shop_id, catalog)
        }
        return catalog
    }
    return state;
};