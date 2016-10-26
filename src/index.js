var createStore = require("redux").createStore;
var applyMiddleware = require("redux").applyMiddleware;
var composeWithDevTools = require("redux-devtools-extension").composeWithDevTools;
var thunkMiddleware = require("redux-thunk");

var Student = require("./components/student/student");
var Instructor = require("./components/instructor/instructor");

var reducer = require("./reducer");

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

const store = createStore(reducer, defaultState, composeWithDevTools(
    applyMiddleware(...thunkMiddleware)
));
/*var store = createStore(reducer/!*, {
    name: "Dinuka De Silva"
}*!/);*/


module.exports = function (obj) {
    var obj = (obj ? obj : window);
    obj.Student = Student;
    obj.Instructor = Instructor;
    obj.store = store;
    return obj;
};