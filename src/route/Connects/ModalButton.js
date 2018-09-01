import { connect } from 'react-redux'
import Button from '../../components/Button'
import * as actions from '../store/actions'
import * as selectors from '../store/selectors'

const mapStateToProps = state => ({
  disabled: !selectors.getTweets(state).size > 0,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions.toggleModal()),
})

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(Button)

export default ConnectedButton