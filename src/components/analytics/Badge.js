import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Badge(props) {
	return (
		<div className='badge'>
			<div className='badge-circle' style={{backgroundColor: props.color}}><FontAwesomeIcon icon={props.icon} className="badge-icon" /></div>
			<div className='badge-data'>{props.data}</div>
			<p className='badge-cation'>{props.caption}</p>
		</div>
	)
}
