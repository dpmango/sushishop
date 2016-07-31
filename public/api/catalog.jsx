var initialState =  { catalog: {
    list: {},
    url: {},
    sort: []
}, status: 'empty' }

if (isNode) {
    var data = getCache('catalog')
    if (data) {
        initialState = {
            status: 'load',
            catalog: getCache('catalog')
        }
    }
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_CATALOG") {
        if (state.status == 'empty') {
            axios.get(URL_API+'catalog').then(function (response) {
                var data = response.data.result
                store.dispatch({
                    type: "SET_CATALOG",
                    catalog: data
                })
            });
            return {
                status: 'loading',
                list: []
            };
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
        return {
            status: 'load',
            catalog: catalog
        };
    }
    return state;
};