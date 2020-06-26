import React from 'react'
import GetDataRequest from 'containers/GetDataRequestRedux'

export default SitesList =>

() =>

<GetDataRequest 
	url= '/get-sites-list'

	render= { 
		( serverData ) =>
			<SitesList sitesList= { serverData }/>}
/>