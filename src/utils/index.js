export function filterTweets(tweets, filters) {
  // TODO: Improve performance. Filtering all of these parameters is very consuming, though for 50 elements it's fine.

  // Variables starting with _ are filters passed by the user
  const _length = Number(filters.get('length'))
  if (_length > 0) {
    tweets = tweets.filter(tweet => {
      return tweet.get('text').length < _length
    })
  }

  const _date = filters.get('date')
  if (_date.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const dateArr = _date.split('/')
    const formattedDate = `${dateArr[1]}-${dateArr[0]}-${dateArr[2]}`
    tweets = tweets.filter(tweet => {
      return new Date(tweet.get('created_at')).getTime() < new Date(formattedDate).getTime()
    })
  }

  const _favs = Number(filters.get('favs'))
  if (_favs > 0) {
    tweets = tweets.filter(tweet => {
      return tweet.get('favorite_count') > _favs
    })
  }

  const _mentions = Number(filters.get('mentions'))
  if (_mentions > 0) {
    tweets = tweets.filter(tweet => {
      const mentions = tweet.getIn(['entities', 'user_mentions']).size
      return mentions >= _mentions
    })
  }

  const _hashtags = Number(filters.get('hashtags'))
  if (_mentions > 0) {
    tweets = tweets.filter(tweet => {
      const hashtags = tweet.getIn(['entities', 'hashtags']).size
      return hashtags >= _hashtags
    })
  }

  const _substring = filters.get('substring')
  if (_substring !== '') {
    tweets = tweets.filter(tweet => {
      return tweet.get('text').includes(_substring)
    })
  }

  const _mentionMatch = filters.get('mentionMatch')
  if (_mentionMatch !== '') {
    tweets = tweets.filter(tweet => {
      const mentions = tweet.getIn(['entities', 'user_mentions']).valueSeq().map(m => m.get('screen_name'))
      return mentions.includes(_mentionMatch)
    })
  }

  const _hashtagMatch = filters.get('hashtagMatch')
  if (_hashtagMatch !== '') {
    tweets = tweets.filter(tweet => {
      const hashtags = tweet.getIn(['entities', 'hashtags']).valueSeq().map(h => h.get('text'))
      return hashtags.includes(_hashtagMatch)
    })
  }

  /**
   * To add a new filter, do the following:
   *
   * 1. Create the value for in inside the store, under state.app.filters
   * 2. Add the if condition inside this function, and return the appropriate value
   * 3. Create the filter inside route/Partials/Filters, assigning the appropriate values and data-key attr. Use the same model as the current filters for guidance.
   */
  return tweets
}