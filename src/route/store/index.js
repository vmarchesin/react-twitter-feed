import { Map, List } from 'immutable'

const scaffold = Map({
  error: null,
  filters: Map({
    date: '',
    favs: '',
    hashtags: null,
    hashtagMatch: '',
    length: null,
    mentions: null,
    mentionMatch: '',
    sort: Map({
      key: '',
      order: '',
    }),
    substring: '',
  }),
  isLoading: false,
  modalIsOpen: false,
  searchInput: '',
  tweets: List(),
})

export default (state = scaffold, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return state.set('error', action.value)
    case 'TOGGLE_LOADING':
      return state.update('isLoading', loading => !loading)
    case 'TOGGLE_MODAL':
      return state.update('modalIsOpen', open => !open)
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
    case 'UPDATE_FILTER':
      return state.setIn(['filters', action.key], action.value)
    case 'UPDATE_SEARCH_INPUT':
      return state.set('searchInput', action.value)
    case 'UPDATE_TWEETS':
      return state.set('tweets', action.tweets)
    default:
      return state
  }
}