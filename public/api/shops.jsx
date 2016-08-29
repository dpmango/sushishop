var initialState = {
    list: {},
    groups: {},
    sort: []
}

if (isNode) {
    let iam = store.getState().iam
    var cache = Object.assign(initialState, getCache('shops-'+iam.cityId))
    if (Object.keys(cache.list).length > 0) {
        initialState = cache
    }
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_SHOPS") {
        axios.get(URL_API+'shops', {
            city_id: iam.cityId
        }).then(function (response) {
            store.dispatch({
                type: 'SET_SHOPS',
                list: response.data.result.shops,
                groups: response.data.result.groups
            });
        })
        return state
    }
    if (action.type == "SET_SHOPS") {
        state = {
            list: {},
            groups: {},
            sort: []
        }

        action.groups.map((item) => {
            state.groups[item.id] = Object.assign(item, { shops: [] })
        })

        action.list.map((item) => {
            state.list[item.id] = item
            state.sort.push(item.id)
            if (item.group_id.length > 0) {
                item.group_id.map((group_id) => {
                    state.groups[group_id].shops.push(item.id)
                })
            }
        })

        state.sort.sort((a, b) => {
            return state.list[a].sort - state.list[b].sort
        })

        if (isNode) {
            setCache('shops-'+iam.cityId, state)
        }

        return state
    }
    return state
};