import React from 'react';
import classes from './SitesList.module.sass'
import SiteItem from './SiteItem/SiteItem'

export default ({ sitesList })=>

<ul className= {classes.SitesList}>
{
	sitesList.map((siteItem)=>{
		return(
			<SiteItem
				key= {siteItem.id}
				siteName= {siteItem.url}
				siteId= {siteItem.id}
			/>)
	})
}
</ul>
