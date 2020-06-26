import React from 'react'
import classes from './MainContent.module.sass'

export default (props)=>
<div className= { classes.MainContent }>
	{ props.children }
</div>

