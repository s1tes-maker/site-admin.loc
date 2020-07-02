import React from 'react'
import classes from './Month.module.sass'
import Day from '../Day/Day'

export default ({ daysClicksInfo, month })=>
<div className= { classes.Month }>
	Месяц { month }

	{ Object.keys(daysClicksInfo).map((day,index)=> {

		return(
			<Day 
				key= {index}
				day= { day }
				hoursClicksInfo= { daysClicksInfo[day] }
			/>)
	})}
</div>

