import fetch_params_post from './fetch_params_post'
import {host} from '../app_consts'

export default 
function Fetch_post(params) {

	const 
		fetchParams= fetch_params_post(params.data),
		url= host +'/api' + params.url,
		dispatch= params.dispatch

	dispatch(params.handleLoading())	
		
	fetch( url, fetchParams)

	    .then( res => res.json() )

		.then( 
			
			result=> dispatch(params.handleSuccess(result.json_response)),
       
        	error => dispatch(params.handleError(error)), 
  		)

}

