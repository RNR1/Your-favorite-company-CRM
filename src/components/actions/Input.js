import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'

@inject('client')
@observer
class Input extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}
	render() {
		return (
			<div className="input">
				<TextField
					type={this.props.type}
					name={this.props.name}
					onChange={this.handleInput}
					label={this.props.label}
					value={this.props.value}
					variant='outlined'
				/>
			</div>
		)
	}
}

export default Input
