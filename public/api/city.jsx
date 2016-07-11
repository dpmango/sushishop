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
        let city = new Map,
            groups = new Map;
        action.city.map((item) => {
            city
                .set(item.id, item);
        });
        action.groups.map((item) => {
            groups
                .set(item.id, item);
        });
        return {
            status: 'load',
            list: city,
            groups: groups
        };
    }
    return state;
};