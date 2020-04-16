import React, {Component} from 'react'
import classes from './Layout.module.sass'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'

class Layout extends Component {

	render() {

		return (
			<div className= {classes.main_wrapper}>
				<main className= {classes.main_content}>
						
					<Header/>
					<MainContent/>	

				</main>
				<footer>footer</footer>	
			</div>
		)//return
	}//render
}//class

export default Layout