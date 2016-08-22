const initialState = {
    list: {},
    sort: [],
    alt: {}
}

module.exports = function (state = initialState, action) {
    if (action.type === 'GET_ACTIONS') {
        if (isNode) {
            let data = getCache("actions-"+action.city_id)
            if (data) {
                state = data
            }
        }
        if (Object.keys(state.list).length === 0 || isNode) {
            axios.get(URL_API+'actions', {
                params: {
                    city_id: action.city_id
                }
            }).then(function (response) {
                var data = response.data.result

                store.dispatch({
                    type: "SET_ACTIONS",
                    data: data,
                    city_id: action.city_id
                })
            })
        }
        return state
    }
    if (action.type === 'SET_ACTIONS') {
        state = {
            list: {},
            sort: [],
            alt: {}
        }

        action.data.map((item) => {
            state.list[item.id] = item
            state.sort.push(item.id)
            state.alt[item.alt] = item.id
        })

        state.sort.sort((a, b) => {
            return state.list[a].sort - state.list[b].sort
        })

        if (isNode) {
            setCache("actions-"+action.city_id, state)
        }

        return state
    }
    return state
};