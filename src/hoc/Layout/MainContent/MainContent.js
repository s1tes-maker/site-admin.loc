import React from 'react'

import classes from './MainContent.module.sass'
import BlockMain from 'components/MainContent/Block/Block'

import Block1 from 'components/ContentBlocks/Block1/Block1'
import Block2 from 'components/ContentBlocks/Block2/Block2'
import Block3 from 'components/ContentBlocks/Block3/Block3'
import Services from 'components/ContentBlocks/Services/Services'
import BlockEnd1 from 'components/ContentBlocks/BlockEnd1/BlockEnd1'

export default props=> (
				
	<div className= {classes.MainContent}>
		<div className= {classes.container}>

			<BlockMain content= {<Block1 />}/>
			<BlockMain content= {<Block2 />}/>
			<BlockMain content= {<Block3 />}/>
			
			<Services/>

			<BlockMain content= {<BlockEnd1 />}/>

		</div>	
	</div>	
				
)
