import React from 'react'
import classes from './Day.module.sass'
import Hour from '../Hour/Hour'

export default ({ hoursClicksInfo, day })=>
<div className= { classes.Day }>
	
	число { day }

	<div>часы:</div>

	{ Object.keys(hoursClicksInfo).map((hour,index)=> {

		return(
			<Hour 
				key= {index}
				hour= { hour }
				amount= { hoursClicksInfo[hour] }
			/>)
	})}

</div>

