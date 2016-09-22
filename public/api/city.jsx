var initialState = {
    list: {},
    groups: {},
    sort: []
}

if (IS_NODE) {
    var cache = Object.assign(initialState, getCache('city'))
    if (Object.keys(cache.list).length > 0) {
        initialState = cache
    }
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_CITY") {
        axios.get(URL_API+'city').then(function (response) {
            store.dispatch({
                type: 'SET_CITY',
                city: response.data.result.city,
                groups: response.data.result.groups
            });
        })
        return state
    }
    if (action.type == "SET_CITY") {
        state = {
            list: {},
            groups: {},
            sort: []
        }

        action.groups.map((item) => {
            state.groups[item.id] = Object.assign(item, { city: [] })
            state.sort.push({
                id: item.id,
                type: 'group'
            })
        })

        action.city.map((item) => {
            state.list[item.id] = item
            state.sort.push({
                id: item.id,
                type: 'city'
            })
            if (item.group_id !== 0) {
                state.groups[item.group_id].city.push(item.id)
            }
        })

        state.sort.sort((a, b) => {
            a = (a.type == 'city') ? state.list[a.id].sort : state.groups[a.id]
            b = (b.type == 'city') ? state.list[b.id].sort : state.groups[b.id]
            return a - b
        })

        if (IS_NODE) {
            setCache('city', state)
        }

        return state
    }
    return state
};