import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tasks from './tasks_reducer';
import uiReducer from './uiReducer';

const RootReducer = combineReducers({
    session,
    errors,
    tasks,
    ui:uiReducer
});

export default RootReducer;