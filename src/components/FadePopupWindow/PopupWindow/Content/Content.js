import React from 'react';
import classes from './Content.module.sass'

export default props=> (
	<div className= {classes.Content}>
		{props.content}
	</div>
)
