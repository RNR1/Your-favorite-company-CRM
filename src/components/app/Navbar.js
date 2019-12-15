import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Navbar() {
	return (
		<div id='navbar'>
			<Button><Link to='/clients'>Clients </Link></Button>
			<Button><Link to='/actions'>Actions </Link></Button>
			<Button><Link to='/analytics'>Analytics</Link></Button>
		</div>
	)
}
