var StudentController = require("./student.controller");

class StudentView extends StudentController {
    render() {
        return (
            <div>
                Student : <b>{this.getName()}</b>
                <button onClick={this.onEditClick}>Click here</button>
            </div>
        );
    }
}

module.exports = StudentView;