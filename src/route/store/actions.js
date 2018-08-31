export const sortBy = key => ({
  key,
  type: 'TOGGLE_SORT',
})

export const toggleLoading = () => ({
  type: 'TOGGLE_LOADING',
})

export const updateSearchInput = value => ({
  type: 'UPDATE_SEARCH_INPUT',
  value,
})

export const updateTweets = tweets => ({
  tweets,
  type: 'UPDATE_TWEETS',
})