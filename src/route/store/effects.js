import * as actions from './actions'
import * as selectors from './selectors'
import { fromJS } from 'immutable'
import { post } from '../../utils/fetch'

export const submitRequest = () => async (dispatch, getState) => {
  const screen_name = selectors.getSearchInput(getState())
  dispatch(actions.toggleLoading())

  if (!screen_name) {
    return dispatch(actions.setError('EMPTY_VALUE'))
  }

  try {
    const response = await post({
      url: '/fetch-tweets',
      body: {
        // count: 50, // To fetch more tweets, just pass the value here. The API supports up to 200
        screen_name,
      },
    })

    // Ideally this should be done inside the wrapper function. This is just quicker.
    if (response.error) {
      throw response.error
    }

    dispatch(actions.updateTweets(fromJS(response)))
  } catch (error) {
    const noResultsErrorCode = 34
    if (error.code === noResultsErrorCode) {
      dispatch(actions.setError('NO_RESULTS'))
    }
  } finally {
    dispatch(actions.toggleLoading())
  }
}