import Fetch_get from '../../my_js_functions/requests/fetch_get_redux'
import { SUCCESS, LOADING, ERROR } from './actionTypes'

//Fetch------------------------------------------------

export function fetchGetData(url) {
	
	return dispatch => Fetch_get(CreateFetchParams(url, dispatch))
}

function CreateFetchParams(url, dispatch) {

	return {
		url: url,
		handleSuccess: HandleSuccess,
		handleError: HandleError,
		handleLoading: HandleLoading,
		dispatch: dispatch
	}

}

function HandleSuccess(result) {
	
	return ({ type: SUCCESS, payload: result})

}//function

 function HandleError(error) {
	
	return result => ({ type: ERROR, payload: error})

}

function HandleLoading() {
	
	return { type: LOADING }

}//function