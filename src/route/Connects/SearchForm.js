import { connect } from 'react-redux'
import SearchForm from '../Partials/SearchForm'
import * as selectors from '../store/selectors'
import * as actions from '../store/actions'
import * as effects from '../store/effects'

const mapStateToProps = state => ({
  error: selectors.getError(state),
  placeholder: "Search for a user handle...",
  value: selectors.getSearchInput(state),
})

const mapDispatchToProps = dispatch => ({
  onChange: value => {
    dispatch(actions.updateSearchInput(value))
    dispatch(actions.setError(null))
  },
  onSubmit: () => dispatch(effects.submitRequest()),
})

const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm)

export default ConnectedSearchForm