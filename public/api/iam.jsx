const initialState = {
    cityId: 0,
    shopId: 0
};


module.exports = function (state = initialState, action) {
    if (action.type == 'GET_IAM') {
        localForage.getItem('cityId').then((data) => {
            if (data) {
                store.dispatch({
                    type: 'SET_IAM_CITY_LIGHT',
                    cityId: data
                });
            }
        });
        localForage.getItem('shopId').then((data) => {
            if (data) {
                store.dispatch({
                    type: 'SET_IAM_SHOP_LIGHT',
                    shopId: data
                });
            }
        });
        return state;
    }
    if (action.type == 'SET_IAM_CITY') {
        localForage.setItem('cityId', action.cityId);
        return Object.assign({}, state, { cityId: action.cityId });
    }
    if (action.type == 'SET_IAM_CITY_LIGHT') {
        return Object.assign({}, state, { cityId: action.cityId });
    }
    if (action.type == 'SET_IAM_SHOP') {
        localForage.setItem('shopId', action.shopId);
        return Object.assign({}, state, { shopId: action.shopId });
    }
    if (action.type == 'SET_IAM_SHOP_LIGHT') {
        return Object.assign({}, state, { shopId: action.shopId });
    }
    return state;
};