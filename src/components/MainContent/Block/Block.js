import React from 'react'
import classes from './Block.module.sass'

export default props=> (
	<div className= {classes.Block }>
		{props.content}
		{props.children}
	</div>
)
