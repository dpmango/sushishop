var initialState = { list: [], status: 'empty' }


module.exports = function (state = initialState, action) {
    if (action.type == "GET_CITY") {
        if (state.status == 'empty') {
            axios.get(URL_API+'city').then(function (response) {
                var data = response.data
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
            return {
                status: 'loading',
                list: [],
                groups: []
            };
        }
        return state;
    }
    if (action.type == "SET_CITY") {
        let city = {
            list: {},
            groups: {},
            sort: []
        }

        action.city.map((item) => {
            city.list[item.id] = item
            city.sort.push(item.id)
        })

        city.sort.sort((a, b) => {
            return city.list[a].sort - city.list[b].sort
        })
        // for (let item of action.city) {
        //     city.set(item.id, item);
        //     if (item.group_id) {
        //         listSort.push({
        //             type: 'city',
        //             sort: item.sort,
        //             id: item.id
        //         });
        //     }
        // }
        // action.city.map((item) => {
        //     city.set(item.id, item);
        // });
        // action.groups.map((item) => {
        //     groups.set(item.id, item);
        //     listSort.push({
        //         type: 'group',
        //         sort: item.sort,
        //         id: item.id
        //     });
        // });
        return {
            status: 'load',
            list: city,
            groups: groups
        };
    }
    return state;
};