import React from 'react'
import classesBlockMain from 'components/MainContent/Block/Block.module.sass'
import classesBlock from './Block3.module.sass'

export default props=> (

	<div className= {classesBlock.Block3}>
		<div className= {classesBlockMain.content_text_header}>
			Условия работы
		</div>

		<div className= {classesBlockMain.attention_text}>
			Работаем по договору.  
		</div>

		<ul>
			<li> 1. Используем самые оптимальные строительные материалы.</li>
			<li> 2. Составляем предварительную смету под ваш бюджет.</li>
			<li> 3. Согласуем смету, сроки с заказчиком.</li>
			<li> 4. Подписываем договор.</li>
		</ul>

		<div>
			Проверяем строительные материалы любых поставщиков на соответствие высшим нормам Качества. {'\n'}{'\n'} 
		</div>

		<div className= {classesBlockMain.attention_text}>
			Звоните 8 (499) 391-95-58 {'\n'}
			Цены на работы Вас приятно удивят.
		</div>

		<div>
			{'\n'} Прораб составит смету по вашему запросу. Обращайтесь по телефону, расскажите подробно что необходимо сделать. 
		</div>

	</div>	
)
