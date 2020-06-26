import Fetch_post from '../../my_js_functions/requests/fetch_post_redux'
import { SUCCESS, LOADING, ERROR } from './actionTypes'

//Fetch------------------------------------------------

export function fetchPostData(url,data) {

	console.log('fetchPostData', data)

	return dispatch =>Fetch_post(CreateFetchParams(url, data, dispatch))

}

function CreateFetchParams(url, data, dispatch) {

	return {
		url: url,
		data : data,
		handleSuccess: HandleSuccess,
		handleError: HandleError,
		handleLoading: HandleLoading,
		dispatch: dispatch
	}

}//CreateFetchParams

function HandleSuccess(result) {
	
	return ({ type: SUCCESS, payload: result})

}//function

 function HandleError(error) {
	
	return result => ({ type: ERROR, payload: error})

}//function

function HandleLoading() {
	
	return { type: LOADING }

}//function