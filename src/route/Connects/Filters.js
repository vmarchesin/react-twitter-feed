import { connect } from 'react-redux'
import Filters from '../Partials/Filters'
import * as selectors from '../store/selectors'
import * as actions from '../store/actions'

const mapStateToProps = state => ({
  isOpen: selectors.getTweets(state).size > 0,
  filters: selectors.getFilters(state),
})

const mapDispatchToProps = dispatch => ({
  onChange: (key, value) => dispatch(actions.updateFilter(key, value)),
})

const ConnectedFilters = connect(mapStateToProps, mapDispatchToProps)(Filters)

export default ConnectedFilters