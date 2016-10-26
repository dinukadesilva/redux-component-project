var React = require("react");
var StudentController = require("./student.controller");
var StudentView = require("./student.view");

module.exports = function (getObjectState) {
    var connect = require("react-redux").connect;

    const mapStateToProps = (state) => {
        return {
            name: state.dinuka.name
        };
    };

    const Student = connect(
        mapStateToProps,
        StudentController
    )(StudentView);

    return (<Student />);
};