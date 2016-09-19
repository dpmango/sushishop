module.exports = function (state = {}, action) {
    if (action.type == "GET_COMPANY") {
        if (isNode) {
            let data = getCache('company')
            if (Object.keys(data).length > 0) {
                state = data
            }
        }
        if (Object.keys(state).length === 0 || isNode) {
            axios.get(URL_API+'company').then(function (response) {
                let data = response.data.result
                store.dispatch({
                    type: "SET_COMPANY",
                    data: data
                })
            });
        }
        return state;
    }
    if (action.type == "SET_COMPANY") {
        if (isNode) {
            setCache('company', action.data)
        }
        return action.data;
    }
    return state;
};