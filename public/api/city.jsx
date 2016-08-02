var initialState = {
    list: {},
    groups: {},
    sort: []
}

if (isNode) {
    var cache = getCache('city')
    if (cache) {
        initialState = cache
    }
}

module.exports = function (state = initialState, action) {
    if (action.type == "GET_CITY") {
        if (state.sort.length == 0 || isNode) {
            axios.get(URL_API+'city').then(function (response) {
                store.dispatch({
                    type: 'SET_CITY',
                    city: response.data.result.city,
                    groups: response.data.result.groups
                });
            })
        }
        return state
    }
    if (action.type == "SET_CITY") {
        state = {
            list: {},
            groups: {},
            sort: []
        }

        action.city.map((item) => {
            state.list[item.id] = item
            state.sort.push(item.id)
        })

        state.sort.sort((a, b) => {
            return state.list[a].sort - state.list[b].sort
        })

        setCache('city', state)

        return state
    }
    return state
};