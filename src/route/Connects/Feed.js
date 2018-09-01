import { connect } from 'react-redux'
import Feed from '../../components/Feed'
import { filterTweets } from '../../utils'
import * as selectors from '../store/selectors'
import * as actions from '../store/actions'

const mapStateToProps = state => ({
  sort: selectors.getSort(state),
  // Here I decided to filter the tweets on the fly, instead of triggering the filter with a button. It could easily be done with a trigger, I just thought doing it dinamically makes it look more impressive, since all filters are applied at the same time.
  tweets: filterTweets(selectors.getTweets(state), selectors.getFilters(state)),
})

const mapDispatchToProps = dispatch => ({
  onSort: event => {
    // This won't work properly on IE 10 and below. All modern browsers should be fine.
    const name = event.currentTarget.dataset.key
    dispatch(actions.sortBy(name))
  },
})

const ConnectedFeed = connect(mapStateToProps, mapDispatchToProps)(Feed)

export default ConnectedFeed