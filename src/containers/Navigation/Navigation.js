import React, {Component} from 'react'
import classes from './Navigation.module.sass'
import FadePopupWindow from 'components/FadePopupWindow/FadePopupWindow'
import Gamburger from 'components/Menu/Gamburger/Gamburger'
import Menu from 'components/Menu/Menu'
import classesMenu from 'components/Menu/Menu.module.sass'

class Navigation extends Component {

	state= {
		showWindow: false
	}

	handleClick=() =>{
		this.setState({
			showWindow: !this.state.showWindow
		})
	}
	
	render() {

		return (
			<nav className={classes.Navigation}>
				
				<Menu />
				
				<Gamburger
					handleClick= {this.handleClick.bind(this)}
				/>

				<FadePopupWindow

					content= { <Menu windowPopup= {true} />}
					showWindow= {this.state.showWindow}
					addedStyleClass= {classesMenu.Popup_menu_header_top}
					handleClick= {this.handleClick.bind(this)}
				/>
			</nav>
		)//return
	}//render
}//class

export default Navigation