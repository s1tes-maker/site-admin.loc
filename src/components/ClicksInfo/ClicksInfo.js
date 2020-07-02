import React from 'react'
import classes from './ClicksInfo.module.sass'
import Year from './Year/Year'

export default ({ clicksInfo })=>
<div className= { classes.ClicksInfo }>
	{ Object.keys(clicksInfo).map((year,index)=> { 

		return(
			<Year 
				key= {index}
				year= { year }
				monthsClicksInfo= { clicksInfo[year] }
			/>)
	})}
</div>

