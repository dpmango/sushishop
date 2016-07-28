module.exports = function (state = { list: [], status: 'empty' }, action) {
    if (action.type == "GET_ACTIONS") {
        if (state.status == 'empty') {
            fetch('/api/actions').then(function (response) {
                response.json().then(function(data) {
                    store.dispatch({
                        type: 'SET_ACTIONS',
                        list: data
                    });
                });
            });
            return {
                status: 'loading',
                list: []
            };
        }
        return state;
    }
    if (action.type == "SET_ACTIONS") {
        let list = new Map();
        action.list.map((item) => {
            list.set(item.alt, item)
        });
        return {
            status: 'load',
            list: list
        };
    }
    return state;
};