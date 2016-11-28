module.exports = function (state = [], action) {
    if (action.type === "GET_JOURNAL_CATEGORY") {
        if (IS_NODE) {
            let data = getCache('journal_category')
            if (data && data.lenght > 0) {
                state = data
            }
        }
        if (state.length === 0 || IS_NODE) {
            axios.get(URL_API+'journal.category').then((response) => {
                let data = response.data.result
                store.dispatch({
                    type: "SET_JOURNAL_CATEGORY",
                    data: data
                })
            })
        }
        return state
    }
    if (action.type == "SET_JOURNAL_CATEGORY") {
        let data = []
        if (IS_NODE) {
            setCache('journal_category', action.data)
        }
        return action.data
    }
    return state
};