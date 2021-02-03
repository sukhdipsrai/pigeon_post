import { combineReducers } from 'redux';
import tasks from './tasks_reducer';
import user from './users_reducer';

export default combineReducers({
    user,
    tasks,

});