import React from 'react'
import classes from './Year.module.sass'
import Month from '../Month/Month'

export default ({ monthsClicksInfo, year })=>
<div className= { classes.Year }>
	Год {year}

	{ Object.keys(monthsClicksInfo).map((month,index)=> {

		return(
			<Month 
				key= {index}
				month= { month }
				daysClicksInfo= { monthsClicksInfo[month] }
			/>)
	})}

</div>

