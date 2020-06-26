import React from 'react'
import MainContent from '../components/MainContent/MainContent'
import SitesList from './SitesList'
import ClicksInfo from './ClicksInfo'
import Test from '../components/Test/Test'
import { Route, Switch } from 'react-router-dom'

export default ()=>
<MainContent>
	<Switch>
		<Route path="/site/:id" component={ ClicksInfo } />
		<Route path="/test" component={ Test } />
		<Route path="/" component={ SitesList } />
	</Switch>	
</MainContent>

