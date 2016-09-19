module.exports = function (state = {}, action) {
    if (action.type === "AUTH") {
        if (action.phone && action.password) {
            axios.get(URL_API+'auth', {
                params: {
                    phone: action.phone,
                    password: action.password
                }
            }).then((data) => {
                // console.log(data)
            })
        }
        return state
    }
    return state
};