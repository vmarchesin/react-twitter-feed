import { connect } from 'react-redux'
import Modal from '../Partials/StatisticsModal'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

const mapStateToProps = state => ({
  isVisible: selectors.getModalVisibility(state),
  tweets: selectors.getTweets(state),
  user: selectors.getSearchInput(state),
})

const mapDispatchToProps = dispatch => ({
  onHide: () => dispatch(actions.toggleModal()),
})

const ConnectedModal = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default ConnectedModal