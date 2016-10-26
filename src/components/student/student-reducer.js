var defaultState = {
    dinuka: {
        name: "Dinuka"
    },
    senuri: {
        name: "Senuri"
    },
    harin: {
        name: "Harin"
    }
};

module.exports = function (state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_STUDENT':
            state.dinuka.name="Dinuka De Silva";
            return state;
        default:
            return state;
    }
};
