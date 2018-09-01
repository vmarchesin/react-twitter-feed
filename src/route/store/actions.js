export const setError = value => ({
  type: 'SET_ERROR',
  value,
})

export const sortBy = key => ({
  key,
  type: 'TOGGLE_SORT',
})

export const toggleLoading = () => ({
  type: 'TOGGLE_LOADING',
})

export const updateFilter = (key, value) => ({
  key,
  type: 'UPDATE_FILTER',
  value,
})

export const updateSearchInput = value => ({
  type: 'UPDATE_SEARCH_INPUT',
  value,
})

export const updateTweets = tweets => ({
  tweets,
  type: 'UPDATE_TWEETS',
})