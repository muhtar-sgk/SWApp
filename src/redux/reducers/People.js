import { Types } from '../../consts'

const initPeople = {
  people: []
}

export const peopleReducer = (state = initPeople, action) => {
  if (action.type === Types.PEOPLE) {
    return {
      ...state,
      people: action.value
    }
  }

  return state
}