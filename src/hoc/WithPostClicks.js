import React from 'react'
import PostDataRequest from 'containers/PostDataRequestRedux'

export default ClicksInfo =>

props =>

<PostDataRequest 
	url= '/get-clicks-info'
	data= { { siteId: props.match.params.id } }
	render= { 
		( serverData ) =>
			<ClicksInfo 
				clicksInfo= { serverData }
			/>}
/>