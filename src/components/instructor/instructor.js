

class Instructor extends React.Component {
    render () {
        return (
            <div>
                Instructor : <b>{this.props.name}</b>.
            </div>
        );
    }
}

module.exports = Instructor;