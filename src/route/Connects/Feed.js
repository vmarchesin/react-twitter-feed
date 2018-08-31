import { connect } from 'react-redux'
import Feed from '../../components/Feed'
import { filterTweets } from '../../utils'
import * as selectors from '../store/selectors'
import * as actions from '../store/actions'

const mapStateToProps = state => ({
  sort: selectors.getSort(state),
  tweets: filterTweets(selectors.getTweets(state), selectors.getFilters(state)),
})

const mapDispatchToProps = dispatch => ({
  onSort: event => {
    const name = event.currentTarget.dataset.key
    dispatch(actions.sortBy(name))
  },
})

const ConnectedFeed = connect(mapStateToProps, mapDispatchToProps)(Feed)

export default ConnectedFeed