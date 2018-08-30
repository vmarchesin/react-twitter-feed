import * as actions from "./actions"

export const submitRequest = () => (dispatch, getState) => {
  dispatch(actions.updateSearchInput('update'))
}