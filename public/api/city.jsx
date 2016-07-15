module.exports = function (state = { list: [], status: 'empty' }, action) {
    if (action.type == "GET_CITY") {
        if (state.status == 'empty') {
            fetch(URL_API+'city').then(function (response) {
                response.json().then(function(data) {
                    if (data.error_message != 'Ok') {
                        setTimeout(function () {
                            store.dispatch({
                                type: 'GET_CITY'
                            });
                        }, 3000);
                    } else {
                        localForage.getItem('cityId').then((value) => {
                            if (typeof value != "number" || value == 0) {
                                data.result.city.map((item) => {
                                    if (item.isChange) {
                                        store.dispatch({
                                            type: 'SET_IAM_CITY',
                                            cityId: item.id
                                        });
                                    }
                                });
                            } else {
                                store.dispatch({
                                    type: 'SET_IAM_CITY',
                                    cityId: value
                                });
                            }
                        });
                        store.dispatch({
                            type: 'SET_CITY',
                            city: data.result.city,
                            groups: data.result.groups
                        });
                    }
                });
            });
            return {
                status: 'loading',
                list: [],
                groups: []
            };
        }
        return state;
    }
    if (action.type == "SET_CITY") {
        let city = new Map(),
            groups = new Map();
        city.set(action.city[0], action.city[0]);
        for (let item of action.city) {
            city.set(item.id, item);
        }
        action.city.map((item) => {
            city.set(item.id, item);
        });
        action.groups.map((item) => {
            groups.set(item.id, item);
        });
        return {
            status: 'load',
            list: city,
            groups: groups
        };
    }
    return state;
};