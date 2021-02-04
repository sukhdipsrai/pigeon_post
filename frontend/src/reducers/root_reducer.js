import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tasks from './tasks_reducer';
<<<<<<< HEAD
import entities from './entities'
import ui from './uiReducer'
=======
import task_form from './form_reducer'
>>>>>>> reached full mvp functionality and task creation
const RootReducer = combineReducers({
    session,
    entities,
    errors,
<<<<<<< HEAD
    ui
=======
    tasks,
    task_form
>>>>>>> reached full mvp functionality and task creation
});

export default RootReducer;