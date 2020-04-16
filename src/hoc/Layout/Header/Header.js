import React from 'react';
import classes from './Header.module.sass'
import Navigation from 'containers/Navigation/Navigation'

export default props=> (
	<header className= {classes.Header}>
		<div className= {classes.top}>
			<div className= {classes.content}>

				<div className={classes.slogan}>Строим дома, квартиры, бани, гаражи, офисы !  {'\n'}</div>

				<div className= {classes.phone} >
					<span>Телефон для связи &nbsp;</span>
					<a href="tel:84993919558"> 8 ( 499 ) 391-95-58 </a> {'\n'}
				</div>
				<div className= {classes.text_below}>
					Работаем в радиусе 200 км. от Москвы.
				</div>	
			</div>
			<Navigation
				uslugiNameList= {props.uslugiNameList}
			/>	
		</div>
	</header>	
)
