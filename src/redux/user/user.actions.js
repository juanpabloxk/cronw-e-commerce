import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export const toggleUserDropDown = hideDropdown =>({
  type: UserActionTypes.TOGGLE_USER_DROPDOWN,
  payload: hideDropdown
})
