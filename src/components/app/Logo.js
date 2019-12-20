import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
	return (
		<Link to='/'>
			<img className='logo' src='/logo.png' alt='logo'></img>
		</Link>
	)
}
