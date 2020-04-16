import React from 'react'
import classes from './AttentionTextItem.module.sass'

export default props=> (
	<li className={classes.AttentionTextItem}>
		{ props.attentionText }
	</li>

)
