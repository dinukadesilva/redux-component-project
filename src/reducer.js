var studentReducer = require("./components/student/student-reducer");
var instructorReducer = require("./components/instructor/instructor-reducer");

var CombineReducers = require("redux").combineReducers;
var reducer = CombineReducers({ visibilityFilter, todos });

module.exports = reducer;
