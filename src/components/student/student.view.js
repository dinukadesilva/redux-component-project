const StudentView = (props) => (
    <div>
        Student : <b>{props.name}</b>
        <button onClick={props.onEditClick.bind(null, props)}></button>
    </div>
);

module.exports = StudentView;