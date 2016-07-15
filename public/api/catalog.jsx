module.exports = function (state = { list: [], status: 'empty' }, action) {
    if (action.type == "GET_CATALOG") {
        if (state.status == 'empty') {
            fetch('/api/catalog').then(function (response) {
                response.json().then(function(data) {
                    store.dispatch({
                        type: "SET_CATALOG",
                        catalog: data
                    })
                });
            });
            return {
                status: 'loading',
                list: []
            };
        }

        return state;
    }
    if (action.type == "SET_CATALOG") {
        let catalog = new Map();
        action.catalog.map((item) => {
            catalog
                .set(item.id, item)
                .set(item.alt, item);
        });
        return {
            status: 'load',
            list: action.catalog
        };
    }
    return state;
};