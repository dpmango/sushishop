var isNode = typeof window === 'undefined'

const initialState = {
    cityId: 0,
    shopId: 0
};


module.exports = function (state = initialState, action) {
    if (action.type == 'GET_IAM') {
        if (isNode) {
            if (cookies.cityId) {
                store.dispatch({
                    type: 'SET_IAM_CITY',
                    cityId: cookies.cityId
                })
            }
            if (cookies.shopId) {
                store.dispatch({
                    type: 'SET_IAM_SHOP',
                    shopId: cookies.shopId
                })
            }
        } else {

        }
        return state;
    }
    if (action.type == 'SET_IAM_CITY') {
        if (!isNode) {
            localForage.setItem('cityId', action.cityId);
        }
        return Object.assign({}, state, { cityId: action.cityId });
    }
    if (action.type == 'SET_IAM_CITY_LIGHT') {
        return Object.assign({}, state, { cityId: action.cityId });
    }
    if (action.type == 'SET_IAM_SHOP') {
        if (!isNode) {
            localForage.setItem('shopId', action.shopId);
        }
        return Object.assign({}, state, { shopId: action.shopId });
    }
    if (action.type == 'SET_IAM_SHOP_LIGHT') {
        return Object.assign({}, state, { shopId: action.shopId });
    }
    return state;
};