import { connect } from 'react-redux'
import Button from '../../components/Button'
import { getSearchInput } from '../store/selectors'
import { submitRequest } from '../store/effects'

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(submitRequest(value)),
})

const ConnectedSearchButton = connect(null, mapDispatchToProps)(Button)

export default ConnectedSearchButton