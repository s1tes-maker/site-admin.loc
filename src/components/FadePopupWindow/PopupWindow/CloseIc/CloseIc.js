import React from 'react';
import classes from './CloseIc.module.sass'
import CreateImgPath from 'data/create_img_path'

export default props=> (
	<div className= {classes.CloseIc}>
		<img onClick= {props.handleClick}
			src= {CreateImgPath('close_ic.png')}
			alt= "закрыть окно"
		/>
	</div>
)
