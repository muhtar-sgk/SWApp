import { Types } from '../../consts'

const initDetail = {
  detail: []
}

export const detailReducer = (state = initDetail, action) => {
  if (action.type === Types.DETAIL) {
    return {
      ...state,
      detail: action.value
    }
  }

  if (action.type === Types.RESET_DETAIL) {
    return initDetail
  }

  return state
}