import React from 'react'

import classesBlockMain from 'components/MainContent/Block/Block.module.sass'
import classesService from './ServiceItem.module.sass'

import BlockMain from 'components/MainContent/Block/Block'
import AttentionTextItem from './AttentionTextItem/AttentionTextItem'
import ImagesService from './Images/Images'

export default props=> (

	<BlockMain>

		<div className= {classesService.ServiceItem + ' '+ props.WOWclass} data-wow-duration="2s animate">
			
			<h2 className= {classesBlockMain.content_text_header}> 
				{props.name}
			</h2>
		
			<ul className= {classesBlockMain.attention_text}>

				{props.attentionTextList.map(( attentionText, index )=>{

					return(
						< AttentionTextItem
							key= {index}
							attentionText= {attentionText}
						/>
					)
				})}
			</ul>

			<ImagesService 
				photoesAmount= {props.photoes.amount}
				idService= {props.id}
			/>

		</div>

	</BlockMain>	
)
