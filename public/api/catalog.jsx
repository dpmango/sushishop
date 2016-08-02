var initialState = {
    list: {},
    url: {},
    sort: []
}

if (isNode) {
    var data = getCache('catalog')
    if (data) {
        initialState = data
    }
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_CATALOG") {
        if (state.status == 'empty' || isNode) {
            axios.get(URL_API+'catalog', {
                params: {
                    shop_id: 25,
                    city_id: 2
                }
            }).then(function (response) {
                var data = response.data.result
                store.dispatch({
                    type: "SET_CATALOG",
                    catalog: data
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
        for(let i in action.catalog) {
            let item = action.catalog[i]
            catalog.list[item.id] = item
            catalog.url[item.alt] = item.id
            catalog.sort.push(item.id)
        }
        catalog.sort.sort(function (a,b) {
            return catalog.list[a].sort - catalog.list[b].sort
        })
        if (isNode) {
            setCache('catalog', catalog)
        }
        return catalog
    }
    return state;
};