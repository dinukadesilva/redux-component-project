module.exports = function (state = {}, action) {
    switch (action.type) {
        case 'UPDATE_STUDENT':
            return Object.assign(action.state, state);
        default:
            return state
    }
};
