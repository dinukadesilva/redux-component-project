var React = require("react");

class StudentController extends React.Component {
    onEditClick() {
        console.log("onEditClick----");
    }

    getName() {
        return this.props.name;
    }
}

module.exports = StudentController;