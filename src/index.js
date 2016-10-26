var Student = require("./components/student/student");
var IITStudent = require("./components/iit-student/iit-student");
var Instructor = require("./components/instructor/instructor");

module.exports = function (obj) {
    var obj = (obj ? obj : window);
    obj.Student = Student;
    obj.Instructor = Instructor;
    obj.IITStudent = IITStudent;
    return obj;
};