module.exports = function (state = [], action) {
    if (action.type === "GET_JOURNAL") {
        if (IS_NODE) {
            let data = getCache('journal')
            if (data && data.lenght > 0) {
                state = data
            }
        }
        if (state.length === 0 || IS_NODE) {
            axios.get(URL_API+'journal').then((response) => {
                let data = response.data.result
                store.dispatch({
                    type: "SET_JOURNAL",
                    data: data
                })
            })
        }
        return state
    }
    if (action.type == "SET_JOURNAL") {
        if (IS_NODE) {
            setCache('journal', action.data)
        }
        return action.data
    }
    return state
};