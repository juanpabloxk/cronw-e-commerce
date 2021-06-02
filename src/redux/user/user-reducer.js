import { UserActionTypes } from "./user.types";

const INITIAL_STATE = { 
  currentUser: null,
  error: null,  
  userDropdownHidden: true
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        userDropdownHidden: action.payload ? state.userDropdownHidden : true
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case UserActionTypes.TOGGLE_USER_DROPDOWN:
      return {
        ...state,
        userDropdownHidden: !state.userDropdownHidden
      }  
    default:
      return state;
  }
}

export default userReducer;
