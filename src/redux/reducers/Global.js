import { Types } from '../../consts'

const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false
}

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === Types.SET_ERROR) {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message
    }
  }
  if (action.type === Types.SET_LOADING) {
    return {
      ...state,
      isLoading: action.value
    }
  }
  return state
}