import { Map, List } from 'immutable'

const scaffold = Map({
  isLoading: false,
  searchInput: '',
  tweets: List(),
})

export default (state = scaffold, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return state.update('isLoading', loading => !loading)
    case 'UPDATE_SEARCH_INPUT':
      return state.set('searchInput', action.value)
    case 'UPDATE_TWEETS':
      return state.set('tweets', action.tweets)
    default:
      return state
  }
}