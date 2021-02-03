import { combineReducers } from 'redux';
import tasks from './tasks_reducer';
import users from './session_reducer';

export default combineReducers({
    users,
    tasks,
 
});