import { connect } from "react-redux";
import TaskShowPage from "./task_show_page";
import { fetchTask, updateTask, deleteTask } from "../actions/task_actions";
const mSTP = (state, ownProps) => {
  // debugger
  let taskId = ownProps.match.params.taskId;
  let tasks = {};
  let arr = Object.values(state.entities.tasks)
    arr.forEach(obj => {
      if(obj['_id'] === taskId){
        tasks = obj
      }
    });

  return {
    taskId,
    tasks: tasks,
    currentUser: Object.values(state.entities.user)[0],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTask(id)),
    uploadImage: (task) => dispatch(updateTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  };
};

export default connect(mSTP, mDTP)(TaskShowPage);
