import React, {Component} from 'react'

import {connect} from 'react-redux'
import { fetchGetData } from '../redux/getRequest/actions'

class GetDataRequest extends Component {

	componentDidMount() {

		this.props.fetchGetData(this.props.url)

	}

	render() {

		const { error, loading, serverData } = this.props
		if(error) {
			
			return <div>Ошибка: {error.message}</div>
		}

		if(loading) {
			return <div>loading..</div>
		}

		if(serverData)  
		  return this.props.render( serverData )
		else return null
	}	
}

export default
connect( 

	(state) => ({ 
			serverData: state.getRequest.serverData,
		  	error: state.getRequest.error,
		  	loading: state.getRequest.loading }), 

	dispatch => ({ 

		fetchGetData: url => dispatch(fetchGetData(url))

	})
)
(GetDataRequest)