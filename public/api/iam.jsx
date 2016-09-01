module.exports = function (state = { cityId: 0, shopId: 0 }, action) {
    if (action.type == 'GET_IAM') {
        let data = {}
        if (isNode) {
            if (cookies.cityId && cookies.shopId) {
                data = {
                    cityId: parseInt(cookies.cityId),
                    shopId: parseInt(cookies.shopId)
                }
            }
        } else {
            if (cookie.select().cityId && cookie.select().shopId) {
                data = {
                    cityId: parseInt(cookie.select().cityId),
                    shopId: parseInt(cookie.select().shopId)
                }
            }
        }
        if (data.cityId && data.shopId) {
            return data
        }
        if (!isNode && state.cityId != cookie.select().cityId && state.shopId != cookie.select().shopId) {
            cookie.save('cityId', state.cityId)
            cookie.save('shopId', state.shopId)
        }
        return state;
    }
    if (action.type == 'SET_IAM_CITY') {
        if (!isNode) {
            cookie.save('cityId', action.cityId)
        }
        return Object.assign({}, state, { cityId: action.cityId });
    }
    if (action.type == 'SET_IAM_CITY_LIGHT') {
        return Object.assign({}, state, { cityId: action.cityId });
    }
    if (action.type == 'SET_IAM_SHOP') {
        if (!isNode) {
            cookie.save('shopId', action.shopId)
        }
        return Object.assign({}, state, { shopId: action.shopId });
    }
    if (action.type == 'SET_IAM_SHOP_LIGHT') {
        return Object.assign({}, state, { shopId: action.shopId });
    }
    return state;
};