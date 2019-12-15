import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

@inject('client')
@observer
class SelectList extends Component {
	handleInput = event => {
		const target = event.target
		let value = target.value
		const name = target.name
		this.props.client.handleInput(name, value)
	}

	render() {
		return (
			<div className='select-list'>
				<TextField
					select
					fullWidth
					label={this.props.label}
					name={this.props.name}
					onChange={this.handleInput}
					value={this.props.client[this.props.name]}>
					{this.props.data.map(o => (
						<MenuItem key={o} name={o} value={o}>
							{o}
						</MenuItem>
					))}
				</TextField>

				<Button
					variant='contained'
					color='primary'
					onClick={this.props.onClick}>
					{this.props.action}
				</Button>
			</div>
		)
	}
}

export default SelectList
