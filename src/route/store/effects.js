import * as actions from './actions'
import * as selectors from './selectors'
import { fromJS } from 'immutable'
import { post } from '../../utils/fetch'

export const submitRequest = () => async (dispatch, getState) => {
  const screen_name = selectors.getSearchInput(getState())
  dispatch(actions.toggleLoading())

  try {
    const response = await post({
      url: '/fetch-tweets', 
      body: { 
        screen_name,
      },
    })

    console.log(response.map(t => t.text))
    dispatch(actions.updateTweets(fromJS(response)))
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(actions.toggleLoading())
  }
}