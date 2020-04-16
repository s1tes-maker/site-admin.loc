import React from 'react'
import WOW from 'wowjs'
import classes from './Services.module.sass'
import Service from 'components/ContentBlocks/Services/ServiceItem/ServiceItem'
import MakeServices from './make_data'

export default props=>(	

	<div className={classes.Services}>
		{ MakeServices().map ((service) => {
			new WOW.WOW({live: false}).init()
			return(
				<Service
					key= {service.id}
					id= {service.id}
					name= {service.name}
					attentionTextList= {service.attentionTextList}
					photoes= {service.photoes}
					WOWclass= {service.WOWclass}
				/>
			)
		}) }
		
	</div>
)