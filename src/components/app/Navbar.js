import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Navbar() {
	return (
		<div id='navbar'>
			<Button component={Link} to='/clients'>
				Clients
			</Button>
			<Button component={Link} to='/actions'>
				Action
			</Button>
			<Button component={Link} to='/analytics'>
				Analytics
			</Button>
		</div>
	)
}
