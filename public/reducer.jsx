const name = function (state = 'Артём', action) {
    console.log(state, action);
    switch(action.type) {
        case 'EDIT_NAME':
            return action.name;
    }
    return state;
};


// module.exports = name;
module.exports = combineReducers({
    name: name
})