import { Networks, Types } from '../../consts'
import axios from 'axios'
import { setLoading } from './Global'

export const getDetail = (id) => (dispatch) => {
  dispatch(setLoading(true))
  axios.get(`${Networks.BASE_URL}/people/${id}`)
    .then(res => {
      console.log('res', res.data)
      dispatch({ type: Types.DETAIL, value: res.data })
      dispatch(setLoading(false))
    })
    .catch(err => {
      console.log('error', err)
      dispatch(setLoading(false))
    })
}