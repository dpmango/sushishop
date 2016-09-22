module.exports = function (state = { price: 0, list: [] }, action) {
    if (action.type == "GET_CART") {
        if (!IS_NODE) {
            // let data = localForage.getItem('cart', (err, value) => {
            //     if (value) {
            //         store.dispatch({
            //             type: 'SET_CART',
            //             data: value
            //         })
            //     }
            // })
        }
        return state
    }
    if (action.type == "SET_CART") {
        console.log('test')
    }
    if (action.type == "SET_CART_PRODUCT") {
        console.log(action)
        console.log('test')
    }
    return state
};