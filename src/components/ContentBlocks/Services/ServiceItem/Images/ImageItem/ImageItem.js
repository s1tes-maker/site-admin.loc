import React, {Component} from 'react'
import classes from './ImageItem.module.sass'

class ImageItem extends Component{

	render() {

		const serviceClassName= classes['service' + this.props.idService]

		return(

			<div className= {
				classes.ImageItemWrappar + ' ' + serviceClassName}>
				
				<img 
					className={classes.ImageItem}
					src= {this.props.src}
					alt= {this.props.alt}
				/>
			</div>	
		)
	}	
}

export default ImageItem
