import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SiteItem.module.sass'

export default ({siteName, siteId})=>

<li className= { classes.SiteItem }>
	<Link to={'/site/' + siteId} > { siteName } </Link>
</li>
