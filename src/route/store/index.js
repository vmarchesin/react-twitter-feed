import { Map } from 'immutable'

const scaffold = Map({
  isLoading: false,
  searchInput: '',
})

export default (state = scaffold, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_INPUT":
      return state.set("searchInput", action.value)
    default:
      return state
  }
}