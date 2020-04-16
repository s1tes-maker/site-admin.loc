import React from 'react'
import classes from './Images.module.sass'
import ImageItem from './ImageItem/ImageItem'
import CreateImgServicesPaths from './create_img_paths'

export default props=>(
		
	<div className={classes.Images}>

		{CreateImgServicesPaths(props.photoesAmount, props.idService)
		 .map( (path, index ) => {

			return (

				<ImageItem
					key= {index}
					idService= {props.idService}
					src= {path}
					alt= "картинка"
				/>
			)

		})}

	</div>
)

