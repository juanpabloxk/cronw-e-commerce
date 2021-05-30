import { UserActionTypes } from "./user.types";

const INITIAL_STATE = { currentUser: null, userDropdownHidden: true }

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userDropdownHidden: action.payload ? state.userDropdownHidden : true
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
