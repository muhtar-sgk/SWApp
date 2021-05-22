import { Types } from '../../consts'

export const setLoading = (value) => {
  return { type: Types.SET_LOADING, value }
}