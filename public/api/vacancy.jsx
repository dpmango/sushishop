module.exports = function (state = [], action) {
    if (action.type === "GET_VACANCY") {
        if (isNode) {
            let data = getCache('vacancy')
            if (data && data.lenght > 0) {
                state = data
            }
        }
        if (state.length === 0 || isNode) {
            axios.get(URL_API+'vacancies').then((response) => {
                let data = response.data.result
                store.dispatch({
                    type: "SET_VACANCY",
                    data: data
                })
            })
        }
        return state
    }
    if (action.type == "SET_VACANCY") {
        if (isNode) {
            setCache('vacancy', action.data)
        }
        return action.data
    }
    return state
};