import React from 'react'
import WOW from 'wowjs'
import classesBlockMain from 'components/MainContent/Block/Block.module.sass'
import classesBlock from './BlockEnd1.module.sass'

export default props=> (

	<div className= {classesBlock.Block3}>

		{new WOW.WOW({live: false}).init()}

		<div className= "wow fadeInLeft animate" data-wow-duration="1s">	
			<div className= {classesBlockMain.attention_text}>
				Опытные строительные бригады под пристальным наблюдением прораба, технадзора, автора проекта проведут полный комплекс строительно-монтажных работ в сжатые сроки! 
			</div>

			<div>
				Наш адрес {'\n'}
				г. Москва, Есенинский бульвар д. 14 {'\n'}
				Позвонить <a href="tel:84993919558">
					8 (499) 391-95-58 </a>
			</div>
		</div>	

	</div>	
)
