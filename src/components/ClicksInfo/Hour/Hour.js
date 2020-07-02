import React from 'react'
import classes from './Hour.module.sass'

export default ({ hour, amount })=>
<div className= { classes.Hour }>

	{ hour } кликов { amount }

</div>

