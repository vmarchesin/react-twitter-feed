import { connect } from 'react-redux'
import Feed from '../../components/Feed'
import { getTweets } from '../store/selectors'

const mapStateToProps = state => ({
  tweets: getTweets(state),
})

const ConnectedFeed = connect(mapStateToProps)(Feed)

export default ConnectedFeed