//mapDispatchToProps
const StudentController = (dispatch) => {
    return {
        onEditClick: (props) => {
            console.log("onEditClick----");

            dispatch({
                type: "UPDATE_STUDENT"
            });
            //props.name = "Editing.....";
        }
    }
}

module.exports = StudentController;