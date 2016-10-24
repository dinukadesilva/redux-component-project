var Student = require("./components/student/student");
var Instructor = require("./components/instructor/instructor");

module.exports = function (obj) {
    var obj = (obj ? obj : window);
    obj.Student = Student;
    obj.Instructor = Instructor;
    return obj;
};

var createStore = require("redux").createStore;
var reducer = require("./reducer");
var store = createStore(reducer, window.initialState);