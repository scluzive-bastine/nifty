import { createContext, useContext, useReducer } from 'react'
import { contextReducer, INITIAL_STATE } from './contextReducer'

export const ProviderContext = createContext()

const appActions = () => {
  const [state, dispatch] = useReducer(contextReducer, INITIAL_STATE)

  const toggleMobileDropdown = () => {
    dispatch({
      type: 'TOGGLE_DROPDOWN',
    })
  }

  return {
    state,
    toggleMobileDropdown,
  }
}

const NiftyContext = ({ children }) => {
  const { state, ...props } = appActions()

  const values = {
    isMobileDropdownOpen: state.isDropdownOpen,
    ...props,
  }

  return <ProviderContext.Provider value={values}>{children}</ProviderContext.Provider>
}

const useAppContext = () => {
  return useContext(ProviderContext)
}

export { NiftyContext, useAppContext }
