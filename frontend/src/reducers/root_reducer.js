import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tasks from './tasks_reducer';
import entities from './entities'
import ui from './uiReducer'
const RootReducer = combineReducers({
    session,
    entities,
    errors,
    ui
});

export default RootReducer;