module.exports = function (state = { list: {}, groups: {}, sort: [] }, action) {
    if (action.type == "GET_SHOPS") {
        if (isNode) {
            let data = getCache('shops')
            if (Object.keys(data).length > 0) {
                state = Object.assign({}, data)
            }
        }

        if (state.sort.length === 0 || isNode) {
            axios.get(URL_API+'shops').then(function (response) {
                store.dispatch({
                    type: 'SET_SHOPS',
                    list: response.data.result.shops,
                    groups: response.data.result.groups
                });
            })
        }
        return state
    }
    if (action.type == "SET_SHOPS") {
        state = {
            list: {},
            groups: {},
            sort: [],
            city: {}
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
            if (!state.city[item.city_id]) {
                state.city[item.city_id] = []
            }
            state.city[item.city_id].push(item.id)
        })

        state.sort.sort((a, b) => {
            return state.list[a].sort - state.list[b].sort
        })

        if (isNode) {
            setCache('shops', state)
        }

        return state
    }
    return state
};