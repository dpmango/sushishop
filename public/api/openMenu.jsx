module.exports = function (state = false, action) {
    if (action.type == "TOGGLE_MENU") {
        if (store.getState().openMenu) {
            document.body.classList.remove('open-menu');
        } else {
            document.body.classList.add('open-menu');
        }
        return !store.getState().openMenu;
    }
    if (action.type == "SHOW_MENU") {
        document.body.classList.add('open-menu');
        return true;
    }
    if (action.type == "HIDE_MENU") {
        document.body.classList.remove('open-menu');
        return false;
    }
    return state;
}