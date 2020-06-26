import { SUCCESS, ERROR, LOADING } from './actionTypes'

const initialState= {
	error:    false,
    loading: false,
    serverData: []
}

export default (state= initialState, action) => {

	switch(action.type) {

		case ERROR:
			return {
				serverData: [],
				error: true,
				loading: false
			}

		case LOADING:

			return {
				serverData: [],
				error: false,
				loading: true
			}
		
		case SUCCESS:
	
			return { 
				serverData: action.payload, 
				loading: false,
				error: null 
			}

		default: return state	
	}
}