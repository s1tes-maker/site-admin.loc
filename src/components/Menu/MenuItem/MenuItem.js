import React from 'react';
import classes from './MenuItem.module.sass'

export default props=> (
	<li className= {classes.MenuItem}>
		<span>
			{props.menuPunkt}
		</span>	
	</li>
)
