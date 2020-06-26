import {host} from '../app_consts'

export default 
function Fetch_get(params) {

	const 
		url= host +'/api'+ params.url,
		dispatch= params.dispatch

	dispatch(params.handleLoading())		
		
	fetch(url)
		
	 	.then( res => res.json() )

		.then( 
		  result => dispatch(params.handleSuccess(result.json_response)),
		  error => dispatch(params.handleError(error)), 
		)

}//function