export const INITIAL_STATE = {
  isDropdownOpen: false,
}

export const contextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      }

    default:
      return state
  }
}
