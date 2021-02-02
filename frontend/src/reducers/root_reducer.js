import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tasks from './tasks_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    tasks
});

export default RootReducer;