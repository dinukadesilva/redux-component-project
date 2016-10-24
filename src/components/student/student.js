

class Student extends React.Component {
    render () {
        return (
            <div>
                Student : <b>{this.props.name}</b>.
            </div>
        );
    }
}

module.exports = Student;