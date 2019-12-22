import React from 'react'
import { Button } from '@material-ui/core'


export default function LabeledButton(props) {
	return (
		<div className='labeled-button'>
			<label>{props.label}</label>
			<Button variant='contained' color='primary' onClick={props.action}>
				{props.buttonLabel}
			</Button>
		</div>
	)
}
