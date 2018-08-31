import { Map, List } from 'immutable'

const scaffold = Map({
  error: null,
  filters: Map({
    sort: Map({
      key: '',
      order: '',
    }),
  }),
  isLoading: false,
  searchInput: '',
  tweets: List(),
})

export default (state = scaffold, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return state.set('error', action.value)
    case 'TOGGLE_SORT':
      if (state.getIn(['filters', 'sort', 'key']) !== action.key) {
        return state
          .setIn(['filters', 'sort', 'key'], action.key)
          .setIn(['filters', 'sort', 'order'], 'asc')
      } else {
        // TODO allow to untoggle sort. The way this works now you can never remove the sort filter
        return state
          .updateIn(['filters', 'sort', 'order'], order => order === 'asc' ? 'desc' : 'asc')
      }
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