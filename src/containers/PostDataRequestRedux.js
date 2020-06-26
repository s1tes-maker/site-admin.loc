import React, {Component} from 'react'

import {connect} from 'react-redux'
import { fetchPostData } from '../redux/postRequest/actions'

class PostDataRequest extends Component {

	componentDidMount() {

		const { url, data }= this.props
		this.props.fetchPostData(url, data)

	}

	render() {

		const { error, loading, serverData, render } = this.props
		
		console.log('serverData', serverData)

		if(error) {
			
			return <div>Ошибка: {error.message}</div>
		}

		if(loading) {
			return <div>loading..</div>
		}

		if(serverData)  
		  return render( serverData )
		else return null
	}	
}

export default

connect( 

	(state) =>({ 
		serverData: state.postRequest.serverData,
	  	error: state.postRequest.error,
	  	loading: state.postRequest.loading }),
	  	 
	dispatch => ({ 

		fetchPostData: (url, data) => dispatch(fetchPostData(url, data))

	})
)
(PostDataRequest)