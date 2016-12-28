module.exports = function (state = {}, action) {
    if (action.type === "GET_JOURNAL_ARTICLE") {
        if (IS_NODE) {
            let data = getCache('journal-'+action.alt)
            if (data && data.lenght > 0) {
                let stateMerge = {}
                stateMerge[action.alt] = data
                state = Object.assign({}, state, stateMerge)
            }
        }
        if (action.alt in Object.keys(state) || IS_NODE) {
            axios.get(URL_API+'journal.article', {
                params: {
                    article_alt: action.alt
                }
            }).then((response) => {
                let data = response.data.result
                store.dispatch({
                    type: "SET_JOURNAL_ARTICLE",
                    data: data,
                    alt: action.alt
                })
            })
        }
        return state
    }
    if (action.type == "SET_JOURNAL_ARTICLE") {
        if (IS_NODE) {
            setCache('journal-'+action.alt, action.data)
        }
        let stateMerge = {}
        stateMerge[action.alt] = action.data
        state = Object.assign({}, state, stateMerge)
        return state
    }
    return state
};