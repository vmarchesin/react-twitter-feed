import { connect } from 'react-redux'
import Feed from '../../components/Feed'
import * as selectors from '../store/selectors'
import * as actions from '../store/actions'

const mapStateToProps = state => ({
  filters: selectors.getFilters(state),
  tweets: selectors.getTweets(state),
})

const mapDispatchToProps = dispatch => ({
  onSort: event => {
    const name = event.currentTarget.dataset.key
    dispatch(actions.sortBy(name))
  },
})

const ConnectedFeed = connect(mapStateToProps, mapDispatchToProps)(Feed)

export default ConnectedFeed