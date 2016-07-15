module.exports = function (state = { list: [], groups: [], city: [], status: 'empty' }, action) {
    if (action.type == "GET_SHOPS") {
        if (state.status == 'empty') {
            fetch(URL_API+'shops').then(function (response) {
                response.json().then(function(data) {
                    if (data.error_message != 'Ok') {
                        setTimeout(function () {
                            store.dispatch({
                                type: 'GET_SHOPS'
                            });
                        }, 3000);
                    } else {
                        localForage.getItem('shopId').then((value) => {
                            if (typeof value != "number" || value == 0) {
                                data.result.shops.map((item) => {
                                    if (item.isChange) {
                                        store.dispatch({
                                            type: 'SET_IAM_SHOP',
                                            shopId: item.id
                                        });
                                    }
                                });
                            } else {
                                store.dispatch({
                                    type: 'SET_IAM_SHOP',
                                    shopId: value
                                });
                            }
                        });
                        store.dispatch({
                            type: 'SET_SHOPS',
                            shops: data.result.shops,
                            groups: data.result.groups
                        });
                    }
                });
            });
            return {
                status: 'loading',
                list: [],
                city: [],
                groups: []
            };
        }
        return state;
    }
    if (action.type == "SET_SHOPS") {
        let shops = new Map(),
            groups = new Map(),
            city = {};
        action.shops.map((item) => {
            if (item.city_id != 0) {
                if (!city[item.city_id]) city[item.city_id] = [];
                city[item.city_id].push(item.id);
                shops
                    .set(item.id, item);
            }
        });
        action.groups.map((item) => {
            groups
                .set(item.id, item);
        });
        return {
            status: 'load',
            shops: shops,
            city: city,
            groups: groups
        };
    }
    return state;
};