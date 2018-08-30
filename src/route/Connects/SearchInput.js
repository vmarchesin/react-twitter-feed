import { connect } from 'react-redux'
import Input from '../../components/Input'
import { getSearchInput } from '../store/selectors'
import { updateSearchInput } from '../store/actions'

const mapStateToProps = state => ({
  placeholder: "Search for a user handle...",
  value: getSearchInput(state),
})

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(updateSearchInput(value)),
})

const ConnectedSearchInput = connect(mapStateToProps, mapDispatchToProps)(Input)

export default ConnectedSearchInput