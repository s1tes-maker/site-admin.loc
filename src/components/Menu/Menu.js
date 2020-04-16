import React, {Component} from 'react';
import classes from './Menu.module.sass'
import MenuItem from './MenuItem/MenuItem'
import {servicesName} from 'data/services_name'

class Menu extends Component {

	render() {


		var className

		if(this.props.windowPopup===true) 
			className= classes.MenuPopup
		
		else className= classes.Menu	

 		return(

			<ul className= {className}>

				{servicesName.map((menuPunkt)=>{
					return(
						<MenuItem
							key= {menuPunkt.id}
							menuPunkt= {menuPunkt.name}
						/>
					)	
				})}
				
			</ul>
		)
	}
}		
export default Menu