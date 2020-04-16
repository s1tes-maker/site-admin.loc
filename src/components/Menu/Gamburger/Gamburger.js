import React from 'react'
import CreateImgPath from 'data/create_img_path'
import classes from './Gamburger.module.sass'

export default props=> (
	<button className= {classes.Gamburger}>
		<img onClick= {props.handleClick}
			src= {CreateImgPath('gamburger_ic.png')} 
			alt= "gamburger"
		/>
	</button>	
)

