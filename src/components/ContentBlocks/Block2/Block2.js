import React from 'react'
import classesBlockMain from 'components/MainContent/Block/Block.module.sass'
import classesBlock from './Block2.module.sass'
import CreateImgPath from 'data/create_img_path'
import WOW from 'wowjs'

export default props=> (

	<div className= {classesBlock.Block2}>
		{new WOW.WOW({live: false}).init()}
		<div className= {classesBlockMain.content_text_header} data-wow-duration="2s animate">
				Четко, качественно и в срок! 
		</div>

		<div className= {classesBlock.flex_wrapper}>

			<div className= {classesBlock.left_side}>
				<div className= "wow fadeInLeftBig animate" data-wow-duration="2s">
				
					<div className= {classesBlockMain.attention_text}>
						Наши бригады Строителей специализируются на разных видах работ. 
					</div>

					<div className= {classesBlockMain.attention_text}>
						Поэтому стройка идёт четко, качественно и в срок! 
					</div>
				</div>
				<img
					alt= "Бригада"
					src= {CreateImgPath('brigada.jpg')}
				/>
			</div>
			{new WOW.WOW({live: false}).init()}
			<div className= {classesBlock.right_side}>
				
				<img
					alt= "Мобильные системы ремонта"
					src= {CreateImgPath('cars.jpg')}
				/>
				
			</div>	
		</div>
	</div>		
)
