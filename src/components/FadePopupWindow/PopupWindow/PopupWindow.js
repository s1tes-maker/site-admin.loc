import React, {Component} from 'react'
import Content from './Content/Content'
import CloseIc from './CloseIc/CloseIc'
import classes from './PopupWindow.module.sass'

class PopupWindow extends Component {
	
	render() {

		if(this.props.showWindow) {

			 return (
				<div className= {classes.PopupWindow + ' ' + this.props.addedStyleClass}>
					<CloseIc
						handleClick= {this.props.handleClick} 
					/>
					<Content
						content= {this.props.content}
					/>
				</div>
			)
		}

		else return(null)
	}	
}
export default PopupWindow
