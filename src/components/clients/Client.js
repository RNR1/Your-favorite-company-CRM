import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'
import {TableRow, TableCell} from '@material-ui/core'

export default function Client(props) {
	let c = props.client
	let name = c.name.split(' ')
	return (
		<TableRow>
			<TableCell>{name[0]}</TableCell>
			<TableCell>{name[1]}</TableCell>
			<TableCell>{c.country}</TableCell>
			<TableCell>
				<Moment date={c.first_contact} format='LL' />
			</TableCell>
			<TableCell>{c.email_type !== 'null' ? c.email_type : '-'}</TableCell>
			<TableCell>{c.sold ? <FontAwesomeIcon icon={faCheck} /> : '-'}</TableCell>
			<TableCell>{c.owner}</TableCell>
		</TableRow>
	)
}
