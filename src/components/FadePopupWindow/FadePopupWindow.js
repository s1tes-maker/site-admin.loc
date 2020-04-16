import React, {Component} from 'react'
import classes from './FadePopupWindow.module.sass'
import PopupWindow from './PopupWindow/PopupWindow'

class FadePopupWindow extends Component {
	
	render() {

		var HTML_teg= document.getElementsByTagName("html")[0]

		if(this.props.showWindow) {
			
			HTML_teg.style.overflow= 'hidden'	
			return(

				<div>
					<div 
						className={classes.FadePopupWindow} 
						onClick= {this.props.handleClick}
					></div>

					<PopupWindow
						content= {this.props.content}
						showWindow= {this.props.showWindow}
						addedStyleClass= {this.props.addedStyleClass}
						handleClick= {this.props.handleClick}
					/>
				</div>	
			)	
		}//if(this.props

		else {
			HTML_teg.style.overflow= 'auto'
			return(null)
		}	
	}//render
}//class	
export default FadePopupWindow
