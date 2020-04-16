import React from 'react'
import WOW from 'wowjs'
import classesBlockMain from 'components/MainContent/Block/Block.module.sass'
import classesBlock from './Block1.module.sass'

export default props=> (

	<div className= {classesBlock.Block1}>
		<div className= {classesBlockMain.content_text_header}>
			Поручить все хлопоты нам.
		</div>
		{new WOW.WOW({live: false}).init()}
		<div className= {classesBlockMain.attention_text + " wow fadeIn animate"} data-wow-duration="2s animate">
			
			<div className= {classesBlock.contacts_wrapper}>
				
				<p>Главный бригадир:</p>
			
				<p className= {classesBlock.contacts}>
					<span>Игорь Игоревич&nbsp;</span> 
					<a href="tel:79267278792">+7 (926) 727-87-92</a>
				</p>
			</div>
			
			<div className= {classesBlock.contacts_wrapper}>	
				
				<p>Главный менеджер стройки:</p>

				<p className={classesBlock.contacts}>
					<span>Алексей Александрович&nbsp;</span> 
					<a href="tel:79251335347">+ 7 (925) 133-53-47</a>
				</p>
			
			</div>	
		</div>
	</div>	
)
