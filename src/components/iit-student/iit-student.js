var Student = require("../student/student");

class IITStudent extends Student {
    onEditClick() {
        alert("Upgraded onEditClick [an alert]");
    }

    getName() {
        return "[IIT] - " + super.getName();
    }

    render () {
        return (
            <div>
                {super.render()}
            </div>
        );
    }
}

module.exports = IITStudent;