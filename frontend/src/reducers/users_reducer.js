import { RECEIVE_CURRENT_USER, 
    RECEIVE_USER_LOGOUT } from '../actions/session_actions';
 
  
  const UsersReducer = (state = {}, action) => {
      debugger
            switch (action.type) {
          case RECEIVE_CURRENT_USER:
              debugger
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
            case RECEIVE_USER_LOGOUT:
             return {}
            default:
            return state;
          }
        }
        
export default UsersReducer;