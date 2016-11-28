module.exports = function (state = [], action) {
    if (action.type === "GET_JOURNAL_ARTICLE") {
        if (IS_NODE) {
            let data = getCache('journal-'+action.alt)
            if (data && data.lenght > 0) {
                state = data
            }
        }
        if (state.length === 0 || IS_NODE) {
            axios.get(URL_API+'journal.article', {
                params: {
                    article_alt: action.alt
                }
            }).then((response) => {
                let data = response.data.result
                store.dispatch({
                    type: "SET_JOURNAL_ARTICLE",
                    data: data
                })
            })
        }
        return state
    }
    if (action.type == "SET_JOURNAL_ARTICLE") {
        if (IS_NODE) {
            setCache('journal-'+action.alt, action.data)
        }
        return action.data
    }
    return state
};